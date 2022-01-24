      const cursor = document.querySelector('.cursor');

      document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - scrollY) + "px; left: " + (e.pageX) + "px")
      })



      ScrollReveal().reveal('.ctwm', {  
         delay :25, 
         duration: 500, 
         reset: true,
         distance: '50%',
         easing: 'ease-out'
        });
        
        ScrollReveal().reveal('.taskie', {  
          delay :50, 
          duration: 500, 
          reset: true,
          distance: '50%',
          easing: 'ease-out'
         });
        
         ScrollReveal().reveal('.aiatsis', {  
          delay :75, 
          duration: 500, 
          reset: true,
          distance: '50%',
          easing: 'ease-out'
         });
        
         ScrollReveal().reveal('.tbu', {  
          delay :100, 
          duration: 500, 
          reset: true,
          distance: '50%',
          easing: 'ease-out'
         });