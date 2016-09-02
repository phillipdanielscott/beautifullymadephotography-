var app = angular.module("photoApp", ['ngRoute'])

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'templates/bio.html',
      controller: 'MainController',
    }).when('/bio',{
      termplateURL:'templates/bio.html',
      controller:'MainController'
    })
}])

require('./js/controllers/MainController.js')(app);
