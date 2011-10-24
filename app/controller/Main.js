Ext.define('Sencha.controller.Main', {
    extend: 'Ext.app.Controller',
    
    views: ['Home', 'Products', 'Blog', 'Contact'],
    
    refs: [
        {
            ref: 'contactForm',
            selector: '#contactForm'
        }
    ],
    
    init: function() {
        this.control({
            'button[action=submitContact]': {
                tap: 'submitContactForm'
            }
        });
    },
    
    submitContactForm: function() {
        var form = this.getContactForm();
        
        form.submit({
            url: 'contact.php'
        });
    }
});