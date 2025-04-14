// Handling effect on navigation ul

$(document).ready(function () {
    let enterTimeout;

    $('.navigation nav ul').hover(
      function () {
        // Mouse enter (quick delay, smooth gradient in)
        clearTimeout(enterTimeout);
        enterTimeout = setTimeout(() => {
          $('.navigation').css({
            background: 'linear-gradient(135deg, red, blue, black)',
            backgroundSize: '200% 100%',
            backgroundPosition: 'right center',
            transition: 'background 0.8s linear, background-position 1.2s ease-in-out'
          });
        }, 400);
      },
      function () {
        // Mouse leave (reset EXACTLY to original)
        clearTimeout(enterTimeout);
        $('.navigation').css({
          background: 'linear-gradient(45deg, blue, red, black)',
          backgroundSize: '100% 100%', // reset to default size
          backgroundPosition: 'center', // original starting point
          transition: 'background 1s linear, background-position 0.8s ease-in-out'
        });
      }
    );
  });
  
  // Silicknav initialization
  
  $(document).ready(function () {
    $('#menu').slicknav({
      prependTo: '.navigation', // Where the menu will be added
      label: '', // Text for the hamburger button (leave empty for no text)
      duration: 200, // Animation duration
      easingOpen: 'swing', // Easing for opening animation
      easingClose: 'swing', // Easing for closing animation
      closeOnClick: true, // Close menu when a link is clicked
    });

    $('#menu .slicknav-only').hide();
  });



// scroll to top button

  $(document).ready(function () {
    const $backToTopBtn = $('#back-to-top-btn');
  
    // Show/hide the button on scroll
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 300) {
        $backToTopBtn.fadeIn().css('opacity', '0.7');
      } else {
        $backToTopBtn.css('opacity', '0');
        setTimeout(function () {
          if ($(window).scrollTop() <= 300) {
            $backToTopBtn.fadeOut();
          }
        }, 300);
      }
    });
  
    // Scroll to top on click
    $backToTopBtn.on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });
  });
  


