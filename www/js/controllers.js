angular.module('starter.controllers', ['starter.services'])
// Constants
.constant('newMeeting',-1)
.constant('lastItem',1)

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
})

.controller('MeetingsCtrl', function($scope, $localstorage, $state, newMeeting) { 
  $scope.meetings = $localstorage.getAll();

  // Funcao de adicionar uma nova reuniao
  $scope.addAction = function() {
    $state.go('app.edit', {"id": newMeeting});
  };
})

.controller('MeetingCtrl', function($scope, $state, $stateParams, $localstorage, newMeeting, lastItem) {
  var meeting = $localstorage.getMeeting($stateParams.id);

  $scope.meeting = meeting;
  if($stateParams.id == newMeeting){ // Nova reunião
    $scope.title = 'Nova reunião';
  } else {
    if(meeting.id === undefined){ // Reunião inexistente
      $scope.title = 'Reunião inexistente';
    }else{
      $scope.title = 'Reunião ' + $stateParams.id;
    }
  }
  
  // Ação do botão editar. Tela de visualização
  $scope.viewEditAction = function(id) {
    $state.go('app.edit', {"id": id});
  };

  // Ação do botão editar. Tela de visualização
  $scope.saveAction = function(id) {
    console.log($scope.meeting);
  };

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

  $scope.addValue = function(group){
    group.items.push("Value"+(lastItem++));
  };
  
  $scope.editAction = function(){
    console.log('edit action');
  }
  
  $scope.deleteAction = function(items, index){
    items.splice(index, 1);
  }
})
