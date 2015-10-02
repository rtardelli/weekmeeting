angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
})

.controller('MeetingsCtrl', function($scope, $localstorage) {
  
  $scope.meetings = $localstorage.getAll();

  $scope.addMeeting = function(){
    console.log('Ir para tela de novo meeting');
  };
})

.controller('MeetingCtrl', function($scope, $stateParams, $localstorage) {

  $scope.title = 'Reunião ' + $stateParams.meetingId;

  var allMeetings = $localstorage.getAll();

  for (i = 0; i < allMeetings.length; i++) {
    if(allMeetings[i].id == $stateParams.meetingId){
      $scope.groups = allMeetings[i].groups;
      break;
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
})
