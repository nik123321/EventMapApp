Ext.define('EventMap.view.Profil', {
    extend: 'Ext.Container',
    alias: "widget.profilview",

    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    config: {
        layout: 'fit',

        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Benutzer Daten',
            },
            {
                xtype: 'formpanel',
                items: [
                    {
                        xtype: 'fieldset',
                        defaults: {
                            labelWidth: '35%'
                        },
                        title: 'Benutzer Information',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Vorname',
                                name: 'firstName'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Nachname',
                                name: 'lastName'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        defaults: {
                            labelWidth: '35%'
                        },
                        title: 'Account Information',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Benutzername',
                                name: 'username'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Passwort',
                                name: 'passsword'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Email',
                                name: 'email'
                            }
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
                            id: 'changeButton',
                            text: 'Ändern'
                        }
                  ]
             }
                ]
            }
        ],
    }

      /*  listeners: {
            delegate: 'textfield',
            keyup: 'onKeyUp'
        },

        record: null
    },

    updateRecord: function(newRecord) {
        this.down('formpanel').setRecord(newRecord);
    },

    saveRecord: function() {
        var formPanel = this.down('formpanel'),
            record = formPanel.getRecord();

        formPanel.updateRecord(record);

        return record;
    },

    onKeyUp: function() {
        this.fireEvent('change', this);
    }*/
});
