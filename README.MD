# README
### Get Puppy workin

1. Fork Clone
1. `npm start` or open index.html with browser

### How did this get made

1. make directory, `git init`, `npm init -y`
1. Change test script to start script with this value:

  ```json
  "start": "http-server -c-1 -o"
  ```
1. touch index, html-ify and add header to make sure stuff renders
1. `npm start`
1. made readme, taking notes from the second iteration of building this app

#### Add bootstrap

* find current CDN

### Add Angular

1. find current CDN
1. in html body put `{{1+2}}` (to test angular)
1. add `add ng-app` as attribute to html

### Add Input

copy and paste from a bootstrap template ( i havent yet)

#### Hoooked up  model and display on page

1. Added `ng-model="name"` as attribute to input
1. Added `{{name}}` to h1 to output the name



npm init to help with serving to node
look in the scripts section of pkg json
create html file, create js file (obvi)

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
---
---
---

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
---
---
---
<!-- <div ng-app="HelloUserApp">
    <div ng-controller="HelloUserController">
        <input ng-model="name" ng-keyup="NameChange()">
        <h1>{{name}}</h1>
        <h2>{{greeting}}</h2>
    </div>
</div>
</body>
</html> -->


---
---

<!--
 angular.module('HelloUserApp', [])
       .controller('HelloUserController', function($scope) {
           $scope.NameChange = function () {
               $scope.greeting = "Hello " + $scope.name;
           };
       }); -->
