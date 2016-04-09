/**
 * Created by eloualiachraf on 26/03/16.
 */
'use strict';


app.service('itemProvider',function($firebaseArray) {
    var ref = new Firebase("https://reela.firebaseio.com/items");
    var items =  $firebaseArray(ref);
    this.getItems = function() {

        // synchronize the object with a three-way data binding
        // click on `index.html` above to see it used in the DOM!
      /*  var usersRef = ref.child("items");
        usersRef.set(items);*/


        return items;
    }

    this.create = function(item) {
        items.$add(item);
        return items;
    }

});