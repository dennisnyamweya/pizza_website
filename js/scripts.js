//variety
$(document).ready( function() {

    $('.drew').hover( function() {
        $(this).find('.rod').fadeIn(300);
    }, function() {
        $(this).find('.rod').fadeOut(100);
    });
});
