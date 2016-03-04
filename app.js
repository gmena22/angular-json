var app = angular.module('myjasonapp', []);

app.controller('MainCtrl', function($scope) {
  var json = {
    "modules":
        [
                {
                   "title":"name of module1",
                   "description":"description of module1",
                   "weeks":[{"id":1, "title":"Week 01"}]
                },

                {
                   "title":"name of module2",
                   "description":"description of module2",
                   "weeks":[{"id":2, "title":"Week 02"},{"id":3,"title":"Week 03"}]
                }
        ]
  };
  
  $scope.objetjson = json;
  
  
});
