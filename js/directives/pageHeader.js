app.directive(
    "pageHeader",
    function() {
        return {
            restrict: "E",
            scope: {
                location: "="
            },
            templateUrl: "js/directives/pageHeader.html"
        }
    }
)