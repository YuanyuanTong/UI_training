var app = angular.module('app', []);
app.controller('emp', function($scope, $rootScope){
    // $scope.emps = [
    //     {empno:"1001", ename:"John"},
    //     {empno:"1002", ename:"Jim"},
    //     {empno:"1003", ename:"Yuan"},
    //     {empno:"1004", ename:"Who"},
    // ];

    // $scope.addEmp = function() {
    //     var newEmpno = 100 + $scope.emps.length + 1;
    //     var newName = "ename " + newEmpno;
    //     $scope.emps.push({empno:newEmpno, ename:newName});
    // };

    // $scope.modify3rdEmp = function(){
    //     $scope.emps[2].ename = Test;
    // };

    // $scope.$watch('emps', function(newVal, oldVal){
    //     console.log("No. of employees: " + $scope.emps.length);
    // }, true);

    // $scope.$watchGroup(["a", "b"], function(newVal, oldVal){
    //     console.log("Here");
    //     if(newVal != oldVal) {
    //         $scope.c = $scope.a * $scope.b;
    //     }
    // })

    // $scope.updateC = function(){
    //     $scope.c = $scope.a * 4;
    // };

    // $scope.$watch("c", function(newVal, oldVal){
    //     if(newVal != oldVal) {
    //         console.log("Update C to " + newVal);
    //     }
    // });

    // $scope.$watch("a", function(newVal, oldVal){
    //     if(newVal != oldVal){
    //         $scope.b = $scope.a * 2;
    //     }
    // });
    $scope.a = 1;
    $scope.b = 2;
    $scope.s = 3;

    $scope.$watch("a", function(newVal, oldVal){
        if(newVal != oldVal) {
            console.log("Update a to " + newVal);
        }
    });

    $scope.$watch("b", function(newVal, oldVal){
        if(newVal != oldVal) {
            console.log("Update b to " + newVal);
        }
    });

    $scope.$watch("c", function(newVal, oldVal){
        if(newVal != oldVal) {
            console.log("Update c to " + newVal);
        }
    });
    $scope.calcSum = function(){
        $scope.s = Number($scope.a) + Number($scope.b);
    };

    // $rootScope.$watch(function(){
    //     console.log("Digest iteration");
    // })
});

var btnSum = function(){
    var $scope = angular.element($('#div')).scope();
    $scope.apply(function(){
        $scope.s = Number($scope.a) + Number($scope.b);
    });
}