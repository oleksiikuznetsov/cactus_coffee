const wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    })
wow.init();

// js for href buttons link 

$('.button_blog').click(function(){
    window.location.href = "#blog";
});

    // toggle text in menu item

$(document).ready(function(){
    $('.spoiler_links').click(function(){
     $(this).parent().children('div.spoiler_body').toggle(300);
     return false;
    });
   });