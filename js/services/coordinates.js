
app.factory(
    "coordinates",
    function($http) {
        return {
            asyncGet: function(place) {
                const promise = $http({
                    method: "GET",
                    url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCmt2o0YgABB4atou_eZiBuwTFqbxXFYn4",
                    params: {
                        address: place
                    }
                })
                .then(
                    function(response) {
                        console.log(response.data.results)
                        return response.data.results
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
