/**
 * PRIMARY THEME JAVASCRIPT FILE
 *
 * This is your public-facing, front-end Javascript. It compiles to assets/js/app.min.js in your theme directory.
 *
 * This is used to initialize your custom Javascript. If you would like to change how Foundation and it's plugins are
 * initialized, you can. See http://foundation.zurb.com/docs/javascript.html for documentation.
 */

var flkty = new Flickity( '.main-gallery', {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: 5000
});

var flkty = new Flickity( '.basic-gallery', {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: true,
    autoPlay: 5000
});

(function($) {

    // Foundation JavaScript
    $(document).foundation('topbar', {
        sticky_class: 'snap-to-top'
    });

    //Your code goes here


    $(document).ready(function(){

      $(window).scroll(function(){
        if($(window).scrollTop() > 1000) {
          $('.modal-container').addClass('scrolled');
        } else {
          return;
        }
      });

      $('.modal-container i').on('click', function() {
        $('.modal-container').addClass('hide');
      });

    });



})(jQuery);
