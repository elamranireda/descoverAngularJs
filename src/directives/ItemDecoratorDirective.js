/**
 * Created by reela on 26/03/16.
 */
'use strict';

app.directive('decorateItem', function(){
    return {
        template : '<p>Item {{item.name}} dans la categorie {{item.category_id}}</p>'
    }
})


