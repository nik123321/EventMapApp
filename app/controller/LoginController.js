Ext.define('EventMap.controller.LoginController', {
    extend: 'Ext.app.Controller',
    util: 'EventMap.util.Utility',
    config: {
 
        refs: {
            main: 'mainview',
            login: 'loginview',
            createAccount: 'createaccount'
        },
 
        control: {
            main: {
                signOffCommand: 'onSignOffCommand'
            },
            login: {
                signInCommand: 'onSignInCommand',
                createAccountCommand: 'onCreateAccountCommand'
            },
            createaccount: {
                submitAccountCommand: 'onSubmitAccountCommand'
            }
        }
    },  
 
    launch: function(){
        var me = this;
    },
 
    getSlideLeftTransition: function(){
        return { type: 'slide', direction: 'left'};
    },
 
    getSlideRightTransition: function(){
        return { type: 'slide', direction: 'right'};
    },
 
 
    signInSuccess: function(){
        console.log('Signed in');
        var loginView = this.getLogin(),
            mainMenuView = this.getMain();
 
        loginView.setMasked(false);
 
        Ext.Viewport.animateActiveItem(mainMenuView, this.getSlideLeftTransition());
    },
 
    signInFailure: function(message){
        var loginView = this.getLogin();
 
        loginView.showSignInFailedMessage(message);
        loginView.setMasked(false);
    },
 
    onSignOffCommand: function(){
 
        if(!Ext.Viewport.getMenus().left.isHidden())
        {
            Ext.Viewport.hideMenu('left');
        }
 
        Ext.Viewport.animateActiveItem(this.getLogin(), this.getSlideRightTransition());
    },
 
    onCreateAccountCommand: function(){
        Ext.Viewport.animateActiveItem(this.getCreateAccount(), this.getSlideLeftTransition());
    },


    onSubmitAccountCommand: function(){
        var me = this;
        me.signInSuccess();
    },

    onSignInCommand: function(view, email, password){
        var me = this;
        me.signInSuccess();
    },
/*
onSubmitAccountCommand: function(){
 
     var me = this,
          createView = me.getCreateAccount();
 
     //Get references to the form fields
     var emailField = createView.down('#email'),
          passwordField = createView.down('#password'),
          passwordConfirmField = createView.down('#passwordConfirm');
 
     //Grab their values
     var email = emailField.getValue(),
          password = passwordField.getValue()
          passwordConfirm = passwordConfirmField.getValue();
 
     //If either of the fields are blank, immediately stop executing and
     //trigger the error message function on the create account view
     if(email.length === 0 || password.length === 0){
          createView.showFailedMessage('Please enter a username and password.');
          return;
     }
 
     //If the passwords do not match, again display the error message
     if(passwordConfirm != password){
          createView.showFailedMessage('Please enter matching passwords');
          return;
     }
 
     //Looks like we're all good to get underway! Processing on the server
     //can take a little while and we don't want our user waiting around
     //wondering if anything is happening. A load masked will stop the
     //user from interacting with anything and display a spinner and message
     createView.setMasked({
          xtype: 'loadmask',
          message: 'Creating Account...'
     });
 
     //Create a new instance of the user model
     var newUser = Ext.create('EventMap.model.User', {
          email: email,
          password: password
     });
 
     var errors = newUser.validate();
 
     if(!errors.isValid()){
          errors.each(function(error){
               console.log(error);
          });
     }
     else
     {
          //Now that we're happy no errors have occured, we will
          //save the user. This will trigger the proxy defined
          //in the model to be invoked, specifically 'create'
          //which wills end the data to our PHP API
          newUser.save({
               success: function(record, operation){
 
                    console.log("User successfully created");
 
                    //Grab the JSON response from the server
                    var responseText = operation.getResponse().responseText;
                    var response = Ext.JSON.decode(responseText);
                    var user = response.users[0];
 
                    //Let's see what we got back
                    console.log(user);
 
                    //Now let's store that information locally so the user does
                    //not have to relog everytime
 
                    var id = user.id;
                    var email = user.email;
                    var session = user.session;
 
                    var localUsersStore = Ext.getStore("LocalUsers");
 
                    if(localUsersStore.getCount() > 0){
 
                     //Someone has already created an account on this device
                     //so let's replace the local user rather than creating
                     //a new one.
                    var currentUser = localUsersStore.getAt(0);
 
                    currentUser.set('userId', id);
                    currentUser.set('email', email);
                    currentUser.set('session', session);
                    localUsersStore.sync(); 
 
                }
                else
                {
                         //No accounts have been created on this device before so let's
                         //create a new instance
                         var newLocalUser = Ext.create('EventMap.model.LocalUser', {
                              userId: id,
                              email: email,
                              session: session
                         });
 
                         localUsersStore.add(newLocalUser);
                         localUsersStore.sync();
                }
 
                //We're all done now so we have to remove the loading screen
                //for the user
                    createView.setMasked(false);
 
                    //Now let's take them to the logged in view
                    me.signInSuccess();
               },
               failure: function(record, operation){
 
                    console.log("Failed to create user");
 
                    //Hopefully this shouldn't happen, but if something went wrong
                    //(like the email address already existing) this function
                    //will be triggered and we can display the error to the user
                    var responseText = operation.getResponse().responseText;
                    var response = Ext.JSON.decode(responseText);
                    var error = response.error;
 
                    createView.showFailedMessage(error);
                    createView.setMasked(false);
               }
          })
     }
},

onSignInCommand: function(view, email, password){
     var me = this,
          loginView = me.getLogin();
 
     //Similar to before, check if the fields are empty and display an error if they
     //are
     if(email.length === 0 || password.length === 0){
          loginView.showSignInFailedMessage('Please enter your username and password.');
          return;
     }
 
     //Again we want to mask the users view whilst we're performing stuff on the server
     loginView.setMasked({
          xtype: 'loadmask',
          message: 'Signing In...'
     });
 
     //This is kind of like what we did before when we saved the user and invoked the proxy
     //But this Ajax request is triggered manually by us, and we can supply whatever parameters
     //we want, do some stuff on the server with it, and return data to our application
     Ext.Ajax.request({
 
          url: '../rest/users',
          method: 'post',
          params: {
               username: username,
               password: password
          },
 
          //If a successful response was returned we run this function
          success: function(response){
 
               var loginResponse = Ext.JSON.decode(response.responseText);
 
               if(loginResponse.success){
                    //Now we want to retrieve the generated session token
                    var localUsersStore = Ext.getStore('LocalUsers');
                    var session = loginResponse.details[0].session;
 
                if(localUsersStore.getCount() > 0){
                    //If a local user already exists, update the session key
                    var currentUser = localUsersStore.getAt(0);
 
                    currentUser.set('session', session);
                    localUsersStore.sync();
                }
                else
                {
                     //If this is the first login then create a new local user
                         var newLocalUser = Ext.create('EventMap.model.LocalUser', {
                              email: email,
                              session: session
                         });
 
                         localUsersStore.add(newLocalUser);
                         localUsersStore.sync();
                }
 
                    me.signInSuccess();
               }
               else
               {
                    console.log(loginResponse);
                    me.signInFailure(loginResponse.error);
               }
          },
 
          failure: function(response){
               me.sessionToken = null;
               me.signInFailure('Login failed. Please try again later.');
          }
     });
}*/
 
});