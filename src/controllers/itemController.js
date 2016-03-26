/**
 * Created by eloualiachraf on 20/03/16.
 */
'use strict';




app
    .controller('itemIndex', function ($scope) {

    })
    .controller('itemList', function ($scope, itemProvider) {

        $scope.items = itemProvider.getItems();

    })
    .controller('itemCreate', function ($scope) {

    })
    .controller('itemRemove', function ($scope) {

    })
;
