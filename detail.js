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

  function delayScrollAnime() {
	var time = 0.2;
	var value = time;
	$('.delayScroll').each(function () {
		var parent = this;				
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var childs = $(this).children();
		
		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
			$(childs).each(function () {
				
				if (!$(this).hasClass("fadeUp")) {
					
					$(parent).addClass("play");
					$(this).css("animation-delay", value + "s");
					$(this).addClass("fadeUp");
					value = value + time;
					
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeUp");
			value = time;
		}
	})
}

$(window).scroll(function (){
    delayScrollAnime();
});