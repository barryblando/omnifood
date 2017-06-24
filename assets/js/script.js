$(document).ready(function () {

  /* For the Stick Navigation */
  //direction detects if user scroll down or up
  $('.js--section-features').waypoint(function(direction) {
    if ( direction === "down" ) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, { offset: '70px' }); //offset shows sticky nav in between of header bottom and section feature top

  /* Scroll on Buttons */
  //when click trigger animation scroll on the top of section plans in a speed of 1s
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });

  $('.js--scroll-to-features').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });

  /* Navigation scroll */

  $(function () {
    // Remove links that don't actually link to anything
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
      // On-page links
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        // Figure out element to scroll to
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
        if (target.length) {
              // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function () {
              // Callback after animation
              // Must change focus!
            let $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements cannot be focused
              $target.focus(); // Set focus again
            }
          });
        } // end if target length
      } // end 1st if statement
    }); // end click function
  }); // end function

  /* Animation on Scroll using Animate CSS */
  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, { offset: '50%' }); // 50% is Half of the Page

  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {offset: '50%'}); // 50% is Half of the Page


  $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {offset: '50%'}); // 50% is Half of the Page


  $('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {offset: '50%'}); // 50% is Half of the Page

  /* Mobile Navigation */
  $('.js--nav-icon').click(function () {
    let nav = $('.js--main-nav');
    let icon = $('.js--nav-icon i');

    nav.slideToggle(250);

    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }

  });

}); // end document ready