Ext.define('Sencha.view.Viewport', {
    extend: 'Ext.TabPanel',
    
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        
        items: [
            {
                xtype: 'homepanel'
            },
            {
                xtype: 'productspage'
            },
            {
                xtype: 'blogpage',
                
                store: {
                    fields: ['title', 'url'],
                    data: [
                        {title: 'Ext Scheduler 2.0', url: 'ext-scheduler-2-0-upgrading-to-ext-js-4'},
                        {title: 'Previewing Sencha Touch 2', url: 'sencha-touch-2-what-to-expect'},
                        {title: 'Sencha Con 2011', url: 'senchacon-2011-now-packed-with-more-goodness'},
                        {title: 'Documentation in Ext JS 4', url: 'new-ext-js-4-documentation-center'}
                    ]
                }
            },
            {
                xtype: 'contactpage'
            }
        ]
    }
});