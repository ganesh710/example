var app = angular.module("MYAPP",[]);
app.controller("MYCONTROLLER",function($scope) {
	$scope.abc = function(user) {
		console.log(user);
	}
	
})