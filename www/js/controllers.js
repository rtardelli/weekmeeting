angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
})

.controller('MeetingsCtrl', function($scope) {
  $scope.meetings = [
    { id: 1, title: 'Meeting 1', location: 'Rio de Janeiro'},
    { id: 2, title: 'Meeting 2', location: 'São Paulo'},
    { id: 3, title: 'Meeting 3', location: 'Belo Horizonte'},
    { id: 4, title: 'Meeting 4', location: 'Porto Alegre'}
  ];
  console.log('MeetingsCtrl', $scope);
})

.controller('MeetingCtrl', function($scope, $stateParams) {
  console.log("meetingID encontrado: " + $stateParams.meetingId)

  $scope.title = 'Reunião ' + $stateParams.meetingId;

  $scope.groups = [];
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
  $scope.groups[3].items.push('obs 5');

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
