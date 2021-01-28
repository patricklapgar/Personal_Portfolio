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
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:3
            },
            768:{
                items:3
            },
            938:{
                items: 4
            }
        }
    });

    var skillsTopOffset = $(".skillSection").offset().top;
    $(window).scroll(function(){

        // If the scroll position is greater than the position of the offset minus the height of the full window
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            // Activate easypiechart code
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

});

