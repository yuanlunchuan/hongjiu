$(function(){
  $(".inside-menu").on('click', function(){
    if($('.inside').hasClass('hidden')){
      $('.inside').removeClass('hidden');
    }else{
      $('.inside').addClass('hidden');
    }
  });

  $(".outside-menu").on('click', function(){
    if($('.outside').hasClass('hidden')){
      $('.outside').removeClass('hidden');
    }else{
      $('.outside').addClass('hidden');
    }
  });

  $(".other-menu").on('click', function(){
    if($('.other').hasClass('hidden')){
      $('.other').removeClass('hidden');
    }else{
      $('.other').addClass('hidden');
    }
  });

  $(".menu li").each(function(){
    if($(this).hasClass('active-li')){
      var currentActive = $(this).attr("class").split(" ")[0];
      console.info('currentActive: '+currentActive);
      $('.'+currentActive).removeClass('hidden');
    }
  });

});