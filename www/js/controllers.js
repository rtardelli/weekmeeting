angular.module('starter.controllers', ['starter.services'])
// Constants
.constant('newMeeting',-1)

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
})

.controller('MeetingsCtrl', function($scope, $localstorage, $state, newMeeting) { 
  $scope.meetings = $localstorage.getAll();

  // Funcao de adicionar uma nova reuniao
  $scope.addAction = function() {
    $state.go('app.edit', {"id": newMeeting});
  };
})

.controller('MeetingCtrl', function($scope, $state, $stateParams, $localstorage, newMeeting, $ionicModal, $ionicPopup, $ionicListDelegate) {
  $scope.meeting = $localstorage.get($stateParams.id);

  // Ação do botão editar. Tela de visualização
  $scope.editOneMeeting = function(id) {
    $state.go('app.edit', {"id": id});
  };

  $scope.deleteOneMeeting = function(id) {
    console.log('Deletando a reunião ' + id);
     var confirmPopup = $ionicPopup.confirm({
     title: 'Remover',
     template: 'Tem certeza de que quer remover essa reunião?'
   });

   confirmPopup.then(function(res) {
     if(res) {
       $localstorage.remove(id);
     }
   });
  };
  
  // Ação do botão salvar(Persistir reunião)
  $scope.saveAction = function() {
    if($scope.meeting.id == newMeeting){
      //add action
      console.log($scope.meeting);
      $localstorage.add($scope.meeting);
      $state.go('app.meetings');
    }else{
      //edit action
      console.log($scope.meeting);
      $localstorage.update($scope.meeting);
      $state.go('app.meetings');
    }
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
  
  $scope.showAddChangeDialog = function(dialog) {
    $scope.dialog = dialog;
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
  
  $scope.showAddItem = function(group) {
    // Remember edit item to change it later
    $scope.tmpGroup = group;
    
    // Open dialog
    var dialog = {title: 'Adding '+group.name, action: 'add'};
    $scope.showAddChangeDialog(dialog);
    
    // Close de options buttons
    $ionicListDelegate.closeOptionButtons();
  }
  
  $scope.addItem = function(form) {
    $scope.tmpGroup.items.push(form.itemtest.$modelValue);

    // Close dialog
    $scope.leaveAddChangeDialog();
  };
  
  $scope.showEditItem = function(group, item) {
    // Remember edit item to change it later
    $scope.tmpEditGroup = group;
    $scope.tmpEditItem = item;

    // Setting form model-value
    $scope.form.itemtest.$setViewValue(item);
    $scope.form.itemtest.$render();

    // Open dialog
    var dialog = {title: 'Editing '+group.name, action: 'edit'};
    $scope.showAddChangeDialog(dialog);
    
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
