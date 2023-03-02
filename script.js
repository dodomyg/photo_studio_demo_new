$(".abtme").css('font-size','2.8rem')


$(document).ready(function(){

        $(window).scroll(function(){
            if($(this).scrollBottom () > 100){
                $(".header").addClass("fixed")
            }
            else{
                $(".header").removeClass("fixed")
            }
        })







    $("a").on('click', function(event) {

        
        if (this.hash !== "") {
          
          event.preventDefault();
    
          
          var hash = this.hash;
    
          
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
           
            window.location.hash = hash;
          });
        }
      });
    
})