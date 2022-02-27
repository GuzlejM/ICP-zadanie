/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ICP.Zadanie.Application',

    name: 'ICP.Zadanie',

    requires: [
        // This will automatically load all classes in the ICP.Zadanie namespace
        // so that application classes do not need to require each other.
        'ICP.Zadanie.*'
    ],

    // The name of the initial view to create.
    mainView: 'ICP.Zadanie.view.main.Main'
});
