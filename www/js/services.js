angular.module('starter.services', [])
.factory('$localstorage', ['$window', function($window) {
	var lastID = 4;
	var meetings = [];
	  
	var buildMeeting = function(id, title, groups){
		if(id === undefined){
			id = -1;
		}
		if(title === undefined){
			title = 'Empty';
		}
		if(groups === undefined){
			groups = [{name:'Done', items:[]}, {name:'Doing', items:[]}, 
                	{name:'To Do', items:[]}, {name:'Observation', items:[]}];
		}
		
		return {id: id, title: title, groups: groups};
	};

  	return {
	    getAll: function(){
			return meetings;
		},
		get: function(id) {
			for (i = 0; i < meetings.length; i++) {
			    if(meetings[i].id == id){
			      return meetings[i];
			    }
			}
			return buildMeeting();			
		},
		add: function(meeting){
			console.log('Adicionando a reuniao: ' + meeting);
			meeting.id = ++lastID;
			meetings.push(meeting);
			console.log(meetings);
		},
		update: function(meeting){
			console.log('Atualizando a reuniao: ' + meeting);
			for(var i = 0; i < meetings.length; i++){
				if(meeting.id === meetings[i].id){
					meetings.splice(i, 1, meeting);
					break;
				}
			}
			console.log(meetings);
		},
		remove: function(id){
			console.log('Removendo a reuniao: ' + id);
			for(var i = 0; i < meetings.length; i++){
				if(id === meetings[i].id){
					meetings.splice(i, 1);
					break;
				}
			}
			console.log(meetings);
		}
	}
}]);