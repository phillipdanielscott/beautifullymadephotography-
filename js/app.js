var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'templates/portfolio.html'
    })
}])

require('./controllers/MainController.js')(app);
