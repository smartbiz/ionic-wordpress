angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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

// CONTACT
.controller('ContactCtrl', function($scope) {

  //map
  $scope.position = {
    lat: 43.07493,
    lng: -89.381388
  };

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });
})

//EMAIL SENDER
.controller('EmailSenderCtrl', function($scope, $cordovaEmailComposer) {

  $scope.sendFeedback = function() {
    cordova.plugins.email.isAvailable(
      function(isAvailable) {
        // alert('Service is not available') unless isAvailable;
        cordova.plugins.email.open({
          to: 'john@doe.com',
          cc: 'jane@doe.com',
          subject: 'Feedback',
          body: 'This app is awesome'
        });
      }
    );
  };

  $scope.sendContactMail = function() {
    //Plugin documentation here: http://ngcordova.com/docs/plugins/emailComposer/

    $cordovaEmailComposer.isAvailable().then(function() {
      // is available
      $cordovaEmailComposer.open({
          to: 'john@doe.com',
          cc: 'sally@doe.com',
          subject: 'Contact from ionWordpress',
          body: 'How are you? Nice greetings from Uruguay'
        })
        .then(null, function() {
          // user cancelled email
        });
    }, function() {
      // not available
    });
  };

})

// SETTINGS
.controller('SettingCtrl', function($scope, $ionicActionSheet, $ionicModal, $state, AuthService) {
  $scope.notifications = true;
  $scope.sendLocation = false;

  $ionicModal.fromTemplateUrl('views/common/terms.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.terms_modal = modal;
  });

  $ionicModal.fromTemplateUrl('views/common/faqs.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.faqs_modal = modal;
  });

  $ionicModal.fromTemplateUrl('views/common/credits.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.credits_modal = modal;
  });

  $scope.showTerms = function() {
    $scope.terms_modal.show();
  };

  $scope.showFAQS = function() {
    $scope.faqs_modal.show();
  };

  $scope.showCredits = function() {
    $scope.credits_modal.show();
  };

  // Triggered on a the logOut button click
  $scope.showLogOutMenu = function() {

    // Show the action sheet
    var hideSheet = $ionicActionSheet.show({
      //Here you can add some more buttons
      // buttons: [
      // { text: '<b>Share</b> This' },
      // { text: 'Move' }
      // ],
      destructiveText: 'Logout',
      titleText: 'Are you sure you want to logout? This app is awsome so I recommend you to stay.',
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        //Called when one of the non-destructive buttons is clicked,
        //with the index of the button that was clicked and the button object.
        //Return true to close the action sheet, or false to keep it opened.
        return true;
      },
      destructiveButtonClicked: function() {
        //Called when the destructive button is clicked.
        //Return true to close the action sheet, or false to keep it opened.
        AuthService.logOut();
        $state.go('login');
      }
    });
  };
})

// .controller('PlaylistsCtrl', function($scope) {
//   $scope.playlists = [
//     { title: 'Reggae', id: 1 },
//     { title: 'Chill', id: 2 },
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//     { title: 'Cowbell', id: 6 }
//   ];
// })
//
// .controller('PlaylistCtrl', function($scope, $stateParams) {
// });
