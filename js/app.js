angular.module('teamsteria', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl: 'partials/home.html',   controller: 'KalkyleMenyCtrl'}).
            when('/menu', {templateUrl: 'partials/menu.html',   controller: 'DokumentCtrl'}).
            when('/pageone/:someId', {templateUrl: 'partials/pageWithId.html', controller: 'PageWithIdCtrl'}).
            otherwise({redirectTo: '/home'});
    }]);