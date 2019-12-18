/* ================================================
                Preloader
=================================================== */
$(window).on('load', function () { //makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ================================================
                Team
=================================================== */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ================================================
                Progress Bars
=================================================== */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);

        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'

    });
});

/* ================================================
                Responsive Tabs
=================================================== */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/* ================================================
                Portfolio
=================================================== */
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({

    });

    //Filter Items on Button Click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // Active Button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* ================================================
                Magnifier
=================================================== */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
        enabled: true
        }
    });
});

/* ================================================
                Testimonials
=================================================== */
$(function () {
    $("#testimonial-slide").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ================================================
                stats
=================================================== */
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/* ================================================
                Clients
=================================================== */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ================================================
                Googke Map
=================================================== */
$(window).on('load', function () {
    
    //Map Variables
    var addressString = 'Praça de Mouzinho de Albuquerque, Porto';
    var myLatlng = {lat: 41.157000, lng: -8.629600};
    
    //1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });
    
    //2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        tittle: "Click To See Address"
    });
    
    //3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });
    
    //Show info window when user clicks marker
    marker.addListener('click', function(){
        infowindow.open(map, marker);
    });
});

/* ================================================
                Navigation 
=================================================== */

/* Show & Hide White Navigation */
$(function () {
    
    // show/hide nav on page load
    showHideNav();
    
    $(window).scroll(function (){ 
        showHideNav();  
    });
    
    function showHideNav () {
        
        if($(window).scrollTop() > 50 ) {
           
            //show White nav
            $("nav").addClass("white-nav-top");
            
            //show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            
            //show back to top button
            $("#back-to-top").fadeIn();
        }
        else {
           
            //hide White nav
            $("nav").removeClass("white-nav-top");
            
            //show logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            
            //Hide back to top button
            $("#back-to-top").fadeOut();
        } 
    }
});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function(event) {
        
        event.preventDefault();   
        
        //get section id like #about, #service, #work, #team and etc.
        var section_id = $(this).attr("href");
        
        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});



























