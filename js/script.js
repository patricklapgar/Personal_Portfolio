$(document).ready(function(){
    // Activate superslides code
    $('#slides').superslides({
        // Specify options for sliding images
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    // Call Typed.js code
    // Arguments are a specific class and an 'options' object
    var typed = new Typed(".typed", {
        // Array of strings to type
        strings: ["Engineering Student", "Developer", "Coffee Lover", "and more..."],
        typeSpeed: 60,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

});

