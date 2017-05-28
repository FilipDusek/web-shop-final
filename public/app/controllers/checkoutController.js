app.controller("checkoutController", function($timeout, $scope, $location, $rootScope, $http, Product) {
    $scope.thanksIn = false;
    $scope.thanksOut = false;
    $scope.startup = true;

    $scope.thanksClose = function (){
        $scope.thanksIn = false;
        $scope.thanksOut = true;  
        $timeout(function(){
            $rootScope.total = 0;
            $rootScope.cart = [];
            $location.path('/');
        }, 250);
    } 

    $scope.checkout = function (){
        //if (true){ // use this condition for testing order submission before the authentication is fully implemented
        $scope.thanksIn = true;
        if ($rootScope.authenticated){
            $http.post('/api/users/' + $rootScope.user["_id"] + '/orders', {products: $rootScope.cart, token: $rootScope.token}).then(
                function successCallback(reponse){
                    $scope.startup = false;
                    $scope.thanksIn = true;
                    $scope.thanksOut = false;
                }).catch(
                function errorCallback(response) {
                    console.log(response);
                });
        };
    };
});