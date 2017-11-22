app.factory(
    "weather",
    function($http) {
        return {
            asyncGet: function(lat, lng) {
                const promise = $http({
                    method: "GET",
                    url: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f1a824d7a7df7fc6b0acaca9fa2c7847/${lat},${lng}?&units=si`
                })
                .then(
                    function(response) {
                        console.log(response.data)
                        return response.data
                    },
                    function(error) {
                        console.log(error)
                        return error
                    }
                )
                return promise
            }
        }
    }
)