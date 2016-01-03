angular.module('starter.services', [])
.factory('$localstorage', ['$window', function($window) {
	var lastID = 4;
	var meetings = [
	    { id: 1, title: 'Meeting 1', 
	      groups: [{name:'Done', items:['done1.1', 'done1.2']}, 
	                {name:'Doing', items:['doing1.1', 'doing1.2']}, 
	                {name:'To Do', items:['todo1.1', 'todo1.2']}, 
	                {name:'Observation', items:['obs1.1', 'obs1.2']}]
	    },
	    { id: 2, title: 'Meeting 2',
	      groups: [{name:'Done', items:['done2.1', 'done2.2']}, 
	                {name:'Doing', items:['doing2.1', 'doing2.2']}, 
	                {name:'To Do', items:['todo2.1', 'todo2.2']}, 
	                {name:'Observation', items:['obs2.1', 'obs2.2']}]
	    },
	    { id: 3, title: 'Meeting 3',
	      groups: [{name:'Done', items:['done3.1', 'done3.2']}, 
	                {name:'Doing', items:['doing3.1', 'doing3.2']}, 
	                {name:'To Do', items:['todo3.1', 'todo3.2']}, 
	                {name:'Observation', items:['obs3.1', 'obs3.2']}]
	    },
	    { id: 4, title: 'Meeting 4',
	      groups: [{name:'Done', items:['done4.1', 'done4.2']}, 
	                {name:'Doing', items:['doing4.1', 'doing4.2']}, 
	                {name:'To Do', items:['todo4.1', 'todo4.2']}, 
	                {name:'Observation', items:['obs4.1', 'obs4.2']}]
	    }
	  ];

  	return {
	    set: function(key, value) {
	      $window.localStorage[key] = value;
	    },
	    get: function(key, defaultValue) {
	      return $window.localStorage[key] || defaultValue;
	    },
	    setObject: function(key, value) {
	      $window.localStorage[key] = JSON.stringify(value);
	    },
	    getObject: function(key) {
	      return JSON.parse($window.localStorage[key] || '{}');
	    },
	    getAll: function(){
			return meetings;
		},
		getMeeting: function(id) {
			for (i = 0; i < meetings.length; i++) {
			    if(meetings[i].id == id){
			      return meetings[i];
			    }
			}
			return {
				groups: [{name:'Done', items:[]}, 
                		{name:'Doing', items:[]}, 
                		{name:'To Do', items:[]}, 
                		{name:'Observation', items:[]}]
			};			
		},
		addMeeting: function(meeting){
			meeting.id = ++lastID;
			meetings.push(meeting);
			console.log(meetings);
		}
	}
}]);