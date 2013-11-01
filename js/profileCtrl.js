angular.module('teamsteria')
    .controller('ProfileCtrl', ['$scope', '$rootScope',
        function($scope, $rootScope) {
			$scope.activities = $rootScope.activities
			$scope.profileActivities = $rootScope.profileActivities
		}	
	]);