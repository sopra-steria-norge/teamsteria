angular.module('teamsteria', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl: 'partials/home.html',   controller: 'HomeCtrl'}).
            when('/register', {templateUrl: 'partials/register.html',   controller: 'MenuCtrl'}).
            when('/profile', {templateUrl: 'partials/profile.html',   controller: 'ProfileCtrl'}).
            when('/pageone/:someId', {templateUrl: 'partials/pageWithId.html', controller: 'PageWithIdCtrl'}).
            otherwise({redirectTo: '/home'});
    }]);