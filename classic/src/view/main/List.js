/**
 * This view is an example list of people.
 */
Ext.define('ICP.Zadanie.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ICP.Zadanie.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Gender', dataIndex: 'gender', flex: 1 },
        { text: 'House', dataIndex: 'house', flex: 1 },
        { text: 'Wizard', dataIndex: 'wizard', flex: 1 },
        { text: 'Is Student', dataIndex: 'hogwartsStudent', flex: 1 },
        { text: 'Actor', dataIndex: 'actor', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
