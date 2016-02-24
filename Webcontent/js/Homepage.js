/**
 * Created by Shantanu_Singh on 2/23/16.
 */
var HomeApp = angular.module('HomeApp', ['ngRoute']);

HomeApp.config(function($routeProvider)
{
    $routeProvider

        .when('/', {
            templateUrl: 'Views/Welcome.html',
            controller: 'WelcomeController',
            css: 'css/Welcome.css'
        })

        .when('/about', {
            templateUrl: 'Views/About.html',
            //controller: 'HomeController',
            //css: 'css/Login.css'
        })


        .when('/login', {
            templateUrl: 'Views/Login.html',
            controller: 'LoginController',
            css: 'css/Login.css'
        })

        .when('/signup', {
            templateUrl: 'Views/Signup.html',
            controller: 'SignupController',
            css: 'css/Signup.css'
        })
        .otherwise(
            {redirectTo: '/'}
        );
});

HomeApp.controller('HomeController',function($scope)
{

});

HomeApp.controller('LoginController',function($scope)
{

});
HomeApp.controller('SignupController', ['$scope','$http', function($scope,$http) {

    var url="http://localhost:3000/signup";
    var refresh = function() {
        $scope.user = "";
    };

    refresh();

    $scope.submitForm = function(isValid) {

        if(isValid) {
            $http.post(url, $scope.user).success(function(response) {
                console.log(response);
                refresh();
            });
        }
        else {
            alert("Please fill the form correctly")
        }

    };

    $scope.reset = function() {
        $scope.user = "";
    };

}]);
