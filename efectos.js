$(document).ready(function(){
    
// Efecto Menu
    $('.navbar a').each(function(index, elemento){
        $(this).css({
            'top': '-100px'
        });

        $(this).animate({
            top: '0'
        }, 800 + (index * 300));
    });

// Efecto Header
    if( $(window).width() > 800){
        $('h1').css({
            opacity: 0,
            marginTop: 0
        });
        $('h1').animate({
            opacity: 1,
            marginTop: '15px'
        }, 1500);
    }

    if( $(window).width() > 800){
        $('.foto').css({
            opacity: 0,
            marginTop: 0
        });
        $('.foto').animate({
            opacity: 3,
            marginTop: '-40px'
        }, 2500);
    }

// Scroll Elemento Menu
    let acercaDe = $('#acerca-de').offset().top;
        
        $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
        scrollTop: 260
    }, 1500);
    });

    let productos = $('#productos').offset().top;

        $('#btn-productos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
        scrollTop: 780
    }, 1500);
    });

    let contacto = $('#contacto').offset().top;

        $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
        scrollTop: 20000
    }, 4000);
    });


    

});