angular.module('scheduleApp', ['firebase'])

.controller('mainController', ['$scope', '$firebase', function ($scope, $firebase) {
  // connect to Firebase
  var ref = new Firebase("https://firelearn.firebaseio.com/days");
  var firebaseConnection = $firebase(ref);

  // sync as object
  var syncObject = firebaseConnection.$asObject();

  // threee way data binding
  syncObject.$bindTo($scope, 'days');

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
          1100: {
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
          1100: {
            time: '11:00am',
            booked: false
          }
        }
      }
    });
  };
}]);
