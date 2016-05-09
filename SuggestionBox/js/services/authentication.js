 	 app.service("authentication", [
		'$http',
		'$q',
		'$window',
		function($http, $q, $window) {
			
			var userInfo;

			this.login = function(userName, password) {
				var deferred = $q.defer();

				if (userName == "test" && password == "test") {
					userInfo = {
						accessToken : "565537gfhgsgfh",
						userName : "Test User"
					};
					$window.sessionStorage["userInfo"] = JSON
							.stringify(userInfo);
					deferred.resolve(userInfo);
				} else {
					deferred.reject("This is a problem");
				}
				return deferred.promise;
			}

			this.getUserInfo = function() {
				userInfo = $window.sessionStorage["userInfo"];
				return userInfo;
			}
			
			this.logout = function() {
				 $window.sessionStorage["userInfo"]="";
				return userInfo;
			}
			
		} ]);