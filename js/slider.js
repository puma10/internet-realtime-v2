var ticking = false;
var isFirefox = /Firefox/i.test(navigator.userAgent);
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var isIe = /MSIE/i.test(navigator.userAgent) || /Trident.*rv\:11\./i.test(navigator.userAgent);
var scrollSensitivitySetting = 30;
var slideDurationSetting = 800;
var currentSlideNumber = 0;
var totalSlideNumber = $('.block').length;
var isMobile = window.matchMedia("screen and (max-width: 920px)");

function parallaxScroll(evt){
    if (window.matchMedia("(max-width: 860px)").matches) {
        //$('.arrow').addClass('right');
        // $('.right').on('click', function() {
                                   
             if (isFirefox) {
                delta = evt.detail * -120;
            } else if (isIe) {
                delta = -evt.deltaY;
            }  else {
                delta = evt.wheelDelta;
            }
            if (ticking != true) {
                if (delta <= -scrollSensitivitySetting) {
                    ticking = true;
                    if (currentSlideNumber !== totalSlideNumber - 1) {
                        currentSlideNumber++;          
                             nextItemM();       
                        
                    }
                    slideDurationTimeout(slideDurationSetting);

                    
                }
                if (delta >= scrollSensitivitySetting) {
                    ticking = true;
                    if (currentSlideNumber !== 0) {
                        currentSlideNumber--;

                         previousItemM();
                    
                    }
                    slideDurationTimeout(slideDurationSetting);

                    
                }
                
                /*$(document).keydown(function(e){

                             switch (e.which){
                                case 37: 
                                    if (currentSlideNumber !== 0) {
                                            currentSlideNumber--;
                                            previousItemM();
                                        }
                                    
                                    slideDurationTimeout(slideDurationSetting);                        
                                    break;

                               case 39: 
                                   if (currentSlideNumber !== totalSlideNumber - 1) {
                                        currentSlideNumber++;
                                        nextItemM();
                                    }
                                    slideDurationTimeout(slideDurationSetting);  
                                    
                                break;
                            }
                        
                    });*/

            }                
        //});

       

    } else {
        
        if (isFirefox) {
            delta = evt.detail * -120;
        } else if (isIe) {
            delta = -evt.deltaY;
        }  else {
            delta = evt.wheelDelta;
        }
        if (ticking != true) {
            if (delta <= -scrollSensitivitySetting) {
                ticking = true;
                if (currentSlideNumber !== totalSlideNumber - 1) {
                    currentSlideNumber++;
                    
                        nextItem();
                    
                }
                slideDurationTimeout(slideDurationSetting);

                
            }
            if (delta >= scrollSensitivitySetting) {
                ticking = true;
                if (currentSlideNumber !== 0) {
                    currentSlideNumber--;
                
                    previousItem();
        
                }
                slideDurationTimeout(slideDurationSetting);

                
            }
            $(document).keydown(function(e){

                        switch (e.which){
               
                            case 40:    //up arrow key
                                
                                if (currentSlideNumber !== totalSlideNumber - 1) {
                                        currentSlideNumber++;
                                        nextItem();
                                    }
                                    slideDurationTimeout(slideDurationSetting);                   
                            break;

                            case 38:    //bottom arrow key
                                if (currentSlideNumber !== 0) {
                                        currentSlideNumber--;
                                        previousItem();
                                    }
                                    
                                    slideDurationTimeout(slideDurationSetting);
                            break;

                        }
                    
                });
        }

    } 
}

function slideDurationTimeout(slideDuration) {
    setTimeout(function () {
        ticking = false;
    }, slideDuration);
}
var mousewheelEvent = (isFirefox) ? 'DOMMouseScroll' : 'wheel';
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);
window.addEventListener('keydown', parallaxScroll(60), false);

function nextItem() {
    var $previousSlide = $('.block').eq(currentSlideNumber - 1);
    $previousSlide.css('transform' , 'translate3d(0,-180vh,0)').find('.sl-content').css('transform', 'translateY(40vh)');
    currentSlideTransition();
}
function previousItem() {
    var $previousSlide = $('.block').eq(currentSlideNumber + 1);
    $previousSlide.css( 'transform' ,'translate3d(0,30vh,0)').find('.sl-content').css( 'transform' , 'translateY(30vh)');
    currentSlideTransition();  

}
function currentSlideTransition() {
    $('.nav-main li.arrow-icon.left').removeClass('active');
    var $currentSlide = $('.block').eq(currentSlideNumber);
    $currentSlide.css('transform' , 'translate3d(0,-15vh,0)').find('.sl-content').css( 'transform', 'translateY(15vh)');
    $('.nav-main li.arrow-icon.left').eq(currentSlideNumber).addClass('active');
}

/* Mobile transition */

function nextItemM() {
    var $previousSlideX = $('.block').eq(currentSlideNumber - 1);
    //$previousSlideX.css('transform' , 'translate3d(-40vh,0,0)').find('.sl-content').css('transform', 'translateX(20vh)');
   // $previousSlideX.css('transform' , 'translate3d(-80vh,0,0)');

    currentSlideTransitionM();
}
function previousItemM() {
    var $previousSlideX = $('.block').eq(currentSlideNumber + 1);
    //$previousSlideX.css( 'transform' ,'translate3d(15vh,0,0)').find('.sl-content').css( 'transform' , 'translateX(15vh)');
    //$previousSlideX.css( 'transform' ,'translate3d(30vh,0,0)');

    currentSlideTransitionM();  

}
function currentSlideTransitionM() {
    var $currentSlideX = $('.block').eq(currentSlideNumber);
    //$currentSlideX.css('transform' , 'translate3d(0,0,0)').find('.sl-content').css( 'transform', 'translateX(0)');
    //$currentSlideX.css('transform' , 'translate3d(0,0,0)');

}
 


