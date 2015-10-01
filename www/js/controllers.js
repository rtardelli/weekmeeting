angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
})

.controller('MeetingsCtrl', function($scope) {
  $scope.meetings = [
    { id: 1, title: 'Meeting 1', location: 'Rio de Janeiro', 
      groups: [{name:'Done', items:['done1.1', 'done1.2']}, 
                {name:'Doing', items:['doing1.1', 'doing1.2']}, 
                {name:'To Do', items:['todo1.1', 'todo1.2']}, 
                {name:'Observation', items:['obs1.1', 'obs1.2']}]
    },
    { id: 2, title: 'Meeting 2', location: 'São Paulo',
      groups: [{name:'Done', items:['done2.1', 'done2.2']}, 
                {name:'Doing', items:['doing2.1', 'doing2.2']}, 
                {name:'To Do', items:['todo2.1', 'todo2.2']}, 
                {name:'Observation', items:['obs2.1', 'obs2.2']}]
    },
    { id: 3, title: 'Meeting 3', location: 'Belo Horizonte',
      groups: [{name:'Done', items:['done3.1', 'done3.2']}, 
                {name:'Doing', items:['doing3.1', 'doing3.2']}, 
                {name:'To Do', items:['todo3.1', 'todo3.2']}, 
                {name:'Observation', items:['obs3.1', 'obs3.2']}]
    },
    { id: 4, title: 'Meeting 4', location: 'Porto Alegre',
      groups: [{name:'Done', items:['done4.1', 'done4.2']}, 
                {name:'Doing', items:['doing4.1', 'doing4.2']}, 
                {name:'To Do', items:['todo4.1', 'todo4.2']}, 
                {name:'Observation', items:['obs4.1', 'obs4.2']}]
    }
  ];
  console.log('MeetingsCtrl', $scope);

  $scope.addMeeting = function(){
    console.log('Ir para tela de novo meeting');
  };
})

.controller('MeetingCtrl', function($scope, $stateParams) {
  console.log("meetingID encontrado: " + $stateParams.meetingId)

  $scope.title = 'Reunião ' + $stateParams.meetingId;

  //TODO: E se $scope.meetings nao tiver sido inicializado???
  for (i = 0; i < $scope.meetings.lenght; i++) {
    if($scope.meetings[i].id === $stateParams.meetingId){
      $scope.groups = $scope.meetings[i].groups;
    }
  };

  /*$scope.groups = [];
  // Inserindo os grupos
  $scope.groups[0] = {
    name: 'Done',
    items: []
  };
  $scope.groups[1] = {
    name: 'Doing',
    items: []
  };
  $scope.groups[2] = {
    name: 'To Do',
    items: []
  };
  $scope.groups[3] = {
    name: 'Observation',
    items: []
  };

  // Inserindo tarefas
  // tarefas - Done
  $scope.groups[0].items.push('done 1');
  $scope.groups[0].items.push('done 2');
    
  // tarefas - Doing
  $scope.groups[1].items.push('doing 1');
  $scope.groups[1].items.push('doing 2');
  $scope.groups[1].items.push('doing 3');

  // tarefas - To Do
  $scope.groups[2].items.push('to do 1');
  $scope.groups[2].items.push('to do 2');
  $scope.groups[2].items.push('to do 3');
  $scope.groups[2].items.push('to do 4');

  // tarefas - Observação
  $scope.groups[3].items.push('obs 1');
  $scope.groups[3].items.push('obs 2');
  $scope.groups[3].items.push('obs 3');
  $scope.groups[3].items.push('obs 4');
  $scope.groups[3].items.push('obs 5');*/

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})
