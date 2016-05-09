app.controller('LoginController', [
		'$scope',
		'$rootScope',
		'$location',
		'authentication',
		function($scope, $rootScope, $location, authentication) {
			console.log($location.path);
			$scope.login = function() {
				var result = authentication.login($scope.credentials.username, $scope.credentials.password);
				result.then(function() {
					$rootScope.authenticated = true;
					$scope.error = false;
					$location.path("/chart");
					},function(){
					$rootScope.authenticated = false;
					$scope.error = true;
				})};
			
			
			$scope.logout=function(){
				$rootScope.authenticated=false;
				authentication.logout();
				$location.path("/");
			};

		} ]);
