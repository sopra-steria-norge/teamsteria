angular.module('teamsteria', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl: 'partials/home.html',   controller: 'HomeCtrl'}).
            when('/profile', {templateUrl: 'partials/profile.html',   controller: 'ProfileCtrl'}).
			when('/activity', {templateUrl: 'partials/activity.html', controller: 'ActivityCtrl'}).
            when('/pageone/:someId', {templateUrl: 'partials/pageWithId.html', controller: 'PageWithIdCtrl'}).
            otherwise({redirectTo: '/home'});
    }]);