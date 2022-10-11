// Change Color Navbar Elements on Scroll

   $(window).scroll(function(){
    if ($(this).scrollTop() > 925) {
       $('.icon-bar').addClass('opaque');
       $('.navbar-brand img').attr('src', 'img/logo-light.png');
       $('i.fa').attr('style', 'color:#fff');
    } else {
       $('.icon-bar').removeClass('opaque');
       $('.navbar-brand img').attr('src', 'img/logo.png');
       $('.i.fa').attr('style', 'color:#000');
    }
}
);

   $(window).scroll(function(){
    if ($(this).scrollTop() < 925) {

       $('i.fa').attr('style', 'color:#000');
   }
}
);

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $('#topbar, .cart-label').fadeOut('slow');
            $('.logo img')
                .attr('src','img/logo.png');
            $('.i.fa').attr('style', 'color:000');
           

            
        }
        if($(this).scrollTop() < 100) {
            $('#logo, #topbar, .cart-label').fadeIn('fast');
            $('.logo img')
                .attr('src','img/logo-light.png');
             $('i.fa').attr('style', 'color:#000');
            
          
        }
    });
});
