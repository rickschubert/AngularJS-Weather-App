// Creates the app and calls it "Weather App". Injects dependency `ngRoute`
// to use Angular Routing. (with the package **angular-route**)
const app = angular.module("WeatherApp", ["ngRoute"])  

// Router
app.config(
    function ($routeProvider) {
        $routeProvider
        .when("/", {
            controller: "HomeController",
            templateUrl: "views/home.html"
        })
        .when("/weather/:place", {
            controller: "WeatherController",
            templateUrl: "views/weather.html"
        })
        .otherwise({
            templateUrl: "views/404.html"
        })
    }
)