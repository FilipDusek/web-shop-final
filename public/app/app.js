var app = angular.module('webshopApp', ['ngRoute', 'ngResource', 'ngAnimate']).run(function($rootScope) {
	$rootScope.authenticated = false;
	$rootScope.current_user = '';
	$rootScope.cart = [];
    $rootScope.total = 0;

	$rootScope.logout = function(){
    	$rootScope.authenticated = false;
		$rootScope.user = '';
		$rootScope.token = '';
	};
});