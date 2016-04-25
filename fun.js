// angular.module('HelloNameApp', [])
//   .controller('HelloNameController', function($scope){
//     $scope.RedRocket = function () {
//     $scope.theTask = "Hello " + $scope.inpoot +  "\! ";
//   };
// });
angular.module('HelloUserApp', [])
      .controller('HelloUserController', function($scope) {
          $scope.NameChange = function () {
              $scope.greeting = "Hello " + $scope.name;
          };
      });
