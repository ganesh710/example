var app = angular.module("MYAPP",[]);
app.controller("MYCONTROLLER",function($scope,$http) {
	$scope.signup = function(user) {
		console.log(user);
		$http({
			method:'post',
			url:'/postsignupdata',
			data:$scope.user
		}).then(function success(responce) {
			alert("user added succesfully");
			$scope.user = {};
		}),function error(responce) {
			alert("error occured!please try again later");
		}

	}
	
})