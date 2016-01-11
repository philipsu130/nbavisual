//jQuery for page scrolling feature
$(function() {
    $('.dropdown li').click(function(event) {
		var team = $(event.target).text();
		if (team == 'All') {
			map.bubbles(arenas);
		} else {
			d3.selectAll(
				$('circle[data-info]').filter(function() {
					return $(this).data('info').name != team;
				})
			)
				.transition().attr('r','0').duration(1000);
			d3.selectAll(
				$('circle[data-info]').filter(function() {
					return $(this).data('info').name == team;
				})
			)
				.transition().attr('r','25').duration(1000);
		}
		
	});;
});