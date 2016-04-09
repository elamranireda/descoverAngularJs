/**
 * Created by eloualiachraf on 26/03/16.
 */
'use strict';


app.service('userProvider',function($firebaseAuth) {
    var ref = new Firebase("https://reela.firebaseio.com/");

    this.create = function(user) {
        ref.createUser({
            email    : user.email,
            password : user.password
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }
        });
    };

   this.auth = function(user) {
       ref.authWithPassword({
           email    : user.email,
           password : user.password
       }, function(error, authData) {
           if (error) {
               console.log("Login Failed!", error);
           } else {
               return authData;
           }
       });
     return ref.getAuth();
    };

    this.getAuth = function() {
        return ref.getAuth() ;
    };

    this.logout = function() {
        ref.unauth();
    };



});