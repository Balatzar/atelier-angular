function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "views/main.html",
      controller: "mainCtrl"
    })
    .otherwise({
      redirectTo: '/'
    })
}

angular.module("testangu", ["ngRoute"])
  .config(config)
  .controller("mainCtrl", mainCtrl)