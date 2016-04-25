angular.module('HelloNameApp', [])
  .controller('HelloNameController', function($scope){
    $scope.RedRocket = function () {
    $scope.theTask = "Hello " + $scope.inpoot +  "\! ";
  };
});
