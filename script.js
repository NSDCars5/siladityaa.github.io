$('a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	
	var href = $(this).attr('href');

	if(href.length == 1) return;
	
	$('body, html').animate({
		scrollTop: $(href).offset().top
	}, 500);
});

var player;

function doThis(e) {
	if(e == 0 || e.data == 0) {
		$('#yt').fadeOut(666, function() {
			$('#yt').remove();
			$('.card.big').removeClass('big');
		});
	}
}

function onYouTubePlayerAPIReady() {
	$('#videos .card a.button').on('click', function(e) {
		e.preventDefault();
		var $el = $(this).parent().parent();
		var vidUrl = $el.find('img').attr('src').split('/')[4];

		$el.addClass('big');

		var videoEl = $el.append('<iframe id="yt" src="https://www.youtube.com/embed/' + vidUrl + '?enablejsapi=1&rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
		
		player = new YT.Player('yt', {
			videoId: vidUrl,
			events: {
				'onStateChange': doThis
			}
		});
		
		$('body, html').animate({
			scrollTop: $('#video .cards-container').offset().top
		}, 50);
	});
}

$('.fab.close').on('click', function(e) {
	e.stopPropagation();
	
	doThis(0);
});

$('.hide_children').each(function() {
	$(this).children().each(function(i) {
		$(this).css({
			transform: 'translateY(-3rem)',
			opacity: 0,
			transitionDelay: (i*0.15) + 's'
		});
	});
});
$.fn.showChildren = function() {
	var element = this[0];

	if(element.getBoundingClientRect().top <= $(window).height() * 0.5 || element.getBoundingClientRect().bottom <= $(window).height()) {
		$(element).children().css({
			transform: 'none',
			opacity: 1
		});
		$(element).removeClass('hide_children');
	}

	return this;
};

$(window).on('scroll', function() {
	$('.hide_children').each(function() {
		$(this).showChildren();
	});
});
$(document).ready(function() {
$('#hero').mouseParallax({ moveFactor: 5 });
$('body').height(3000);
09
});

