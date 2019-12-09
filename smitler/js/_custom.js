$(function () {

    $(window).on('load', function () {
        var $preloader = $('#p_prldr'),
            $svg_anm = $preloader.find('.svg_anm');
        $svg_anm.fadeOut();
        $preloader.delay(500).fadeOut('slow');
    });

    $("#my-menu").mmenu({
        extensions: ['theme-black', 'pagedim-black', "position-right"],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="logo">'
        },
    });


    var api = $('#my-menu').data('mmenu');

    api.bind("open:finish", function () {
        $('.hamburger').addClass('is-active');
    }).bind("close:finish", function () {
        $('.hamburger').removeClass('is-active');
    });

    $('.carousel-services').on('initialized.owl.carousel', function () {
        setTimeout(function () {
            carouselService();
        }, 1000)
    });

    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            },
        }

    });

    function carouselService() {
        $('.carousel-services-item').each(function () {
            var ths = $(this);
            var thsh = ths.find('.carousel-services-content').outerHeight();
            ths.find('.carousel-services-image').css('min-height', thsh)
        });
    }

    carouselService();

    $('.carousel-services-composition .h3').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<br /><span>$1</span>'));
    });

    $('section .h2').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });

    $('.top').click(function () {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing')
    });

    $("form.callback").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $(th).find(".success").addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function () {
                $(th).find(".success").removeClass('active').fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });


    $('select').selectize({
        create: true
    });

    function onResize() {
        $('.carousel-services-content').equalHeights()
    }

    onResize();
    window.onresize = function () {
        onResize()
    };

    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        nav: false,
        dots: true,
        autoHeight: true,
    })
    $('.partners').owlCarousel({
        loop: true,
        smartSpeed: 700,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
        }

    })
})




