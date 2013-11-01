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
	    		var status = 'har ' + $scope.newActivity.type + ' ' + $scope.newActivity.duration + ' minutter og fått 40 poeng!';
	        	$rootScope.profileActivities.unshift({name:'Ola Nordmann', date:$scope.newActivity.date , pic:'olaNordmann', status:status, kudos:[], comments:0})

        	}

        	
		
	}]);