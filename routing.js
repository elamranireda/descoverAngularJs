/**
 * Created by eloualiachraf on 26/03/16.
 */
'use strict';

app.config(
    function($routeProvider){
        $routeProvider
            .when('/items',{
                controller : 'itemList',
                templateUrl : 'view/item/list.html'
            })

            .when('/items/new',{
                controller : 'itemCreate',
                templateUrl : 'view/item/create.html'
            })
});