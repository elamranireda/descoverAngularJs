/**
 * Created by eloualiachraf on 20/03/16.
 */
'use strict';

app
    .controller('index',function($scope, userProvider, $location) {


        $scope.auth = function(user) {
            $scope.session = userProvider.auth(user);

        };

        $scope.logout = function() {
            $scope.session = userProvider.logout();

        };

        $scope.session = userProvider.getAuth();

    })
    .controller('indexCreateUser',function($scope, userProvider) {
        $scope.create = function(user) {
            userProvider.create(user);
        }
    })
;