
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up , .scroll_left , .scroll_right');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 150;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });

  $(function(){

    $(window).on('load',function(){

      $('.loader').delay(600).fadeOut(600);

      $('.loader-bg').delay(900).fadeOut(800);
  });
  
    setTimeout(function(){
      $('.loader-bg').fadeOut(600);
    },5000);
  });


function SmoothTextAnime() {
	$('.smoothTextTrigger').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('smoothTextAppear');
		}else{
		$(this).removeClass('smoothTextAppear');
		}
		});	
}


$(window).scroll(function () {
	SmoothTextAnime();
});
$(window).on('load', function () {
	SmoothTextAnime();
});