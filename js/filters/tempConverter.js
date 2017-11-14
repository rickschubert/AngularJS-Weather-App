app.filter(
    "tempConverter",
    function() {
        return function(inputtemp, unitsAreMetric) {
            if (unitsAreMetric) {
                return `${inputtemp} °C`
            }
            return `${(inputtemp * 1.8 + 32).toFixed(2)} F`
        }
    }
)