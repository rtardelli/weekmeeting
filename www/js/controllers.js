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

.controller('MeetingCtrl', function($scope, $state, $stateParams, $localstorage, newMeeting, lastItem, $ionicModal, $ionicListDelegate) {
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
  
  // Load the add / edit dialog from the given template URL
  $ionicModal.fromTemplateUrl('templates/add-edit-dialog.html', function(modal) {
    $scope.addDialog = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });
  
  $scope.showAddChangeDialog = function(action) {
    $scope.action = action;
    $scope.addDialog.show();
  };
  
  $scope.leaveAddChangeDialog = function() {
    // Remove dialog 
    $scope.addDialog.remove();
    // Reload modal template to have cleared form
    $ionicModal.fromTemplateUrl('templates/add-edit-dialog.html', function(modal) {
      $scope.addDialog = modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });
  };
  
  // Used to cache the empty form for Edit Dialog
  $scope.saveEmpty = function(form) {
    $scope.form = angular.copy(form);
  }
  
  $scope.addItem = function(form) {
    //TODO: Implementar
    //var newItem = {};
    // Add values from form to object
    console.log("retorno da adicao: "+form.item.$modelValue);
    // Save new list in scope and factory
    //$scope.list.push(newItem);
    //ListFactory.setList($scope.list);
    // Close dialog
    $scope.leaveAddChangeDialog();
  };
  
  $scope.showEditItem = function(group, item) {
    console.log(group)
    // Remember edit item to change it later
    $scope.tmpEditGroup = group;
    $scope.tmpEditItem = item;

    // Setting form model-value
    $scope.form.itemtest.$setViewValue(item);

    // Open dialog
    $scope.showAddChangeDialog('edit');
    
    // Close de options buttons
    $ionicListDelegate.closeOptionButtons();
  };

  $scope.editItem = function(form) {
    var editIndex = $scope.tmpEditGroup.items.indexOf($scope.tmpEditItem);
    $scope.tmpEditGroup.items[editIndex] = form.itemtest.$modelValue;

    // Close dialog
    $scope.leaveAddChangeDialog();
  };
})
