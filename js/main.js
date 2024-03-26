(function($){

console.clear();

    window.scrollTo(0, 0);

    
    setTimeout(function() { 
        bodyTl.play();
        //openingTl.play();
    }, 1000);
    
    var controller = new ScrollMagic.Controller();
    var $body = $('body');
    var bodyTl = new TimelineMax({ paused: true })
        .to($body, 0.15, { autoAlpha: 1, ease: Power4.easeInOut });
       
    hideBody();
    function hideBody(){
        var hideBodyTl = new TimelineMax();
        hideBodyTl
            .set($body, { autoAlpha: 0 });
        return hideBodyTl;
    }

    new ScrollMagic.Scene({triggerElement: "#img-cards"})
    .on("enter", function (event) {
       // alert('lol');
       bodyTl.play();       
    }).triggerHook(0.6).addTo(controller);


     
    // --------------------------------------------------------------
    // --------------------------------------------------------------
    // --------------------------------------------------------------
    // $hero = $('.hero');
    // $opening = $hero.find('.opening');
    // $openingL = $opening.find('.opening-left');
    // $openingR = $opening.find('.opening-right');
    // var openingTl = new TimelineMax({ paused: true })
    //     .to($openingL, 1, { xPercent: "+=50", yPercent: "-=30", ease: Power4.easeInOut })
    //     .to($openingR, 1, { xPercent: "-=50", yPercent: "-=30", ease: Power4.easeInOut }, "-=1")
    //     .to($hero, 0.1, { filter: "brightness(1.3)", ease: Power4.easeInOut }, "-=0.3") // Add this line to animate $hero to filter: brightness(2)
    //     .to($hero, 0.1, { filter: "brightness(1)", ease: Power4.easeInOut }, "-=0.2")
    //     .to($hero, 0.1, { filter: "brightness(1.3)", ease: Power4.easeInOut }, "-=0.05") // Add this line to animate $hero to filter: brightness(2)
    //     .to($hero, 0.1, { filter: "brightness(1)", ease: Power4.easeInOut }, "-=0.04"); // Add this line to animate $hero to filter: brightness(2.4)
       

    // setOpening();
    // function setOpening(){
    //     var setOpeningTl = new TimelineMax();
    //     setOpeningTl
    //         .set($openingL, { xPercent: "-=50", yPercent: "+=30", autoAlpha: 1 })
    //         .set($openingR, { xPercent: "+=50", yPercent: "+=30", autoAlpha: 1 });
    //     return setOpeningTl;
    // }

    // --------------------------------------------------------------
    // --------------------------------------------------------------
    // --------------------------------------------------------------
    // var $chartImmigration = $('#chart-immigration');
    
    // $listImmigration = $chartImmigration.find('li');
    // var $barBaseW = $(".bar-first").width();
    // var $barBaseVal = $listImmigration.first().find('.bar').attr('value');
    // $('.bar').removeClass('grow');

    // setImmigrationBars();
    // function setImmigrationBars(){
    //     var setImmigrationBarsTl = new TimelineMax();
    //     setImmigrationBarsTl
    //         .set($listImmigration.find('.bar'), { width: '0' }); 
    //     return setImmigrationBarsTl;
    // }
       
    
    // var graphImmigrationDone = false;
    // new ScrollMagic.Scene({triggerElement: "#chart-immigration"})
    //     .on("enter", function (event) {
    //         if (!graphImmigrationDone)
    //         {
    //             var $resultInNbr;
    //             $listImmigration.each(function(index) {
    //                 var value = $(this).find('.bar').attr('value');
    //                 $(this).find('.counter').html(value);
    
    //                 $resultInNbr = 100 / $barBaseVal * value;
    //                 $resultInPx = $barBaseW / 100 * $resultInNbr;
    //                 $resultInPxFraction = $resultInPx / 100 * 30;

    //                 var barElement = $(this).find('.bar');
    //                 var counterElement = $(this).find('.counter');
    //                 TweenMax.to(barElement, 1.5, { width: $resultInPx-$resultInPxFraction, ease: Power4.easeInOut });
    
    //                 //console.log($resultInPx-20);
    //             });
    
    
    //             $('.counter').counterUp({
    //                 delay: 10,
    //                 time: 1000
    //             });

    //             graphImmigrationDone = true;
    //         }
           
    //     }).triggerHook(0.7).addTo(controller);

    var swiperCards = new Swiper(".swiperCards", {
        effect: "cards",
        grabCursor: true,
        loop: false
    });

    var swiperCardsInfos = new Swiper(".swiperCardsInfos", {
        autoHeight: true,
        effect: "fade",
        fadeEffect: { crossFade: true },
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-cards-next",
            prevEl: ".btn-cards-prev",
        },
        pagination: {
          el: ".swiper-pagination-cards",
          clickable: true,
        },
    });

swiperCardsInfos.on('slideChange', function () {
    swiperCards.slideTo(swiperCardsInfos.activeIndex);
});

swiperCards.on('slideChange', function () {
    swiperCardsInfos.slideTo(swiperCards.activeIndex);
});



// var swiperAurasInfos = new Swiper(".swiperAurasInfos", {
//     autoHeight: true,
//     effect: "fade",
//     fadeEffect: { crossFade: true },
//     spaceBetween: 20,
//     navigation: {
//         nextEl: ".btn-next",
//         prevEl: ".btn-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// (window.innerHeight / 2)

setTimeout(function() { 




    if (window.innerWidth > 747) {
        var $wheel = $('.wheel');
        var weAreOnMobile = false;
        var triggerHookWheel = 0.5;
        var triggerHookChakras = 0.5;
        $wheel = $('.wheel');
        $chakras = $('.chakras');
    }
    else
    {
        var $wheel = $('.wheel-mobile');
        var weAreOnMobile = true;
        var triggerHookWheel = 0.6;
        var triggerHookChakras = 0.6;
        $wheel = $('.wheel-mobile');
        $chakras = $('.chakras-mobile');
    }
    



    // --------------------------------------------------------------
    // --- WHEEL ELEMENTS + TL IN VARS
    // -------------------------------------------------------------- 
    
    $wheelRotatingElements = $wheel.find('#wheel-rotating-elements');
    $wheelSamhain = $wheel.find('#wheel-samhain');
    $wheelAlbanElfed = $wheel.find('#wheel-alban-elfed');
    $wheelAlbanEilir = $wheel.find('#wheel-alban-eilir');
    $wheelLughnasadh = $wheel.find('#wheel-lughnasadh');
    $wheelAlbanHefin = $wheel.find('#wheel-alban-hefin');
    $wheelBeltaine = $wheel.find('#wheel-beltaine');
    $wheelImbolc = $wheel.find('#wheel-imbolc');
    $wheelAlbanArthan = $wheel.find('#wheel-alban-arthan');

    $wheelTrigger1 = $('.wheel-trigger-1');
    $wheelTrigger2 = $('.wheel-trigger-2');
    $wheelTrigger3 = $('.wheel-trigger-3');
    $wheelTrigger4 = $('.wheel-trigger-4');
    $wheelTrigger5 = $('.wheel-trigger-5');
    $wheelTrigger6 = $('.wheel-trigger-6');
    $wheelTrigger7 = $('.wheel-trigger-7');
    $wheelTrigger8 = $('.wheel-trigger-8');
    
    var activeSeason = "samhain";
       
    
    var wheelTl = new TimelineMax({ paused: true })
        .to($wheel, 1, { autoAlpha: 1, y: "-=40px", ease: Power4.easeInOut })
        .to($wheelTrigger2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
        .to($wheelTrigger3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
        .to($wheelTrigger4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
        .to($wheelTrigger5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
        .to($wheelTrigger6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
        .to($wheelTrigger7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
        .to($wheelTrigger8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");


    // --------------------------------------------------------------
    // --- WHEEL STAGE CLEARING
    // -------------------------------------------------------------- 
    clearWheelStage();
    function clearWheelStage(){
        var clearWheelStageTl = new TimelineMax();
        clearWheelStageTl
        .set($wheel, { autoAlpha: 0, y: "+=40px", transformOrigin: "center center" })
        .set($wheelRotatingElements, { transformOrigin: "center center" });
    }


    var wheelSectionH = $('.wheel-section').height();
    var wheelH = $('.wheel').height();
    var wheelScrollNeeded = wheelSectionH - wheelH;

    var wH = window.innerHeight;
    var eH = $('.wheel').height();

    var triggerHookAdaptedInPx = (wH / 2) - (eH / 2);
    var triggerHookAdapted = 1 / wH * triggerHookAdaptedInPx;
    
    // --------------------------------------------------------------
    // --- DESKTOP : PIN WHEEL BUT FIRST TRIGGER STILL WAITS
    // --------------------------------------------------------------       
    var scene = new ScrollMagic.Scene({triggerElement: ".wheel-container", duration: wheelScrollNeeded})
        .triggerHook(triggerHookAdapted)
        .setPin(".wheel")
        //.addIndicators({name: "PIN WHEEL HERE"}) // add indicators (requires plugin)
        .addTo(controller)
        .on("enter", function (event) { 
        });

        new ScrollMagic.Scene({triggerElement: ".wheel-container", duration: wheelScrollNeeded})
        .triggerHook(triggerHookAdapted)
        .setPin(".wheel-chene")
        //.addIndicators({name: "PIN WHEEL HERE"}) // add indicators (requires plugin)
        .addTo(controller)
        .on("enter", function (event) { 
        });

        new ScrollMagic.Scene({
            triggerElement: ".wheel-trigger-1",
            triggerHook: triggerHookWheel,
            duration: $(".wheel-trigger-1").height()
        })
        .on("enter", function (event) {
            activeSeason = "samhain";
            fadeWheelTxt();
            var wheelTurningTl = new TimelineMax({ paused: false })
                .to($wheelRotatingElements, 0.5, { rotate: 45, ease: Power1.easeInOut })
                .to($wheelTrigger1, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
                .to($wheelTrigger2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
                .to($wheelTrigger3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
                .to($wheelTrigger4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
                .to($wheelTrigger5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
                .to($wheelTrigger6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
                .to($wheelTrigger7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
                .to($wheelTrigger8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");;
            wheelTl.play();
            
        }).addTo(controller);

   

    // --------------------------------------------------------------
    // --- MOBILE : WHEEL APPEARANCE
    // --------------------------------------------------------------    
    new ScrollMagic.Scene({
        triggerElement: ".wheel-section",
        triggerHook: 0.6,
        duration: $('.wheel-section').height()
    })
    .on("enter", function (event) {
        if (weAreOnMobile)
        {
            $('.wheel-container-mobile').removeClass('offscreen');
        }
        
        
    })
    .on("leave", function (event) {
        if (weAreOnMobile)
        {
            $('.wheel-container-mobile').addClass('offscreen');
        }
    })
    .addTo(controller);
    
    // --------------------------------------------------------------
    // --- WHEEL ROTATION
    // -------------------------------------------------------------- 
    // new ScrollMagic.Scene({
    //     triggerElement: ".wheel-trigger-1",
    //     triggerHook: triggerHookWheel,
    //     duration: $(".wheel-trigger-1").height()
    // })
    // .on("enter", function (event) {
    //     var wheelTurningTl = new TimelineMax({ paused: false })
    //         .to($wheelRotatingElements, 0.5, { rotate: 45, ease: Power1.easeInOut });
        
    // }).addTo(controller);


    // $wheelSamhain = $wheel.find('#wheel-samhain');
    // $wheelAlbanElfed = $wheel.find('#wheel-alban-elfed');
    // $wheelAlbanEilir = $wheel.find('#wheel-alban-eilir');
    // $wheelLughnasadh = $wheel.find('#wheel-lughnasadh');
    // $wheelAlbanEfin = $wheel.find('#wheel-alban-efin');
    // $wheelBeltaine = $wheel.find('#wheel-beltaine');
    // $wheelImbolc = $wheel.find('#wheel-imbolc');
    // $wheelAlbanArthan = $wheel.find('#wheel-alban-arthan');
     

    

    new ScrollMagic.Scene({
        triggerElement: ".wheel-trigger-2",
        triggerHook: triggerHookWheel,
        duration: $(".wheel-trigger-2").height()
    })
    .on("enter", function (event) {
        activeSeason = "albanArthan";
        fadeWheelTxt();
        var wheelTurningTl = new TimelineMax({ paused: false })
            .to($wheelRotatingElements, 0.5, { rotate: 0, ease: Power1.easeInOut })
            .to($wheelTrigger1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger2, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");
    }).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".wheel-trigger-3",
        triggerHook: triggerHookWheel,
        duration: $(".wheel-trigger-3").height()
    })
    .on("enter", function (event) {
        activeSeason = "imbolc";
        fadeWheelTxt();
        var wheelTurningTl = new TimelineMax({ paused: false })
            .to($wheelRotatingElements, 0.5, { rotate: -45, ease: Power1.easeInOut })
            .to($wheelTrigger1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger3, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");
    }).addTo(controller);
    
    new ScrollMagic.Scene({
        triggerElement: ".wheel-trigger-4",
        triggerHook: triggerHookWheel,
        duration: $(".wheel-trigger-4").height()
    })
    .on("enter", function (event) {
        activeSeason = "albanEilir";
        fadeWheelTxt();
        var wheelTurningTl = new TimelineMax({ paused: false })
            .to($wheelRotatingElements, 0.5, { rotate: -90, ease: Power1.easeInOut })
            .to($wheelTrigger1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger4, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");
    }).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".wheel-trigger-5",
        triggerHook: triggerHookWheel,
        duration: $(".wheel-trigger-5").height()
    })
    .on("enter", function (event) {
        activeSeason = "beltaine";
        fadeWheelTxt();
        var wheelTurningTl = new TimelineMax({ paused: false })
            .to($wheelRotatingElements, 0.5, { rotate: -135, ease: Power1.easeInOut })
            .to($wheelTrigger1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger5, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");
    }).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".wheel-trigger-6",
        triggerHook: triggerHookWheel,
        duration: $(".wheel-trigger-6").height()
    })
    .on("enter", function (event) {
        activeSeason = "albanHefin";
        fadeWheelTxt();
        var wheelTurningTl = new TimelineMax({ paused: false })
            .to($wheelRotatingElements, 0.5, { rotate: -180, ease: Power1.easeInOut })
            .to($wheelTrigger1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger6, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");;
    }).addTo(controller);
    
    new ScrollMagic.Scene({
        triggerElement: ".wheel-trigger-7",
        triggerHook: triggerHookWheel,
        duration: $(".wheel-trigger-7").height()
    })
    .on("enter", function (event) {
        activeSeason = "lughnasadh";
        fadeWheelTxt();
        var wheelTurningTl = new TimelineMax({ paused: false })
            .to($wheelRotatingElements, 0.5, { rotate: -225, ease: Power1.easeInOut })
            .to($wheelTrigger1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger7, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");
           
    }).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".wheel-trigger-8",
        triggerHook: triggerHookWheel,
        duration: $(".wheel-trigger-8").height()
    })
    .on("enter", function (event) {
        activeSeason = "albanElfed";
        fadeWheelTxt();
        var wheelTurningTl = new TimelineMax({ paused: false })
            .to($wheelRotatingElements, 0.5, { rotate: -270, ease: Power1.easeInOut })
            .to($wheelTrigger1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($wheelTrigger8, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1");;
            
    }).addTo(controller);

  
    
    function fadeWheelTxt(){
        // alert('lol');
        new TimelineMax({ paused: false })
            .to($wheelSamhain, 0.1, { opacity: 0.35, ease: Power1.easeInOut })
            .to($wheelAlbanElfed, 0.1, { opacity: 0.35, ease: Power1.easeInOut }, "-=0.1")
            .to($wheelAlbanEilir, 0.1, { opacity: 0.35, ease: Power1.easeInOut }, "-=0.1")
            .to($wheelLughnasadh, 0.1, { opacity: 0.35, ease: Power1.easeInOut }, "-=0.1")
            .to($wheelAlbanHefin, 0.1, { opacity: 0.35, ease: Power1.easeInOut }, "-=0.1")
            .to($wheelBeltaine, 0.1, { opacity: 0.35, ease: Power1.easeInOut }, "-=0.1")
            .to($wheelImbolc, 0.1, { opacity: 0.35, ease: Power1.easeInOut }, "-=0.1")
            .to($wheelAlbanArthan, 0.1, { opacity: 0.35, ease: Power1.easeInOut }, "-=0.1");

            // console.log(activeSeason);
            switch (activeSeason) {
                case "samhain":
                    new TimelineMax({ paused: false })
                         .to($wheelSamhain, 0.1, { opacity: 1, ease: Power1.easeInOut });
                    break;
                case "albanArthan":
                        new TimelineMax({ paused: false })
                             .to($wheelAlbanArthan, 0.1, { opacity: 1, ease: Power1.easeInOut });
                        break;
                case "imbolc":
                    new TimelineMax({ paused: false })
                         .to($wheelImbolc, 0.1, { opacity: 1, ease: Power1.easeInOut });
                    break;
                case "albanEilir":
                    new TimelineMax({ paused: false })
                         .to($wheelAlbanEilir, 0.1, { opacity: 1, ease: Power1.easeInOut });
                    break;
                case "beltaine":
                    new TimelineMax({ paused: false })
                         .to($wheelBeltaine, 0.1, { opacity: 1, ease: Power1.easeInOut });
                    break;
                case "albanHefin":
                    new TimelineMax({ paused: false })
                         .to($wheelAlbanHefin, 0.1, { opacity: 1, ease: Power1.easeInOut });// Code for albanHefin season
                    break;
                case "lughnasadh":
                    new TimelineMax({ paused: false })
                         .to($wheelLughnasadh, 0.1, { opacity: 1, ease: Power1.easeInOut });
                    break;
                case "albanElfed":
                    new TimelineMax({ paused: false })
                         .to($wheelAlbanElfed, 0.1, { opacity: 1, ease: Power1.easeInOut }); // Code for albanElfed season
                    break;
                default:
                    // Default code
                    break;
            }
            
            
            //alert(activeSeason);
    }

    // --------------------------------------------------------------
    // --- SALUTATIONS : ELEMENTS + TL IN VARS
    // --------------------------------------------------------------  
    $salutationsContainer = $('.salutations-container');
    $salutationsHerbes = $salutationsContainer.find('.salutations-herbes');
    $salutationsBase = $salutationsContainer.find('.salutations-base');
    $salutationsBack = $salutationsContainer.find('.salutations-back');
    $salutationsTop = $salutationsContainer.find('.salutations-top');
    $salutationsLeft = $salutationsContainer.find('.salutations-left');
    $salutationsRight = $salutationsContainer.find('.salutations-right');

    var salutationsTl = new TimelineMax({ paused: true })
        .to($salutationsBase, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        // TOP
        .to($salutationsBase, 0.5, { autoAlpha: 0, ease: Power4.easeInOut })
        .to($salutationsTop, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5")
        // DOWN
        .to($salutationsBase, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
        .to($salutationsTop, 0.5, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.5")

        // TOP
        .to($salutationsBase, 0.5, { autoAlpha: 0, ease: Power4.easeInOut })
        .to($salutationsTop, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5")
        // DOWN
        .to($salutationsBase, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
        .to($salutationsTop, 0.5, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.5")



         // BACK
        .to($salutationsBase, 0.5, { autoAlpha: 0, ease: Power4.easeInOut })
        .to($salutationsBack, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5")
        // DOWN
        .to($salutationsBase, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
        .to($salutationsBack, 0.5, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.5")
        
         // BACK
         .to($salutationsBase, 0.5, { autoAlpha: 0, ease: Power4.easeInOut })
         .to($salutationsBack, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5")
         // DOWN
         .to($salutationsBase, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
         .to($salutationsBack, 0.5, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.5")
         
         
        
         // LEFT
         .to($salutationsBase, 0.5, { autoAlpha: 0, ease: Power4.easeInOut })
         .to($salutationsLeft, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5")
         // DOWN
         .to($salutationsBase, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
         .to($salutationsLeft, 0.5, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.5")
         
          // LEFT
         .to($salutationsBase, 0.5, { autoAlpha: 0, ease: Power4.easeInOut })
         .to($salutationsLeft, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5")
         // DOWN
         .to($salutationsBase, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
         .to($salutationsLeft, 0.5, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.5")
         
         
         
         // RIGHT
         .to($salutationsBase, 0.5, { autoAlpha: 0, ease: Power4.easeInOut })
         .to($salutationsRight, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5")
         // DOWN
         .to($salutationsBase, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
         .to($salutationsRight, 0.5, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.5")
         
         // RIGHT
         .to($salutationsBase, 0.5, { autoAlpha: 0, ease: Power4.easeInOut })
         .to($salutationsRight, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5")
         // DOWN
         .to($salutationsBase, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
         .to($salutationsRight, 0.5, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.5");

    // --------------------------------------------------------------
    // --- SALUTATIONS STAGE CLEARING
    // -------------------------------------------------------------- 
    clearSalutationsStage();
    function clearSalutationsStage(){
        var clearSalutationsStageTl = new TimelineMax();
        clearSalutationsStageTl
        .set($salutationsBase, { autoAlpha: 0, transformOrigin: "center center" })
        .set($salutationsBack, { autoAlpha: 0, transformOrigin: "center center" })
        .set($salutationsTop, { autoAlpha: 0, transformOrigin: "center center" })
        .set($salutationsLeft, { autoAlpha: 0, transformOrigin: "center center" })
        .set($salutationsRight, { autoAlpha: 0, transformOrigin: "center center" });
    }

    // --------------------------------------------------------------
    // --- SALUTATIONS TRIGGER
    // --------------------------------------------------------------       
    new ScrollMagic.Scene({triggerElement: "#salutations"})
        .on("enter", function (event) {
            // alert('lol');
            salutationsTl.play();    
        }).triggerHook(0.6).addTo(controller);


    // --------------------------------------------------------------
    // --- AURAS INFOS SWIPER
    // -------------------------------------------------------------- 
    var swiperAurasInfos = new Swiper(".swiperAurasInfos", {
        autoHeight: true,
        effect: "fade",
        fadeEffect: { crossFade: true },
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-auras-next",
            prevEl: ".btn-auras-prev",
        },
        pagination: {
            el: ".swiper-pagination-auras",
            clickable: true,
        },
    });

    swiperAurasInfos.on('activeIndexChange', function () {
        console.log(swiperAurasInfos.activeIndex + 1);

        switch (swiperAurasInfos.activeIndex + 1) {
            case 1:
                
                var aura1TLIn = new TimelineMax({ paused: false })
                    .to($aura1, 0.5, { autoAlpha: 1, scale: 1, ease:"elastic.out(1,1.5)" });
                if (swiperAurasInfos.previousIndex + 1 > swiperAurasInfos.activeIndex)
                {
                    var aura2TLOut = new TimelineMax({ paused: false })
                        .to($aura2, 0.5, { autoAlpha: 0, scale: 0, ease:"elastic.in(1,1.5)" });
                }
                break;
            case 2:
                var aura2TLIn = new TimelineMax({ paused: false })
                    .to($aura2, 0.5, { autoAlpha: 1,  scale: 1, ease:"elastic.out(1,1.5)" });
                    if (swiperAurasInfos.previousIndex + 1 > swiperAurasInfos.activeIndex)
                    {
                        var aura3TLOut = new TimelineMax({ paused: false })
                            .to($aura3, 0.5, { autoAlpha: 0, scale: 0, ease:"elastic.in(1,1.5)" });
                    }
                    // .to($aura1, 0.5, { autoAlpha: 1, fill: "#3b8671", stroke: "rgba(147, 197, 183, 0.34)", strokeWidth: 1, ease:"elastic.out(1,1.5)" }, "-=5");
                break;
            case 3:
                var aura3TLIn = new TimelineMax({ paused: false })
                    .to($aura3, 0.5, { autoAlpha: 1,  scale: 1, ease:"elastic.out(1,1.5)" });
                    if (swiperAurasInfos.previousIndex + 1 > swiperAurasInfos.activeIndex)
                    {
                        var aura4TLOut = new TimelineMax({ paused: false })
                            .to($aura4, 0.5, { autoAlpha: 0, scale: 0, ease:"elastic.in(1,1.5)" });
                    }
                    // .to($aura2, 0.5, { autoAlpha: 1, fill: "#3b8671", stroke: "rgba(147, 197, 183, 0.34)", strokeWidth: 1, ease:"elastic.out(1,1.5)" }, "-=5");
                break;
            case 4:
                var aura4TLIn = new TimelineMax({ paused: false })
                    .to($aura4, 0.5, { autoAlpha: 1,  scale: 1, ease:"elastic.out(1,1.5)" });
                    // .to($aura3, 0.5, { autoAlpha: 1, fill: "#3b8671", stroke: "rgba(147, 197, 183, 0.34)", strokeWidth: 1, ease:"elastic.out(1,1)" }, "-=0.5");;
                break;
            default:
                // Add code for default case
                break;
        }

        
        // if (swiperAurasInfos.activeIndex + 1 == 2)
        // {
        //     aura2TLIn.play();
        // }
        
            
    });
    
    // --------------------------------------------------------------
    // --- AURAS : ELEMENTS + TL IN VARS
    // --------------------------------------------------------------  
    $auras = $('#auras');
    $aura1 = $auras.find('#aura1-2');
    $aura2 = $auras.find('#aura2-2');
    $aura3 = $auras.find('#aura3-2');
    $aura4 = $auras.find('#aura4');
    $aurasLines = $auras.find('#lines');
    $aurasBg = $auras.find('#bg');

    $triggerSphere1 = $('.trigger-sphere-1');
    $triggerSphere2 = $('.trigger-sphere-2');
    $triggerSphere3 = $('.trigger-sphere-3');
    $triggerSphere4 = $('.trigger-sphere-4');
    $triggerSphere5 = $('.trigger-sphere-5');
    $triggerSphere6 = $('.trigger-sphere-6');
    $triggerSphere7 = $('.trigger-sphere-7');
    $triggerSphere8 = $('.trigger-sphere-8');
    $triggerSphere9 = $('.trigger-sphere-9');

    var aurasTl = new TimelineMax({ paused: true })
        .to($auras, 0.5, { autoAlpha: 1, x: "-=40px", ease: Power4.easeInOut })
        .to($aura1, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($triggerSphere2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
        .to($triggerSphere3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
        .to($triggerSphere4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
        .to($triggerSphere5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
        .to($triggerSphere6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
        .to($triggerSphere7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
        .to($triggerSphere8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
        .to($triggerSphere9, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");

    
    
    
    

    // // AURA 2
    // var aura2TLIn = new TimelineMax({ paused: true })
    //     .to($aura2, 0.5, { autoAlpha: 1, ease: Power4.easeInOut });
    
    // var aura2TLOut = new TimelineMax({ paused: true })
    //     .to($aura2, 0.5, { autoAlpha: 0, ease: Power4.easeInOut });

    // --------------------------------------------------------------
// --- Event listener for p click
// --------------------------------------------------------------
   


    // --------------------------------------------------------------
    // --- AURAS STAGE CLEARING
    // -------------------------------------------------------------- 
    clearAurasStage();
    function clearAurasStage(){
        var clearAurasStageTl = new TimelineMax();
        clearAurasStageTl
        .set($auras, { autoAlpha: 0, x: "+=40px", transformOrigin: "center center" })
        .set($aura1, { autoAlpha: 0, transformOrigin: "80% 80%" })
        .set($aura2, { autoAlpha: 0, scale: 0, transformOrigin: "80% 80%" })
        .set($aura3, { autoAlpha: 0, scale: 0, transformOrigin: "80% 80%" })
        .set($aura4, { autoAlpha: 0,  scale: 0, transformOrigin: "80% 80%" });
    }


    // --------------------------------------------------------------
    // --- AURAS TRIGGER
    // --------------------------------------------------------------       
    new ScrollMagic.Scene({triggerElement: "#auras"})
        .on("enter", function (event) {
            // alert('lol');
            aurasTl.play();    
        }).triggerHook(0.6).addTo(controller);

    // --------------------------------------------------------------
    // --- MOBILE : CHAKRAS APPEARANCE
    // --------------------------------------------------------------    
    new ScrollMagic.Scene({
        triggerElement: ".chakras-section",
        triggerHook: 0.6,
        duration: $('.chakras-section').height()
    })
    .on("enter", function (event) {
        if (weAreOnMobile)
        {
            $('.chakras-container-mobile').removeClass('offscreen');
        }
        
        
    })
    .on("leave", function (event) {
        if (weAreOnMobile)
        {
            $('.chakras-container-mobile').addClass('offscreen');
        }
    })
    .addTo(controller);


    // --------------------------------------------------------------
    // --- CHAKRAS : WHEN AND HOW LONG TO PIN
    // --------------------------------------------------------------  
    var chakrasSectionH = $('.chakras-section').height();
    var chakrasH = $('.chakras').height();
    var chakrasScrollNeeded = chakrasSectionH - chakrasH;


    var wH = window.innerHeight;
    var cH = $('.chakras').height();

    var triggerHookAdaptedInPx = (wH / 2) - (cH / 2);
    var triggerHookAdapted = 1 / wH * triggerHookAdaptedInPx;

   
    // --------------------------------------------------------------
    // --- CHAKRAS IS PINNED
    // --------------------------------------------------------------  
    var scene = new ScrollMagic.Scene({triggerElement: ".chakras-container", duration: chakrasScrollNeeded})
    .triggerHook(triggerHookAdapted)
    .setPin(".chakras")
    .addTo(controller);

    // --------------------------------------------------------------
    // --- CHAKRAS ELEMENTS + TL IN VARS
    // -------------------------------------------------------------- 
    //var $chakras = $('.chakras');
    var $chLines = $chakras.find('#lines')
    var $chakra1 = $chakras.find('#chakra1');
    var $chakra2 = $chakras.find('#chakra2');
    var $chakra3 = $chakras.find('#chakra3');
    var $chakra4 = $chakras.find('#chakra4');
    var $chakra5 = $chakras.find('#chakra5');
    var $chakra6 = $chakras.find('#chakra6');
    var $chakra7 = $chakras.find('#chakra7');
    var $chakra8 = $chakras.find('#chakra8');
    var $chakra9 = $chakras.find('#chakra9');
    var $allChakras = [$chakra1, $chakra2, $chakra3, $chakra4, $chakra5, $chakra6, $chakra7, $chakra8, $chakra9];
    var chakrasTl = new TimelineMax({ paused: true })
        .to($chakras, 1, { autoAlpha: 1, y: "-=40px", ease: Power4.easeInOut })
        .to($chLines, 1, { opacity: 0.5, ease: Power1.easeInOut }, "-=0.250")
        .to($allChakras, 1, { autoAlpha: 1, ease: Power1.easeInOut }, "-=1");
        // .staggerTo([$chakra9, $chakra8, $chakra7, $chakra6, $chakra5, $chakra4, $chakra3, $chakra2, $chakra1], 1, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, 0.2);
       

    // --------------------------------------------------------------
    // --- CHAKRAS STAGE CLEARING
    // -------------------------------------------------------------- 
    clearChakrasStage();
    function clearChakrasStage(){
        var clearChakrasStageTl = new TimelineMax();
        clearChakrasStageTl
        .set($chakras, { autoAlpha: 0, y: "+=40px", transformOrigin: "center center" })
        .set($chakra1, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chakra2, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chakra3, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chakra4, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chakra5, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chakra6, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chakra7, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chakra8, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chakra9, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chakra1.find('.bg'), { fill: '#8EBCAF', strokeWidth: 0, transformOrigin: "center center" })
        .set($chakra2.find('.bg'), { fill: '#8EBCAF', strokeWidth: 0, transformOrigin: "center center" })
        .set($chakra3.find('.bg'), { fill: '#8EBCAF', strokeWidth: 0, transformOrigin: "center center" })
        .set($chakra4.find('.bg'), { fill: '#8EBCAF', strokeWidth: 0, transformOrigin: "center center" })
        .set($chakra5.find('.bg'), { fill: '#8EBCAF', strokeWidth: 0, transformOrigin: "center center" })
        .set($chakra6.find('.bg'), { fill: '#8EBCAF', strokeWidth: 0, transformOrigin: "center center" })
        .set($chakra7.find('.bg'), { fill: '#8EBCAF', strokeWidth: 0, transformOrigin: "center center" })
        .set($chakra8.find('.bg'), { fill: '#8EBCAF', strokeWidth: 0, transformOrigin: "center center" })
        .set($chakra9.find('.bg'), { fill: '#8EBCAF', strokeWidth: 0, transformOrigin: "center center" });
    }

    // --------------------------------------------------------------
    // --- CHAKRAS TL PLAYS
    // -------------------------------------------------------------- 
    new ScrollMagic.Scene({triggerElement: ".chakras-container"})
        .on("enter", function (event) {
            //alert('CHAKRA PLAY NOW')
            chakrasTl.play();       
        }).triggerHook(0.5).addTo(controller);

    
    // --------------------------------------------------------------
    // --- CHAKRAS TRIGGER SPHERE 1
    // -------------------------------------------------------------- 
    new ScrollMagic.Scene({
        triggerElement: ".trigger-sphere-1",
        triggerHook: triggerHookChakras,
        duration: $(".trigger-sphere-1").height()
    })
    .on("enter", function (event) {
        var chakrasUpdate = new TimelineMax({ paused: false })
            .to($chakra2.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut })
            .to($chakra3.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra4.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra5.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra6.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra7.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra8.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra9.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra1.find('.bg'), 0.1, { fill: '#A02525', strokeWidth: 2, ease: Power1.easeInOut }, "-=0.1")
            
            .to($triggerSphere1, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5")
            .to($triggerSphere2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere9, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");
    }).addTo(controller);

    // --------------------------------------------------------------
    // --- CHAKRAS TRIGGER SPHERE 2
    // -------------------------------------------------------------- 
    new ScrollMagic.Scene({
        triggerElement: ".trigger-sphere-2",
        triggerHook: triggerHookChakras,
        duration: $(".trigger-sphere-2").height()
    })
    .on("enter", function (event) {
        var chakrasUpdate = new TimelineMax({ paused: false })
            .to($chakra1.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut })
            .to($chakra3.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra4.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra5.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra6.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra7.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra8.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra9.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra2.find('.bg'), 0.1, { fill: '#AD7A27', strokeWidth: 2, ease: Power1.easeInOut }, "-=0.1")
            
            .to($triggerSphere1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=0.5")
            .to($triggerSphere2, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere9, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");
    }).addTo(controller);

    // --------------------------------------------------------------
    // --- CHAKRAS TRIGGER SPHERE 3
    // -------------------------------------------------------------- 
    new ScrollMagic.Scene({
        triggerElement: ".trigger-sphere-3",
        triggerHook: triggerHookChakras,
        duration: $(".trigger-sphere-3").height()
    })
    .on("enter", function (event) {
        var chakrasUpdate = new TimelineMax({ paused: false })
            .to($chakra1.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut })
            .to($chakra2.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra4.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra5.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra6.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra7.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra8.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra9.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra3.find('.bg'), 0.1, { fill: '#B0B537', strokeWidth: 2, ease: Power1.easeInOut }, "-=0.1")
            
            .to($triggerSphere1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=0.5")
            .to($triggerSphere2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere3, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere9, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");
    }).addTo(controller);
    
    // --------------------------------------------------------------
    // --- CHAKRAS TRIGGER SPHERE 4
    // -------------------------------------------------------------- 
    new ScrollMagic.Scene({
        triggerElement: ".trigger-sphere-4",
        triggerHook: triggerHookChakras,
        duration: $(".trigger-sphere-4").height()
    })
    .on("enter", function (event) {
        var chakrasUpdate = new TimelineMax({ paused: false })
            .to($chakra1.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut })
            .to($chakra2.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra3.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra5.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra6.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra7.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra8.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra9.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra4.find('.bg'), 0.1, { fill: '#6DA749', strokeWidth: 2, ease: Power1.easeInOut }, "-=0.1")
            
            .to($triggerSphere1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=0.5")
            .to($triggerSphere2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere4, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere9, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");
    }).addTo(controller);

    // --------------------------------------------------------------
    // --- CHAKRAS TRIGGER SPHERE 5
    // -------------------------------------------------------------- 
    new ScrollMagic.Scene({
        triggerElement: ".trigger-sphere-5",
        triggerHook: triggerHookChakras,
        duration: $(".trigger-sphere-5").height()
    })
    .on("enter", function (event) {
        var chakrasUpdate = new TimelineMax({ paused: false })
            .to($chakra1.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut })
            .to($chakra2.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra3.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra4.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra6.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra7.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra8.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra9.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra5.find('.bg'), 0.1, { fill: '#488920', strokeWidth: 2, ease: Power1.easeInOut }, "-=0.1")
            
            .to($triggerSphere1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=0.5")
            .to($triggerSphere2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere5, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere9, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");
    }).addTo(controller);

    // --------------------------------------------------------------
    // --- CHAKRAS TRIGGER SPHERE 6
    // -------------------------------------------------------------- 
    new ScrollMagic.Scene({
        triggerElement: ".trigger-sphere-6",
        triggerHook: triggerHookChakras,
        duration: $(".trigger-sphere-6").height()
    })
    .on("enter", function (event) {
        var chakrasUpdate = new TimelineMax({ paused: false })
            .to($chakra1.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut })
            .to($chakra2.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra3.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra4.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra5.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra7.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra8.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra9.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra6.find('.bg'), 0.1, { fill: '#35A07B', strokeWidth: 2, ease: Power1.easeInOut }, "-=0.1")
            
            .to($triggerSphere1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=0.5")
            .to($triggerSphere2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere6, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere9, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");
    }).addTo(controller);

    // --------------------------------------------------------------
    // --- CHAKRAS TRIGGER SPHERE 7
    // -------------------------------------------------------------- 
    new ScrollMagic.Scene({
        triggerElement: ".trigger-sphere-7",
        triggerHook: triggerHookChakras,
        duration: $(".trigger-sphere-7").height()
    })
    .on("enter", function (event) {
        var chakrasUpdate = new TimelineMax({ paused: false })
            .to($chakra1.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut })
            .to($chakra2.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra3.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra4.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra5.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra6.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra8.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra9.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra7.find('.bg'), 0.1, { fill: '#59B2B2', strokeWidth: 2, ease: Power1.easeInOut }, "-=0.1")
            
            .to($triggerSphere1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=0.5")
            .to($triggerSphere2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere7, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere9, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");
    }).addTo(controller);

    // --------------------------------------------------------------
    // --- CHAKRAS TRIGGER SPHERE 8
    // -------------------------------------------------------------- 
    new ScrollMagic.Scene({
        triggerElement: ".trigger-sphere-8",
        triggerHook: triggerHookChakras,
        duration: $(".trigger-sphere-8").height()
    })
    .on("enter", function (event) {
        var chakrasUpdate = new TimelineMax({ paused: false })
            .to($chakra1.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut })
            .to($chakra2.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra3.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra4.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra5.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra6.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra7.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra9.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra8.find('.bg'), 0.1, { fill: '#597FB2', strokeWidth: 2, ease: Power1.easeInOut }, "-=0.1")
            
            .to($triggerSphere1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=0.5")
            .to($triggerSphere2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere8, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere9, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1");
    }).addTo(controller);

    // --------------------------------------------------------------
    // --- CHAKRAS TRIGGER SPHERE 9
    // -------------------------------------------------------------- 
    new ScrollMagic.Scene({
        triggerElement: ".trigger-sphere-9",
        triggerHook: triggerHookChakras,
        duration: $(".trigger-sphere-9").height()
    })
    .on("enter", function (event) {
        var chakrasUpdate = new TimelineMax({ paused: false })
            .to($chakra1.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut })
            .to($chakra2.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra3.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra4.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra5.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra6.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra7.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra8.find('.bg'), 0.1, { fill: '#8EBCAF', strokeWidth: 0, ease: Power1.easeInOut }, "-=0.1")
            .to($chakra9.find('.bg'), 0.1, { fill: '#8C59B2', strokeWidth: 2, ease: Power1.easeInOut }, "-=0.1")
            
            .to($triggerSphere1, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=0.5")
            .to($triggerSphere2, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere3, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere4, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere5, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere6, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere7, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere8, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")
            .to($triggerSphere9, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1");
    }).addTo(controller);

    // --------------------------------------------------------------
    // --- CHAKRAS ON CLICK SCROLL EVENT
    // -------------------------------------------------------------- 
    

}, 500);




const tlRing1 = gsap.timeline();
tlRing1.to('.ring-ch-1', { rotation: -360, duration: 60, repeat: -1, ease: 'linear' });
setRing1();
function setRing1(){
    var setRing1Tl = new TimelineMax();
    setRing1Tl
        .set('.ring-ch-1', { left: '50%', xPercent: '-50', yPercent : '-50', autoAlpha: 1, transformOrigin: "center center" });
    return setRing1Tl;
}

const tlRing2 = gsap.timeline();
tlRing2.to('.ring-ch-2', { rotation: -360, duration: 60, repeat: -1, ease: 'linear' });
setRing2();
function setRing2(){
    var setRing2Tl = new TimelineMax();
    setRing2Tl
        .set('.ring-ch-2', { left: '50%', xPercent: '-50', yPercent : '-50', autoAlpha: 1, transformOrigin: "center center" });
    return setRing2Tl;
}

// const tlRing3 = gsap.timeline();
// tlRing3.to('.ring-ch-3', { rotation: -360, duration: 60, repeat: -1, ease: 'linear' });
// setRing3();
// function setRing3(){
//     var setRing3Tl = new TimelineMax();
//     setRing3Tl
//         .set('.ring-ch-3', { left: '50%', xPercent: '-50', yPercent : '-50', autoAlpha: 1, transformOrigin: "center center" });
//     return setRing3Tl;
// }

// const tlRing4 = gsap.timeline();
// tlRing4.to('.ring-ch-4', { rotation: -360, duration: 60, repeat: -1, ease: 'linear' });
// setRing4();
// function setRing4(){
//     var setRing4Tl = new TimelineMax();
//     setRing4Tl
//         .set('.ring-ch-4', { left: '50%', xPercent: '-50', yPercent : '-50', autoAlpha: 1, transformOrigin: "center center" });
//     return setRing4Tl;
// }



    // new jBox('Tooltip', {
    //     attach: '.tooltip',
    //     trigger: 'click',
    //     closeOnMouseleave: false,
    //     closeButton: true,
    //     maxWidth: 350,
    //     position: {x: 'center', y: 'bottom'},
    //     offset: {x: 0, y: 10},
    //     animation: 'move'
    // });
    
   

         

            // Rest of your code...



  
	

  
})(jQuery);