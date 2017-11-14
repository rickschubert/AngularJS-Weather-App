app.filter(
    "speedConverter",
    function() {
        return function (inputSpeed, unitsAreMetric) {
            if (unitsAreMetric) {
                return `${inputSpeed} km/h`
            }
            return `${(inputSpeed / 1.69).toFixed(2) } mph`
        }
    }
)