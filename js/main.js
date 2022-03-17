(function ($){
    "use strict"
// Navbar on scrolling

// $(window).scroll(function (){
//     if ($(this).scrollTop() > 200){
//         $('.navbar').fadeIn('slow').css('display','flex');
//     }else{
//         $('.navbar').fadeOut('slow').css('display','none');
//     }
// })


// Skill bar
$('.skill').waypoint(function (){
    $('.progress .progress-bar').each(function (){
       $(this).css("width", $(this).attr("aria-valuenow") + '%'); 
    });
}, {offset: '80%'});



})(jQuery);