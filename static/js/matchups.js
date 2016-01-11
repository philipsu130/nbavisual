$(function() {
	// Set matchup date
	currDate = new Date();
	$('#matchup-date').text(convertDateToStr(currDate, false));
		
		
	// Function to format date to string for page
	function convertDateToStr(date, isUrl) {
		var dd = date.getDate();
		var mm = date.getMonth()+1; //January is 0!
		var yyyy = date.getFullYear();

		if(dd<10) {
			dd='0'+dd
		} 
		if(mm<10) {
			mm='0'+mm
		} 
		if (isUrl) {
			return yyyy+mm+dd;
		} else {
			return mm+'/'+dd+'/'+yyyy;	
		}
	}
	
	// Date changed: - 1
	$('.subtract-day').click(function() {
		currDate.setDate(currDate.getDate() - 1);
		$('#matchup-date').text(convertDateToStr(currDate, false));
	});
	
	// Date changed: + 1
	$('.add-day').click(function() {
		currDate.setDate(currDate.getDate() + 1);
		$('#matchup-date').text(convertDateToStr(currDate, false));
	});
	
	
	// Matchup clicked animations
    $('button#matchup-btn').click(function() {
		// Reset map
		map.bubbles([]);
		$('.matchup-list').empty();
		$.ajax({
			url: '/matchups',
			type: 'GET',
			data: {'date':convertDateToStr(currDate, true)},
			success: function(response) {
				var matchups = response;
				runMatchups(matchups);
			},
			error: function(error) {
				console.log(error);
			}
		});
	});
		
	// Run matchup animations for page
	function runMatchups(matchups) {
		// Populate map with relevant teams
		populatePlayingTeams(matchups);
		// Run all animations
		var i = 0;
		timeout(i, matchups);
	}

	// Retrieve relevant teams and only display these teams
	function populatePlayingTeams(matchups) {
		currArenas = [];
		// First only show teams playing
		for (i = 0; i < Object.keys(matchups).length; i++) {
			homeTeam = Object.keys(matchups)[i];
			awayTeam = matchups[homeTeam];
			// Add error checking
			var homeArena = arenas.filter(function(data) {
				return data.name == homeTeam;
			})[0];
			var awayArena = arenas.filter(function(data) {
				return data.name == awayTeam;
			})[0];
			currArenas.push(homeArena);
			currArenas.push(awayArena);
		}
		map.bubbles(currArenas);
	};
		
	// Function to schedule animateMatchup one after the other
	// recursively calls itself to ensure animations occur one after the other
	function timeout(i, matchups) {
		setTimeout(function() {
			if (i < Object.keys(matchups).length) {
				var homeTeam = Object.keys(matchups)[i];
				var awayTeam = matchups[homeTeam];
				// Display matchup
				var listItem = "<li>" + awayTeam + " @ " + homeTeam + "</li>"
				$('.matchup-list').append(listItem);
				animateMatchup(homeTeam, awayTeam);
				timeout(i + 1, matchups);	
			}

		}, 1500);
	};

	// Function to perform animation for 2 teams with matchup
	function animateMatchup(homeTeam, awayTeam) {
		// Obtain cx and cy for home
		var home_cx = d3.selectAll('circle[data-info]').filter(function() {
			return $(this).data('info').name == homeTeam;
		}).attr('cx');
		var home_cy = d3.selectAll('circle[data-info]').filter(function() {
			return $(this).data('info').name == homeTeam;
		}).attr('cy')

		// Obtain cx and cy for away
		var away_cx = d3.selectAll('circle[data-info]').filter(function() {
			return $(this).data('info').name == awayTeam;
		}).attr('cx');
		var away_cy = d3.selectAll('circle[data-info]').filter(function() {
			return $(this).data('info').name == awayTeam;
		}).attr('cy');
		// Animate away team -> home
		d3.selectAll($('circle[data-info]').filter(function() {
			return $(this).data('info').name == awayTeam;
		})).transition().attr('cx',home_cx - 25).attr('cy',home_cy).duration(1500);
	};
});