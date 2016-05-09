app.controller('PatientController', [ '$scope', 'patients',
		function($scope, patients) {
			
			$scope.patients = patients.patients;


		} ]);