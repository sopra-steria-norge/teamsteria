angular.module('teamsteria')
    .controller('HomeCtrl', ['$scope',
        function($scope) {
		
			$scope.activities = [
			{id:0, name:'Ola Nordmann', date:'23. okt 2013 kl. 20:37', pic:'olaNordmann', status:'har syklet 40km p� 5 timer og fikk 65 poeng!', kudos:[{name:'Trude'}, {name:'Guri'}], comments:5},
			{id:1, name:'Bj�rn D�hli', date:'24. okt 2013 kl. 10:00', pic:'profilePicture2', status:'har jogget 5km p� 40 minutter og fikk 30 poeng!', kudos:[{name:'Trude'}, {name:'Guri'}, {name:'Morten'}, {name:'Bj�rn'}], comments:15},
			{id:2, name:'Kari Nordmann', date:'25. okt 2013 kl. 11:07', pic:'profilePicture3', status:'har lyst p� en l�petur ikveld, noen som vil v�re med? Ca klokken 18:00 p� Sognsvann?', kudos:[{name:'Trude'}, {name:'Guri'}], comments:1},
			{id:3, name:'Kjell Rusti', date:'19. sept 2013 kl. 22:41', pic:'kjellRusti', status:'har g�tt p� ski 20km p� 1 time og fikk 39 poeng!', kudos:[{name:'Trude'}, {name:'Guri'}, {name:'Morten'}], comments:9},
			{id:4, name:'Marit Bj�rgen', date:'2. aug 2013 kl. 19:49', pic:'maritBjorgen',status:'har syklet 50km p� 3 timer og fikk 72 poeng!', kudos:[{name:'Trude'}, {name:'Guri'}, {name:'Ola'}, {name:'Bj�n'}, {name:'Kari'}], comments:1},
			{id:5, name:'Endaett Navn', date:'29. okt 2013 kl. 14:40', pic:'profilePicture', status:'har g�tt 3km p� 5 timer og fikk 14 poeng!', kudos:[{name:'Trude'}], comments:4}] 
        
			$scope.addKudos = function(index) {
				$scope.activities[index].kudos.push({name:'Marit'}) }
		}	
	]);