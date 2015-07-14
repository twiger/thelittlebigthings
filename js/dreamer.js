$(document)
  .ready(function() {
   
   
    //The following is duplicated Code
    
    $( "#career_menu .art_btn").on( "click", function(){
        $('.career_hint').hide();
        $(".career_slide").transition('hide','fade');
        $( "#art_slides" ).transition('fly left');
    });
    
    $( "#career_menu .worker_btn").on( "click", function(){
        $(".career_slide").transition('hide','fade');
        $('.career_hint').hide();
        $( "#worker_slides" ).transition('fly left');
    });

    $( "#career_menu .cook_btn").on( "click", function(){
        $(".career_slide").transition('hide','fade');
        $('.career_hint').hide();
        $( "#cook_slides" ).transition('fly left');
    });
    
  })
;