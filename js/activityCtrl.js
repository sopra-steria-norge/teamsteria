angular.module('teamsteria')
    .controller('ActivityCtrl', ['$scope',
        function($scope) {

        	$scope.addActivity= function(newActivity) {
        		console.log("gamle " + $scope.activities[0].date)
        		console.log("ny: " + newActivity.date);
				$scope.activities.push({date:'newActivity.date'}) }
		
	}]);