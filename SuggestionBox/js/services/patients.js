app.factory('patients', [function(){
	var patientList = {
			patients: [
			        	{
			        		firstName: 'John',
			        		lastName: 'Doe',
			        		dob: '20041102',
			        		location: 'Room 3.12',
			        		diagnosis: 'Trauma'
			        	},
			        	{
			        		firstName: 'Ken',
			        		lastName: 'Moritz',
			        		dob: '20071502',
			        		location: 'Room 3.11',
			        		diagnosis: 'Lung'
			        	},
			        	{
			        		firstName: 'Sam',
			        		lastName: 'Johnson',
			        		dob: '20041102',
			        		location: 'Room 7.1',
			        		diagnosis: 'yyz'
			        	},
			        	{
			        		firstName: 'Wally',
			        		lastName: 'Hammond',
			        		dob: '20041102',
			        		location: 'Room 2.12',
			        		diagnosis: 'yyz'
			        	},
			        	{
			        		firstName: 'Rick',
			        		lastName: 'Chang',
			        		dob: '20041102',
			        		location: 'ICU',
			        		diagnosis: 'yyz'
			        	}
			        	]
	};
	return patientList;
}]);