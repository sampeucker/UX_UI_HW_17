      const cursor = document.querySelector('.cursor');

      document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - scrollY - 10) + "px; left: " + (e.pageX - 10) + "px")
      })



      ScrollReveal().reveal('.ctwm', {  
         delay :50, 
         duration: 1000, 
         reset: true
        });
      ScrollReveal().reveal('.taskie', { 
        delay :100, 
        duration: 1000,
        reset: true
      });
      ScrollReveal().reveal('.aiatsis', { 
        delay :150, 
        duration: 1000,
        reset: true
      });
      ScrollReveal().reveal('.tbu', { 
        delay :200, 
        duration: 1000,
        reset: true
      });
      ScrollReveal().reveal('.future', { 
        delay :250, 
        duration: 1000,
        reset: true
      });



      ScrollReveal().reveal('.skillCard');


      var slideUp = {
        distance: '50%',
        origin: 'bottom',
        opacity: null
    };
    
    ScrollReveal().reveal('.slide-up', slideUp);
      
