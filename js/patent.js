$(function(){
  $(".inside-menu").prepend("<img src=\"../../img/service/plus.png\">");
  $(".outside-menu").prepend("<img src=\"../../img/service/plus.png\">");
  $(".other-menu").prepend("<img src=\"../../img/service/plus.png\">");

  $(".inside-menu").on('click', function(){
    if($('.inside').hasClass('hidden')){
      $('.inside').removeClass('hidden');
      $(".inside-menu img").attr('src','../../img/service/reduce.png');
    }else{
      $('.inside').addClass('hidden');
      $(".inside-menu img").attr('src','../../img/service/plus.png');
    }
  });

  $(".outside-menu").on('click', function(){
    if($('.outside').hasClass('hidden')){
      $('.outside').removeClass('hidden');
      $(".outside-menu img").attr('src','../../img/service/reduce.png');
    }else{
      $('.outside').addClass('hidden');
      $(".outside-menu img").attr('src','../../img/service/plus.png');
    }
  });

  $(".other-menu").on('click', function(){
    if($('.other').hasClass('hidden')){
      $('.other').removeClass('hidden');
      $(".other-menu img").attr('src','../../img/service/reduce.png');
    }else{
      $('.other').addClass('hidden');
      $(".other-menu img").attr('src','../../img/service/plus.png');
    }
  });

  $(".menu li").each(function(){
    if($(this).hasClass('active-li')){
      var currentActive = $(this).attr("class").split(" ")[0];
      console.info('currentActive: '+currentActive);
      $("."+currentActive+"-menu img").attr('src', '../../img/service/reduce.png');
      $('.'+currentActive).removeClass('hidden');
    }
  });

});