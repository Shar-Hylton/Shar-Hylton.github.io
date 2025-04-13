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