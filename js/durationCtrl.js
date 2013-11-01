angular.module('teamsteria')
    .controller('DurationCtrl', ['$scope', '$rootScope',
        function($scope, $rootScope) {
        	$scope.newActivity = $rootScope.newActivity
	}]);