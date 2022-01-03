$(document).ready(function(){
//scroll page up
$(window).scroll(function(){
  if ($(this).scrollTop()>1000) {
    $('.scrollup').fadeIn();
  }else{
    $('.scrollup').fadeOut(); 
  }
});

$('.about_desctop_wrapperBtn').on('click', function(){
    $('.overlay, #popup_diplom').fadeIn();
});
$('.close').on('click', function() {
    $('.overlay, #popup_diplom').fadeOut('slow');
});


$('#stateBtn').on('click', function(){
    $('.overlay, #liststate').fadeIn();
});
$('.liststate_closebtn').on('click', function() {
    $('.overlay, #liststate').fadeOut('slow');
});


$('.preview_wrapperBtn').on('click', function(){
  $('#order').fadeIn();
});
$('.order_closeBtn').on('click', function() {
  $('#order').fadeOut('slow');
});




  

$(".mail_name_form").focusin(function() {
    $(this).css("background-color", "#AFC1E2");
    $('.mail_name_shadow').fadeOut('slow');
   
  });

  $(".mail_name_form").focusout(function() {
    $(this).css("background-color", "rgba(175, 193, 226, 0");
    $('.mail_name_shadow').fadeIn('slow');
  });

  $(".mail_mail_form").focusin(function() {
    $(this).css("background-color", "#AFC1E2");
    $('.mail_mail_shadow').fadeOut('slow');
   
  });

  $(".mail_mail_form").focusout(function() {
    $(this).css("background-color", "rgba(175, 193, 226, 0");
    $('.mail_mail_shadow').fadeIn('slow');
  });

  $(".mail_text_form").focusin(function() {
    $(this).css("background-color", "#AFC1E2");
    $('.mail_text_shadow').fadeOut('slow');
   
  });

  $(".mail_text_form").focusout(function() {
    $(this).css("background-color", "rgba(175, 193, 226, 0");
    $('.mail_text_shadow').fadeIn('slow');
  });

  new WOW().init();
        
});