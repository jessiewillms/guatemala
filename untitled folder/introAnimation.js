<script>
	$("#slideshow > div:gt(0)").hide();
		$('#slideshow > div:first')
		.delay(2400)
		.fadeOut(2400, function(){
			$(this)
			.next()
			.fadeIn(2400)
			.delay(2400)
			.fadeOut(2400, function(){
				$(this)
				.next()
				.fadeIn(2400)
				.delay(2400)
				.fadeOut(2400, function(){
					$(this)
					.next()
					.fadeIn(2400)
					.delay(2400)
					.fadeOut(2400, function(){
						$(this)
						.next()
						.fadeIn(2400);
					});
				});
			});				
		})
		.end()
		.appendTo('#slideshow');
</script>
