/**
 * Created by eloualiachraf on 26/03/16.
 */
'use strict';

var items = [
    {
        'category_id': 1, 'name': 'Django' +
    ''
    },
    {
        'category_id': 1, 'name': 'Forrest Gump'
    },

];

app.service('itemProvider',function( ) {
    this.getItems = function() {
        return items;
    }

});