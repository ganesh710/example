var app = angular.module("MYAPP",[]);
app.controller("MYCONTROLLER",function($scope,$http) {
	$scope.signup = function(user) {
		console.log(user);
		$http({
			method:'post',
			url:'/postsignupdata',
			data:$scope.user
		})

	}
	
})