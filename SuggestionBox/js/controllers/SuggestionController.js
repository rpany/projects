app.controller('SuggestionController', [ '$scope', 'suggestions', '$routeParams',
		function($scope, suggestions, $routeParams) {
			
			$scope.post = suggestions.posts[$routeParams.id];

			$scope.addComment = function() {

				// if input empty, don't submit
				if (!$scope.comment || $scope.comment === "") {
					return;
				}

				// push suggestion posts in suggestions.js
				$scope.post.comments.push({
					title : $scope.comment
				});

				// after submit, clear input
				$scope.comment = '';
			};

			

		} ]);