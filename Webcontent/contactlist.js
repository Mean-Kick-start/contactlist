var app = angular.module('demoApp', []);

app.controller("myController", function($scope, $http){
    var url="http://localhost:3000/contactlist";
    var refresh = function() {
        $http.get(url).success(function (res) {
            $scope.contactlist = res;
            $scope.contact = "";
        });
    };
    refresh();
    $scope.addContact=function(){
        console.log($scope.contact);
        $http.post(url,$scope.contact).success(function(res){
            console.log(res);
            refresh();
        })
    }

    $scope.deleteContact = function(id){
        console.log(id);
        console.log(url+'/' + id);
       $http.delete(url +'/' + id).success(function(res){
           refresh();
       })
    }
    $scope.edit = function(id){
        console.log(id);
        console.log(url +'/' + id);
        $http.get(url +'/' + id).success(function(res){
            console.log(res);
            $scope.contact = res;
        })
    }
    $scope.updateContact = function(){
        var id = $scope.contact._id;
        console.log(id);
        $http.put(url+'/'+ id, $scope.contact).success(function(res){
            console.log(res);
            refresh();
        })
    }
    $scope.deselect = function (){
        $scope.contact="";
    }
});