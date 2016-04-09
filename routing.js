/**
 * Created by eloualiachraf on 26/03/16.
 */
'use strict';

app.config(
    function($routeProvider){
        $routeProvider
            .when('/',{
                controller : 'index',
                templateUrl : 'view/index/index.html'
            })
            .when('/create-user',{
                controller : 'indexCreateUser',
                templateUrl : 'view/index/createUser.html'
            })
            .when('/items',{
                controller : 'itemList',
                templateUrl : 'view/item/list.html'
            })

            .when('/items/new',{
                controller : 'itemCreate',
                templateUrl : 'view/item/create.html'
            })
            .when('/categories',{
                controller : 'categoryList',
                templateUrl : 'view/category/list.html'
            })
            .when('/categories/new',{
                controller : 'categoryCreate',
                templateUrl : 'view/category/create.html'
            })
            .when('/categories/edit',{
                controller : 'categoryEdit',
                templateUrl : 'view/category/create.html'
            })

});