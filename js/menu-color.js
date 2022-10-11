// Change Color Navbar Elements on Scroll

   $(window).scroll(function(){
    if ($(this).scrollTop() > 350) {
       $('.icon-bar').addClass('opaque');
       $('.navbar-brand img').attr('src', 'img/logo-light.png');
       $('i.fa').attr('style', 'color:000');
    } else {
       $('.icon-bar').removeClass('opaque');
       $('.navbar-brand img').attr('src', 'img/logo.png');
       $('.i.fa').attr('style', 'color:#fff');
    }
});



$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $('#topbar, .cart-label').fadeOut('slow');
            $('.logo img')
                .attr('src','img/logo.png');
            $('i.fa').attr('style', 'color:#fff');
        }
        if($(this).scrollTop() < 100) {
            $('#logo, #topbar, .cart-label').fadeIn('fast');
            $('.logo img')
                .attr('src','img/logo-light.png');
            $('i.fa').attr('style', 'color:#000');
        }
    });
});
