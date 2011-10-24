Ext.define('Sencha.view.Products', {
    extend: 'Ext.Carousel',
    xtype: 'productspage',
    
    config: {
        title: 'Product',
        iconCls: 'star',
        
        items: [
            {
                xtype: 'image',
                src: 'resources/images/Animator.png'
            },
            {
                xtype: 'image',
                src: 'resources/images/Charts.png'
            },
            {
                xtype: 'image',
                src: 'resources/images/Designer.png'
            }
        ]
    }
});