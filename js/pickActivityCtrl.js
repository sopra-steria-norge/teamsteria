angular.module('teamsteria')
    .controller('PickActivityCtrl', ['$scope', '$rootScope',
        function($scope, $rootScope) {
        	$scope.newActivity = $rootScope.newActivity

        	$scope.chooseActivity = function(type){
        		$scope.newActivity.type = type
        	}
	}]);