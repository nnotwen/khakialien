$(function(){
    $('.nav-bar-toggle').on('click', function(){
        if ($('.nav-bar-links').hasClass('active')){
            $('.nav-bar-links').removeClass('active');
        } else {
            $('.nav-bar-links').addClass('active');
        }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 0){
            $('.nav-placeholder').fadeOut();
            $('.nav-bar').addClass('sticky').fadeIn('slow');
        } else {
            $('.nav-placeholder').fadeIn();
            $('.nav-bar').removeClass('sticky').fadeIn('slow');
        };
    });
});
