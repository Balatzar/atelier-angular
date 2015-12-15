function mainCtrl($scope, $http) {
  $scope.title = "Quelle ville ?"

  $scope.send = function(location) {
    $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&APPID=39583154fb47ae5a44360b9c46bb99d2")
      .then(function success(res) {
        $scope.title = res.data.name;
        $scope.location = "";
      }, function error(res) {
        console.warn(res)
      })
  }
}