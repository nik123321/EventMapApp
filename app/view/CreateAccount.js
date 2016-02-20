Ext.define('EventMap.view.CreateAccount', {
     extend: 'Ext.form.Panel',
    requires: ['Ext.form.FieldSet', 'Ext.field.Number', 'Ext.field.Select', 'Ext.field.DatePicker'],
     xtype: 'createaccount',
 
     config: {
        scrollable: 'vertical',
        styleHtmlContent: true,
 
          itemId: 'createaccount',
          layout: {
               type: 'vbox'
          },
 
        listeners: [
            {
                delegate: '#submitAccountButton',
                event: 'tap',
                fn: 'onSubmitAccountButtonTap'
            }
        ],
 
        cls: 'login-view',
 
          items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'label',
                        html: 'Login fehlgeschlagen. Bitte überprüfen Sie die Eingabe.',
                        itemId: 'createFailedLabel',
                        hidden: true,
                        hideAnimation: 'fadeOut',
                        showAnimation: 'fadeIn',
                        style: 'color: #990000; margin: 5px 0px;'
                    },

                    {
                        xtype: 'textfield',
                        name: 'firstname',
                        itemId: 'firstname',
                        label: 'Vorname',
                        labelAlign: 'top'
                    },
                    {
                        xtype: 'textfield',
                        name: 'lastname',
                        itemId: 'lastname',
                        label: 'Nachname',
                        labelAlign: 'top'
                    },

                    {
                        xtype: 'textfield',
                        name: 'username',
                        itemId: 'username',
                        label: 'Benutzername',
                        labelAlign: 'top'
                    },
                    {
                        xtype: 'textfield',
                        name: 'email',
                        itemId: 'email',
                        label: 'Email',
                        labelAlign: 'top'
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'password',
                        itemId: 'password',
                        label: 'Passwort',
                        labelAlign: 'top'
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'passwordConfirm',
                        itemId: 'passwordConfirm',
                        label: 'Passwort bestätigen',
                        labelAlign: 'top'
                    },
                    {
                        xtype: 'button',
                        itemId: 'submitAccountButton',
                        ui: 'confirm',
                        text: 'Account erstellen'
                    }
                ]
            }
 
          ]
     },
 
    onSubmitAccountButtonTap: function(){
         var me = this;
         me.hideFailedMessage();
         me.fireEvent('submitAccountCommand', me);
    },
 
    showFailedMessage: function(message){
        var label = this.down('#createFailedLabel');
        label.setHtml(message);
        label.show();
    },
 
    hideFailedMessage: function(){
        var label = this.down('#createFailedLabel');
        label.hide();
    }
});