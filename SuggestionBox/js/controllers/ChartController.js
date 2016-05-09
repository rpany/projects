app.controller('ChartController', [
		'$scope',
		'$timeout',
		function($scope, $timeout) {

			$scope.labels = [ "January", "February", "March", "April", "May",
					"June", "July" ];
			$scope.series = [ 'Overall', 'Catherer', 'Blood' ];
			$scope.data = [ [ 20, 69, 60, 81, 56, 55, 40 ],
					[ 20, 48, 40, 19, 15, 27, 23 ],
					[ 10, 18, 20, 19, 30, 27, 20 ] ];
			$scope.onClick = function(points, evt) {
				console.log(points, evt);
			};

			$scope.onHover = function(points) {
				if (points.length > 0) {
					console.log('Point', points[0].value);
				} else {
					console.log('No point');
				}
			};
/*
			$timeout(function() {
				$scope.labels = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
						'Friday', 'Saturday', 'Sunday' ];
				$scope.data = [ [ 28, 48, 40, 19, 86, 27, 90 ],
						[ 65, 59, 80, 81, 56, 55, 40 ] ];
				$scope.series = [ 'Series C', 'Series D' ];
			}, 3000);
*/
		} ]);