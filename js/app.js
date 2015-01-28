angular.module('scheduleApp', ['firebase'])

.controller('mainController', ['$scope', function ($scope) {
  // connect to Firebase
  var ref = new Firebase("https://path/to/connection/<database_name>");
  var firebaseConnection = $firebase(ref);

  // function to set the default data
  $scope.reset = function () {

    firebaseConnection.$set({
      monday: {
        name: 'Monday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            tiem: '11:00am',
            booked: false
          }
        }
      }
    });
  };
}]);
