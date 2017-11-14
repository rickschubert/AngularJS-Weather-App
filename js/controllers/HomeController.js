app.controller(
    "HomeController",
    [
        "$scope",
        "$location",
        "$rootScope",
        function ($scope, $location, $rootScope) {
            $scope.fetchWeather = function() {
                if ($scope.location !== "") {
                    $rootScope.location = $scope.location
                    const redirect = `/weather/${encodeURIComponent($scope.location)}`
                    $location.path(redirect);
                }
            }
        }
    ]
)