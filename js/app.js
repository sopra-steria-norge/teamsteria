angular.module('teamsteria', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl: 'partials/home.html',   controller: 'HomeCtrl'}).
            when('/profile', {templateUrl: 'partials/profile.html',   controller: 'ProfileCtrl'}).
			when('/activity', {templateUrl: 'partials/activity.html', controller: 'ActivityCtrl'}).
			when('/date', {templateUrl: 'partials/date.html', controller: 'DateCtrl'}).
			when('/duration', {templateUrl: 'partials/duration.html', controller: 'DurationCtrl'}).
			when('/pickActivity', {templateUrl: 'partials/pickActivity.html', controller: 'PickActivityCtrl'}).
            when('/pageone/:someId', {templateUrl: 'partials/pageWithId.html', controller: 'PageWithIdCtrl'}).
            otherwise({redirectTo: '/home'});
    }]);