app.controller(
    "WeatherController",
    [
        "$scope",
        "$routeParams",
        "$rootScope",
        "coordinates",
        "weather",
        function($scope, $routeParams, $rootScope, coordinates, weather) {
            $scope.weatherInfos = {}
            $scope.locationInfos = {}

            $rootScope.location
                ? $scope.locationInfos.place = $rootScope.location
                : $scope.locationInfos.place = decodeURIComponent($routeParams.place)

            let skycons = new Skycons({"color": "black"})

            coordinates.asyncGet($scope.locationInfos.place).then(
                function(response) {
                    $scope.locationInfos.place = response[0].formatted_address
                    $scope.locationInfos.lat = response[0].geometry.location.lat
                    $scope.locationInfos.lng = response[0].geometry.location.lng
                    
                    weather.asyncGet($scope.locationInfos.lat, $scope.locationInfos.lng).then(
                        function (data) {
                            console.log(data)

                            $scope.weatherInfos.temperature = data.currently.temperature
                            $scope.weatherInfos.apparentTemperature = data.currently.apparentTemperature
                            $scope.weatherInfos.summary = data.hourly.summary
                            $scope.weatherInfos.precipProbability = data.currently.precipProbability * 100
                            $scope.weatherInfos.windSpeed = data.currently.windSpeed

                            skycons.add(document.getElementById("icon1"), data.currently.icon)
                            skycons.play()
                        }
                    )
                }
            )
        }
    ]
)