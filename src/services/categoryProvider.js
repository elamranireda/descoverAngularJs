/**
 * Created by eloualiachraf on 26/03/16.
 */
'use strict';


var categories = [
    {
        'id': 1,'name':'film'
    },
    {
        'id': 1,'name':'musiques'
    },

];

app.service('categoryProvider',function( ) {
    this.getCategories = function() {
        return categories;
    }

});