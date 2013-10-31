angular.module('teamsteria')
    .controller('ProfileCtrl', ['$scope',
        function($scope) {
		
			$scope.profileActivities = [
			{id:0, name:'Ola Nordmann', date:'31. okt 2013 kl. 21:37', pic:'profilePicture3', status:'har syklet i 5 timer og fikk 65 poeng!', kudos:[{name:'Trude'}, {name:'Guri'}], comments:5},
			{id:1, name:'Ola Nordmann', date:'31. okt 2013 kl. 10:00', pic:'profilePicture3', status:'har jogget i 40 minutter og fikk 30 poeng!', kudos:[{name:'Trude'}, {name:'Guri'}, {name:'Morten'}, {name:'Bjørn'}], comments:15},
			{id:2, name:'Ola Nordmann', date:'30. okt 2013 kl. 18:00', pic:'profilePicture3', status:'har løpt i 1 time og fått 33 poeng', kudos:[{name:'Trude'}, {name:'Guri'}], comments:1},
			{id:3, name:'Marit Bjørgen', date:'29. okt 2013 kl. 12:41', pic:'maritBjorgen', status:': Du er flink!', kudos:[{name:'Trude'}, {name:'Guri'}, {name:'Morten'}], comments:9},
			{id:4, name:'Ola Nordmann', date:'28. okt 2013 kl. 13:37', pic:'profilePicture3', status:'har gått i 5 timer og fikk 14 poeng!', kudos:[{name:'Trude'}], comments:4}] 
		}	
	]);