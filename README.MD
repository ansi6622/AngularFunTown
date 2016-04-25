bring in bootstrap
bring in angular

create html file, create js file

Referenced code:

angular.module('HelloUserApp', [])
      .controller('HelloUserController', function($scope) {
          $scope.NameChange = function () {
              $scope.greeting = "Hello " + $scope.name;
          };
      });

      <script src="angular.min.js"></script>
      <script src="hello_user_controller.js"></script>
      <div ng-app="HelloUserApp">
      <div ng-controller="HelloUserController">
      <input ng-model="name" ng-keyup="NameChange()">
      <h1></h1>
      <h2></h2>
      </div>
      </div>


angular.module('HelloWorldApp', [])
 .controller('HelloWorldController', function($scope) {
     $scope.greeting = "Hello World";
});

<script src="angular.min.js"></script>
<script src="hello_world_controller.js"></script>
<div ng-app="HelloWorldApp">
    <div ng-controller="HelloWorldController">
        <h1></h1>
    </div>
</div>
