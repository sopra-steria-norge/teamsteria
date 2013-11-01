angular.module('teamsteria')
    .controller('ActivityCtrl', ['$scope', '$rootScope',
        function($scope, $rootScope) {

        	if($rootScope.newActivity == undefined){
        		$rootScope.newActivity = {date:'31. nov 2013', type:''}
        	}
        	$scope.newActivity = $rootScope.newActivity
        	$scope.activities = $rootScope.activities
			$scope.profileActivities = $rootScope.profileActivities

	    	$scope.saveActivity = function(){
	        	$rootScope.profileActivities.push({name:'Ola Nordmann', date:$scope.newActivity.date , pic:'olaNordmann', status:'har $scope.newActivity.date 40km på 5 timer og fikk 65 poeng!'})
        	}

        	
		
	}]);