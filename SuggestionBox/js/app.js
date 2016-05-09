var app = angular.module('SuggestionBox', [ 'ngRoute' , 'chart.js', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/login', {
		controller : 'LoginController',
		templateUrl : 'views/login.html'
	}).when('/home', {
		controller : 'HomeController',
		templateUrl : 'views/home.html',
		resolve : {
			auth : [ "$q", "authentication", function($q, authentication) {
				var userInfo = authentication.getUserInfo();

				if (userInfo) {
					return $q.when(userInfo);
				} else {
					return $q.reject({
						authenticated : false
					});
				}
			} ]
		}
	}).when('/suggestion/:id', {
		controller : 'SuggestionController',
		templateUrl : 'views/suggestion.html',
		resolve : {
			auth : [ "$q", "authentication", function($q, authentication) {
				var userInfo = authentication.getUserInfo();

				if (userInfo) {
					return $q.when(userInfo);
				} else {
					return $q.reject({
						authenticated : false
					});
				}
			} ]
		}
	}).when('/chart', {
		controller : 'ChartController',
		templateUrl : 'views/chart.html',
		resolve : {
			auth : [ "$q", "authentication", function($q, authentication) {
				var userInfo = authentication.getUserInfo();

				if (userInfo) {
					return $q.when(userInfo);
				} else {
					return $q.reject({
						authenticated : false
					});
				}
			} ]
		}
	}).otherwise({
		redirectTo : '/home'
	});
	 $locationProvider.html5Mode(true);

});

app.config(function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      responsive: true
    });
    // Configure all doughnut charts
    ChartJsProvider.setOptions('Doughnut', {
      animateScale: true
    });
  });

app.run(["$rootScope", "$location", function($rootScope, $location) {
	  $rootScope.$on("$routeChangeSuccess", function(userInfo) {
	    console.log(userInfo);
	  });

	  $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
	    if (eventObj.authenticated === false) {
	      $location.path("/login");
	    }
	  });
	}]);