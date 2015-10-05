angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
})

.controller('MeetingsCtrl', function($scope, $localstorage) { 
  $scope.meetings = $localstorage.getAll();
})

.controller('MeetingCtrl', function($scope, $state, $stateParams, $localstorage) {
  $scope.title = 'Reunião ' + $stateParams.id;

  var allMeetings = $localstorage.getAll();

  for (i = 0; i < allMeetings.length; i++) {
    if(allMeetings[i].id == $stateParams.id){
      $scope.meeting = allMeetings[i];
      break;
    }
  };

  $scope.editAction = function(id) {
    $state.go('app.edit',{ "id": id});
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
})
