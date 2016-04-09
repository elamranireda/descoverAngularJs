/**
 * Created by eloualiachraf on 20/03/16.
 */
'use strict';

app
    .controller('categoryIndex',function($scope, userProvider) {

    })
    .controller('categoryList',function ($rootScope,$scope, categoryProvider, $location) {
        $scope.categories = categoryProvider.getCategories();

        $scope.remove = function(category) {
            categoryProvider.remove(category);
        };
        $scope.edit = function(category) {
            $location.url('/categories/edit');
            $rootScope.categoryToEdit = category;
        }

    })
    .controller('categoryCreate', function ($scope, categoryProvider)  {

        $scope.categories =  categoryProvider.getCategories();


        $scope.save = function(category) {

           categoryProvider.create(category);
        }
    })
    .controller('categoryEdit', function ($rootScope, $scope, categoryProvider, $location)  {

        $scope.categories =  categoryProvider.getCategories();
        $scope.category = $rootScope.categoryToEdit;

        $scope.save = function(category) {

           categoryProvider.update(category);
            $location.url('/categories/');
        }
    })
    .controller('categoryRemove', function ($scope)  {

    })
;