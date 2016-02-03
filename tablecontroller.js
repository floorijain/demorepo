promoApp.controller('tablecontroller', function($scope,$http)
{
    $http.get("http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/demo_pjan?sex=T&precision=1&age=TOTAL")
    .success(function(response) {$scope.values = response;});

});