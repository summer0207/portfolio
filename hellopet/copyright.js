$(function(){
    $( '.main_top' ).click( function() {
        var htmltop = jQuery( 'html' ).offset();
        $( 'html, body' ).animate( { scrollTop : htmltop.top }, 400 );
    });
});