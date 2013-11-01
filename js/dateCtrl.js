angular.module('teamsteria')
    .controller('DateCtrl', ['$scope', '$rootScope',
        function($scope, $rootScope) {
        	$scope.newActivity = $rootScope.newActivity
	}]);