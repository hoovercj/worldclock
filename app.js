$(document).ready(function() {
	function displayTime() {
		displayTimerHelper(1, 'clock1', 'Spain');
		displayTimerHelper(-6, 'clock2', 'Iowa');
	}

	function displayTimerHelper(offset, div, location) {
		var currentTime = new Date();
		offset = offset + currentToGMT();
		var meridian = 'AM';
		var hours = (currentTime.getHours() + offset) % 24;
		if (hours > 12) {
			hours = hours - 12;
			meridian = 'PM';
		}
		if (hours < 10) {
			hours = '0' + hours;
		}		
		var minutes = currentTime.getMinutes();
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		var seconds = currentTime.getSeconds();
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		var clockTitleDiv = document.getElementById(div+'-title');		
		clockTitleDiv.innerText = location;
		var clockTimeDiv = document.getElementById(div+'-time');
		clockTimeDiv.innerText = hours + ':' + minutes + ':' + seconds + ' ' + meridian;

	}

	function currentToGMT() {
		var currentOffsetFromGMT = new Date().getTimezoneOffset();
		return currentOffsetFromGMT / 60; // in hours
		//var minutesOffset = currentOffsetFromGMT % 60;
		// TODO: return an object with the minutes and hours offset
	}

	setInterval(displayTime, 1000);
});