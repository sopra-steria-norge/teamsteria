angular.module('teamsteria')
    .controller('HomeCtrl', ['$scope',
        function($scope) {
		
			$scope.activities = [
			{id:0, name:'Ola Nordmann', date:'23. okt 2013 kl. 20:37', pic:'olaNordmann', status:'har syklet 40km på 5 timer og fikk 65 poeng!', kudos:[{name:'Trude'}, {name:'Guri'}], comments:5},
			{id:1, name:'Bjørn Dæhli', date:'24. okt 2013 kl. 10:00', pic:'profilePicture2', status:'har jogget 5km på 40 minutter og fikk 30 poeng!', kudos:[{name:'Trude'}, {name:'Guri'}, {name:'Morten'}, {name:'Bjørn'}], comments:15},
			{id:2, name:'Kari Nordmann', date:'25. okt 2013 kl. 11:07', pic:'profilePicture3', status:'har lyst på en løpetur ikveld, noen som vil være med? Ca klokken 18:00 på Sognsvann?', kudos:[{name:'Trude'}, {name:'Guri'}], comments:1},
			{id:3, name:'Kjell Rusti', date:'19. sept 2013 kl. 22:41', pic:'kjellRusti', status:'har gått på ski 20km på 1 time og fikk 39 poeng!', kudos:[{name:'Trude'}, {name:'Guri'}, {name:'Morten'}], comments:9},
			{id:4, name:'Marit Bjørgen', date:'2. aug 2013 kl. 19:49', pic:'maritBjorgen',status:'har syklet 50km på 3 timer og fikk 72 poeng!', kudos:[{name:'Trude'}, {name:'Guri'}, {name:'Ola'}, {name:'Bjøn'}, {name:'Kari'}], comments:1},
			{id:5, name:'Endaett Navn', date:'29. okt 2013 kl. 14:40', pic:'profilePicture', status:'har gått 3km på 5 timer og fikk 14 poeng!', kudos:[{name:'Trude'}], comments:4}] 
        
			$scope.addKudos = function(index) {
				$scope.activities[index].kudos.push({name:'Marit'}) }
		}	
	]);