$(window).bind("scroll", function() {
	scrollHeight = $(document).height();
	scrollPosition = $(window).height() + $(window).scrollTop();
	if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.01) {
		$(".chat-container").removeClass("chat-show");
	} else if ($(this).scrollTop() < 50){
        $(".chat-container").removeClass("chat-show");
    } else {
		$(".chat-container").addClass("chat-show")
	}
});
