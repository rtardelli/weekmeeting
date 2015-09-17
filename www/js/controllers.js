angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  console.log('PlaylistsCtrl', $scope);
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('MeetingsCtrl', function($scope) {
  $scope.meetings = [
    { title: 'Meeting 1', location: 'Rio de Janeiro', id: 1 },
    { title: 'Meeting 2', location: 'São Paulo', id: 2 },
    { title: 'Meeting 3', location: 'Belo Horizonte', id: 3 },
    { title: 'Meeting 4', location: 'Porto Alegre', id: 4 }
  ];
  console.log('MeetingsCtrl', $scope);
})

.controller('MeetingCtrl', function($scope) {
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
    
  // tarefas - Doing
  $scope.groups[1].items.push('doing 1');
  $scope.groups[1].items.push('doing 2');

  // tarefas - To Do
  $scope.groups[2].items.push('to do 1');
  $scope.groups[2].items.push('to do 2');
  $scope.groups[2].items.push('to do 3');

  // tarefas - Observação
  $scope.groups[3].items.push('obs 1');
  $scope.groups[3].items.push('obs 2');
  $scope.groups[3].items.push('obs 3');
  $scope.groups[3].items.push('obs 4');

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
