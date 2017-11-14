app.directive(
    "weatherComponent",
    function() {
        return {
            restrict: "E",
            scope: {
                weatherInfos: "=",
                locationInfos: "="
            },
            templateUrl: "js/directives/weatherComponent.html",
            link: function ($scope) {
                $scope.unitsAreMetric = true
                $scope.getTemperature = function() {
                    if ($scope.unitsAreMetric) {
                        return $scope.weatherInfos.temperature
                    }
                    return ($scope.weatherInfos.temperature * 1.8 + 32).toFixed(2)
                }
            }
        }
    }
)