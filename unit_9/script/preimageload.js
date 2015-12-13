/*! PreImageLoad | https://github.com/MaTyRocK/PreImageLoad */
(function($){
	$.PreImageLoad = function(options){
		var defaults = {
			offset: -50,
			allowOverride: true
		};
		options = $.extend({}, defaults, options);
		$('img').each(function(){
			if($(this).data('pil-src')){
				var offset = (options.allowOverride && $(this).data('pil-offset')) ? parseInt($(this).data('pil-offset')) : options.offset,
					now = $(window).height() + $(window).scrollTop() + offset;
				if(now >= $(this).offset().top){
					$(this).attr('src', $(this).data('pil-src'));
				}
			}
		});
	};
})(jQuery);
