$(document).ready(function(){

    var count = 0;
    $('.testpage_item1').on('click', '.testpage_yes', function() {
       count=count+1;
       alert(count);
      $('.testpage_item1')
        .fadeOut();
        $('.testpage_item2').delay(500).fadeIn();
    });
    $('.testpage_item1').on('click', '.testpage_no', function() {
     $('.testpage_item1')
       .fadeOut();
       $('.testpage_item2').delay(500).fadeIn();
   });
  
  
    $('.testpage_item2').on('click', '.testpage_yes', function() {
      count=count+1;
      alert(count);
     $('.testpage_item2')
       .fadeOut();
       $('.testpage_item3').delay(500).fadeIn();
      });
      $('.testpage_item2').on('click', '.testpage_no', function() {
          $('.testpage_item2')
            .fadeOut();
            $('.testpage_item3').delay(500).fadeIn();
        });
  
        $('.testpage_item3').on('click', '.testpage_yes', function() {
          count=count+1;
          alert(count);
         $('.testpage_item3')
           .fadeOut();
           $('.testpage_item4').delay(500).fadeIn();
          });
          $('.testpage_item3').on('click', '.testpage_no', function() {
              $('.testpage_item3')
                .fadeOut();
                $('.testpage_item4').delay(500).fadeIn();
            });
       
           $('.testpage_item4').on('click', '.testpage_yes', function() {
              count=count+1;
              alert(count);
             $('.testpage_item4')
               .fadeOut();
               $('.testpage_item5').delay(500).fadeIn();
              });
              $('.testpage_item4').on('click', '.testpage_no', function() {
                  $('.testpage_item4')
                    .fadeOut();
                    $('.testpage_item5').delay(500).fadeIn();
                });
  
                $('.testpage_item5').on('click', '.testpage_yes', function() {
                  count=count+1;
                  alert(count);
                 $('.testpage_item5')
                   .fadeOut();
                   $('.testpage_item6').delay(500).fadeIn();
                  });
                  $('.testpage_item5').on('click', '.testpage_no', function() {
                      $('.testpage_item5')
                        .fadeOut();
                        $('.testpage_item6').delay(500).fadeIn();
                    });
  
                    $('.testpage_item6').on('click', '.testpage_yes', function() {
                      count=count+1;
                      alert(count);
                     $('.testpage_item6')
                       .fadeOut();
                       $('.testpage_item7').delay(500).fadeIn();
                      });
                      $('.testpage_item6').on('click', '.testpage_no', function() {
                          $('.testpage_item6')
                            .fadeOut();
                            $('.testpage_item7').delay(500).fadeIn();
                        });
              
                        $('.testpage_item7').on('click', '.testpage_yes', function() {
                          count=count+1;
                          alert(count);
                         $('.testpage_item7')
                           .fadeOut();
                          $('.testpage_common_title').fadeOut();
                           if (count>=1 & count<3) {
                              $('.scene_item2').delay(500).fadeIn();
                           }
                           if (count>=3 & count<5) {
                            $('.scene_item3').delay(500).fadeIn();
                         }
                         if (count>=5 & count<7) {
                            $('.scene_item4').delay(500).fadeIn();
                         }
                         if (count===7) {
                            $('.scene_item5').delay(500).fadeIn();
                         }
                          });
                          $('.testpage_item7').on('click', '.testpage_no', function() {
                            $('.testpage_item7')
                              .fadeOut();
                              $('.testpage_common_title').fadeOut();
                              if (count===0) {
                                 $('.scene_item1').delay(500).fadeIn();
                              }
                              if (count>=1 & count<3) {
                                $('.scene_item2').delay(500).fadeIn();
                             }
                             if (count>=3 & count<5) {
                              $('.scene_item3').delay(500).fadeIn();
                           }
                           if (count>=5 & count<7) {
                              $('.scene_item4').delay(500).fadeIn();
                           }
                          });    

});