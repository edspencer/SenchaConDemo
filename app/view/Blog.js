Ext.define('Sencha.view.Blog', {
    extend: 'Ext.List',
    xtype: 'blogpage',
    
    config: {
        title: 'Blog',
        iconCls: 'star',
        
        itemTpl: '{title}'
    }
});