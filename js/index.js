      const cursor = document.querySelector('.cursor');

      document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - scrollY) + "px; left: " + (e.pageX) + "px")
      })



      ScrollReveal().reveal('.ctwm', {  
         delay :25, 
         duration: 500, 
         distance: '50%',
         easing: 'ease-out',
         mobile: false,
        });
        
        ScrollReveal().reveal('.taskie', {  
          delay :50, 
          duration: 500, 
          distance: '50%',
          easing: 'ease-out',
          mobile: false,
         });
        
         ScrollReveal().reveal('.trailTalk', {  
          delay :75, 
          duration: 500, 
          distance: '50%',
          easing: 'ease-out',
          mobile: false,
         });
        
         ScrollReveal().reveal('.extra', {  
          delay :100, 
          duration: 500, 
          distance: '50%',
          easing: 'ease-out',
          mobile: false,
         });


         ScrollReveal({ mobile: false });

         if (ScrollReveal().noop) {
          console.log('ScrollReveal is non-operational!');
      }

      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log('is mobile')
        const tilt = $('.js-tilt').tilt()
        tilt.methods.destroy.call(tilt);
      } else {
        console.log('isnt mobile')
      }
      
