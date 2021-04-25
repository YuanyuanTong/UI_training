var app = angular
            .module('myApp', [])
            .controller('myController', function($q, $scope){
                // function add(x, y, callback, errorCallback) {
                //     $timeout(function(){
                //         callback(x+y);
                //     }, 100)
                // };

                function add(x, y) {
                    var q = $q.defer();
                    setTimeout(function(){
                        var result = x + y;
                        if(result >= 0)
                            q.resolve(x+y);
                        else {
                            q.reject("Negative result: " + result);
                        }
                        q.resolve(x+y);
                    }, 100);
                    return q.promise;
                };

                var startTime = Date.now();
                add(5,2)
                .then(function(result){
                    return add(result, 3);
                })
                .then(function(result){
                    $scope.result = result;
                    $scope.elapsedTime = Date.now() - startTime;
                })
                .catch(function(failure){
                    $scope.failure = failure;
                })
                .finally(
                    function(){
                        $scope.elapsedTime = Date.now() - startTime;
                    }
                );
                // add(5,2, function(result){
                //     add(result, 3, function(result){
                //         add(result, 1, function(){
                //             $scope.result = result;
                //             $scope.elapsedTIme = Date.now() - startTime;
                //         }, function(error){
                //             // some error handling
                //         });
                //     }, function(error){
                //         // some error handling
                //     });                    
                // }, function(error){
                //     // some error handling
                // });
            })