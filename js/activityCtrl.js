angular.module('teamsteria')
    .controller('ActivityCtrl', ['$scope', '$rootScope',
        function($scope, $rootScope) {

        	if($rootScope.newActivity == undefined){
        		$rootScope.newActivity = {date:'1. nov 2013 kl. 16:35', type:''}
        	}
        	$scope.newActivity = $rootScope.newActivity

        	
		
	}]);