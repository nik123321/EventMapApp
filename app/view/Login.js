Ext.define('EventMap.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginview',
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.util.DelayedTask', 'Ext.Img'],
    config: {
 
         listeners: [
               {
                    delegate: '#logInButton',
                    event: 'tap',
                    fn: 'onLogInButtonTap'
               },
               {
                    delegate: '#createAccountButton',
                    event: 'tap',
                    fn: 'onCreateAccountButtonTap'
               }
         ],
 
         cls: 'login-view',
 
         layout: {
              type: 'vbox',
              pack: 'center',
              align: 'center'
         },
 
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Willkommen',
            },
            {
                xtype: 'label',
                html: 'Login fehlgeschlagen. Bitte überprüfen Sie die Eingabe',
                itemId: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'color: #990000; margin: 5px 0px;'
            },
            {
                xtype: 'image',
                mode: 'image',
                src: '/EventMap/public/EventMapApp/resources/images/Login/Logo.png',
                style: 'height: 160px; width: auto; margin: auto'
            },
            {
                xtype: 'fieldset',
                style: 'margin-top: 60px; width: 260px;',
                items: [
                       {
                            xtype: 'textfield',
                            placeHolder: 'Benutzername',
                            itemId: 'emailTextField',
                            name: 'emailTextField',
                            required: true
                       },
                       {
                            xtype: 'passwordfield',
                            placeHolder: 'passwort',
                            itemId: 'passwordTextField',
                            name: 'passwordTextField',
                            required: true
                       },
                       {
                            xtype: 'button',
                            itemId: 'logInButton',
                            ui: 'action',
                            padding: '10px',
                            text: 'Anmelden'
                       },
                  ]
             },
             {
                  xtype: 'container',
                  style: 'margin-top: 60px; width: 260px;',
                  styleHtmlContent: true,
                  items: [
                       {
                            xtype: 'button',
                            ui: 'confirm',
                            itemId: 'createAccountButton',
                            text: 'Registrieren'
                       }
                  ]
             }
        ]
    },
 
    onLogInButtonTap: function(){
 
         var me = this;
 
         var emailField = me.down('#emailTextField'),
              passwordField = me.down('#passwordTextField'),
              label = me .down('#signInFailedLabel');
 
         label.hide();
 
         var email = emailField.getValue(),
              password = passwordField.getValue();
 
         //Give hide animation time to finish
         var task = Ext.create('Ext.util.DelayedTask', function(){
              label.setHtml('');
              me.fireEvent('signInCommand', me, email, password);
              emailField.setValue('');
              passwordField.setValue('');
         });
 
         task.delay(500);
    },
 
    onCreateAccountButtonTap: function(){
         var me = this;
         me.fireEvent('createAccountCommand', me);
    },
 
    showSignInFailedMessage: function(message){
         var label = this.down('#signInFailedLabel');
         label.setHtml(message);
         label.show();
    }
});