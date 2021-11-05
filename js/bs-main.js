jQuery( document ).ready(function() {
    jQuery("a[href='#bs-plan']").click(function(e) {
        e.preventDefault();
        
        jQuery('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 800);
        return false;
    });
});



