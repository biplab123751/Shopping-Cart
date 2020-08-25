// JavaScript Document
var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
    $scope.user = '';
    $scope.email = '';
});
	function validate()
{
	var username=document.getElementById("user");
	var email=document.getElementById("email");
	
	if(username.value=="" || email.value==""){
		/*alert("No blank spaces allowed");*/
		return false;
	
 }
	else{
		return true;
	}
	
}