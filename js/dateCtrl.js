angular.module('teamsteria')
    .controller('DateCtrl', ['$scope', '$rootScope',
        function($scope, $rootScope) {
        	$scope.newActivity = $rootScope.newActivity
        	$scope.activities = $rootScope.activities
			$scope.profileActivities = $rootScope.profileActivities
	}]);