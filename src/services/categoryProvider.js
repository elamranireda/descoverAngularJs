/**
 * Created by eloualiachraf on 26/03/16.
 */
'use strict';


app.service('categoryProvider',function($firebaseArray) {
    var ref = new Firebase("https://reela.firebaseio.com/categories");
    var categories = $firebaseArray(ref);
    this.getCategories = function() {

        // synchronize the object with a three-way data binding
        // click on `index.html` above to see it used in the DOM!
       /* var usersRef = ref.child("categories");
        usersRef.set(categories);
*/

        return categories;
    };
    this.create = function(category) {
        category['id'] = categories.length + 1;
        categories.$add(category);
    };
    this.update = function(category) {

        categories.$save(category);
    };
    this.remove = function(category) {

        categories.$remove(category);
    }
});