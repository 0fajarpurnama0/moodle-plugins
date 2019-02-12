define(['jquery', 'jqueryui'], function($, jqui) {
 
    return {
        init: function() {

$(document).ready(function() {
	$i = 0;
	$name = [];
	$email = [];
	$now = [new Date()];
	$duration = [0];
	$active = [];
	$x = [0];
	$y = [0];
	// get ip address
	$ip_address = [];
	$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
		$ip_address[$i] = data.ip;
	});
	$current_url = [];
	$samplingmode = [];
	$leftclick = [];
	$rightclick = [];
	$middleclick = [];
	$keyboardtype = [];
	var lastScrolledLeft = 0;
	var lastScrolledTop = 0;
	var mouseClick;
	var keyboardPress;
	$scrollleft = [0];
	$scrolltop = [0];
	$windowwidth = [];
	$windowheight = [];

	//animations
	$restrictedfocusviewer = [];
	$bubbleview = [];
	$fingertracinglearningsystem = [];
	$cursorreminder = [];
	$transparency = [];
	$magnifyer = [];
	$textcolor = [];
	$backgroundcolor = [];
	var sampling_timer;
	// Record Mouse Coordinate.
	function mousetrailrecord() {
		$(window).off(); // remove previous window.mousemove if exists
		// Respond to switch in config.js if checked then activate if unchecked the diactivate.
		if ($("#mouse-trail-recording").is(":checked")) {
			if ($('#sampling-rate-mode-checkbox').is(":checked")) {
				$(window).mousemove(function(event) {

					// Coordinates
					$x[$i] = event.pageX;
					$y[$i] = event.pageY;
					$(this).focus();
				}).mousedown(function(event) {
					switch (event.which) {
						case 1:
							$leftclick[$i] = true;
							mouseClick = 'left';
							break;
						case 2:
							$middleclick[$i] = true;
							mouseClick = 'middle';
							break;
						case 3:
							$rightclick[$i] = true;
							mouseClick = 'right';
							break;
						default:
							console.log('You have a strange Mouse!');
					}
				}).keypress(function(event) {
					if ($keyboardtype[$i] == null) {
						$keyboardtype[$i] = '';
					}
					$keyboardtype[$i] += event.key;
					keyboardPress = event.key;
				}).scroll(function(event) {
					if ($x[$i] == null) {
						$x[$i] = $x[$i - 1];
					}
					if ($y[$i] == null) {
						$y[$i] = $y[$i - 1];
					}
					if (lastScrolledLeft != $(document).scrollLeft()) {
						$x[$i] -= lastScrolledLeft;
						lastScrolledLeft = $(document).scrollLeft();
						$x[$i] += lastScrolledLeft;
					}
					if (lastScrolledTop != $(document).scrollTop()) {
						$y[$i] -= lastScrolledTop;
						lastScrolledTop = $(document).scrollTop();
						$y[$i] += lastScrolledTop;
					}
					$scrollleft[$i] = lastScrolledLeft;
					$scrolltop[$i] = lastScrolledTop;
					$(this).focus();
				});
				sampling_timer = setInterval(function() {
					if ($x[$i] == null) {
						$x[$i] = $x[$i - 1];
					}
					if ($y[$i] == null) {
						$y[$i] = $y[$i - 1];
					}
					if ($keyboardtype[$i] == null) {
						$keyboardtype[$i] = '';
					}
					if ($leftclick[$i] == null) {
						$leftclick[$i] = false;
					}
					if ($rightclick[$i] == null) {
						$rightclick[$i] = false;
					}
					if ($middleclick[$i] == null) {
						$middleclick[$i] = false;
					}
					if ($scrollleft[$i] == null) {
						$scrollleft[$i] = $scrollleft[$i - 1];
					}
					if ($scrolltop[$i] == null) {
						$scrolltop[$i] = $scrolltop[$i - 1];
					}
					// record name and email each time
					if ($('#name').val() === '') {
						$name[$i] = 'anonymous';
					} else {
						$name[$i] = $('#name').val();
					}
					if ($('#email').val() === '') {
						$email[$i] = 'anonymous';
					} else {
						$email[$i] = $('#email').val();
					}
					$active[$i] = $('#active').text();
					$current_url[$i] = window.location.href;
					$windowwidth[$i] = $(window).width();
					$windowheight[$i] = $(window).height();
					$samplingmode[$i] = $('#sampling-rate-mode-checkbox').prop("checked");
					// Animation
					$restrictedfocusviewer[$i] = $('#restricted-focus-viewer-imitation-checkbox').prop("checked");
					$bubbleview[$i] = $('#bubble-view-imitation-checkbox').prop("checked");
					$fingertracinglearningsystem[$i] = $('#finger-tracing-learning-system-imitation-checkbox').prop("checked");
					$cursorreminder[$i] = $('#cursor-reminder').val();
					$transparency[$i] = $('#transparency-control').val() / 100;
					$magnifyer[$i] = $('#fontsize-magnifyer').val();
					if ($('#color-checkbox').prop("checked")) {
						$textcolor[$i] = $('#color').val();
					}
					if ($('#background-color-checkbox').prop("checked")) {
						$backgroundcolor[$i] = $('#background-color').val();
					}

					// Demo
					demo();
					// get ip address again due to latency limitation the result can be undefined, so return to previous value.
					$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
						$ip_address[$i] = data.ip;
					});
					if ($ip_address[$i] == null) {
						$ip_address[$i] = $ip_address[$i - 1]
					}

					// Date
					$now[$i] = new Date();
					$duration[$i] = $('#sampling-rate').val();
					// Post data to database
					if ($("#data-to-database-on-fly-checkbox").is(":checked")) {
						$.post($('#database-server-script-on-fly').val(),{
							$name: $name[$i],
							$email: $email[$i],
							$now: $now[$i],
							$x: $x[$i],
							$y: $y[$i],
							$active: $active[$i],
							$duration: $duration[$i],
							$current_url: $current_url[$i],
							$ip_address: $ip_address[$i],
							$samplingmode: $samplingmode[$i],
							$leftclick: $leftclick[$i],
							$rightclick: $rightclick[$i],
							$middleclick: $middleclick[$i],
							$keyboardtype: $keyboardtype[$i],
							$scrollleft: $scrollleft[$i],
							$scrolltop: $scrolltop[$i],
							$windowwidth: $windowwidth[$i],
							$windowheight: $windowheight[$i],
							$restrictedfocusviewer: $restrictedfocusviewer[$i],
							$bubbleview: $bubbleview[$i],
							$fingertracinglearningsystem: $fingertracinglearningsystem[$i],
							$cursorreminder: $cursorreminder[$i],
							$transparency: $transparency[$i],
							$magnifyer: $magnifyer[$i],
							$textcolor: $textcolor[$i],
							$backgroundcolor: $backgroundcolor[$i]
						}, function(data,status){
							console.log(data);
						});
					}
					$i += 1;
					/*
					// Post data to file
					$.post("files/savedatafiledefaulteach.php",{
						$file: String($name[1]).replace(" ", ""),// + String($now[1]).replace(":", ".").replace(" ", "") + '.json',
						$name: $name[$i],
						$email: $email[$i],
						$now: $now[$i],
						$x: $x[$i],
						$y: $y[$i],
						$active: $active[$i],
						$duration: $duration[$i],
						$current_url: $current_url[$i],
						$ip_address: $ip_address[$i],
						$samplingmode: $samplingmode[$i],
						$leftclick: $leftclick[$i],
						$rightclick: $rightclick[$i],
						$middleclick: $middleclick[$i],
						$keyboardtype: $keyboardtype[$i],
						$scrollleft: $scrollleft[$i],
						$scrolltop: $scrolltop[$i],
						$windowwidth: $windowwidth[$i],
						$windowheight: $windowheight[$i],
						$restrictedfocusviewer: $restrictedfocusviewer[$i],
						$bubbleview: $bubbleview[$i],
						$fingertracinglearningsystem: $fingertracinglearningsystem[$i],
						$cursorreminder: $cursorreminder[$i],
						$transparency: $transparency[$i],
						$magnifyer: $magnifyer[$i],
						$textcolor: $textcolor[$i],
						$backgroundcolor: $backgroundcolor[$i]
					}, function(data,status){
						console.log(data);
					});
					*/
				}, 1000 / $('#sampling-rate').val());
			} else {
				clearTimeout(sampling_timer);
				$(window).mousemove(function(event) {
					$i += 1;
					$scrollleft[$i] = $scrollleft[$i - 1];
					$scrolltop[$i] = $scrolltop[$i - 1];
					$keyboardtype[$i] = '';
					$leftclick[$i] = false;
					$rightclick[$i] = false;
					$middleclick[$i] = false;
					// Coordinates
					$x[$i] = event.pageX;
					$y[$i] = event.pageY;
					$active[$i] = $('#active').text();
					// record name and email each time
					if ($('#name').val() === '') {
						$name[$i] = 'anonymous';
					} else {
						$name[$i] = $('#name').val();
					}
					if ($('#email').val() === '') {
						$email[$i] = 'anonymous';
					} else {
						$email[$i] = $('#email').val();
					}

					$windowwidth[$i] = $(window).width();
					$windowheight[$i] = $(window).height();
					$current_url[$i] = window.location.href;
					$samplingmode[$i] = $('#sampling-rate-mode-checkbox').prop("checked");
					// Animation
					$restrictedfocusviewer[$i] = $('#restricted-focus-viewer-imitation-checkbox').prop("checked");
					$bubbleview[$i] = $('#bubble-view-imitation-checkbox').prop("checked");
					$fingertracinglearningsystem[$i] = $('#finger-tracing-learning-system-imitation-checkbox').prop("checked");
					$cursorreminder[$i] = $('#cursor-reminder').val();
					$transparency[$i] = $('#transparency-control').val() / 100;
					$magnifyer[$i] = $('#fontsize-magnifyer').val();
					if ($('#color-checkbox').prop("checked")) {
						$textcolor[$i] = $('#color').val();
					}
					if ($('#background-color-checkbox').prop("checked")) {
						$backgroundcolor[$i] = $('#background-color').val();
					}
					// get ip address again due to latency limitation the result can be undefined, so return to previous value.
					$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
						$ip_address[$i] = data.ip;
					});
					if ($ip_address[$i] == null) {
						$ip_address[$i] = $ip_address[$i - 1]
					}
					// Demo
					demo();
					// Date and duration

					$now[$i] = new Date();
					$duration[$i] = ($now[$i] - $now[$i - 1]) / 1000;
					// post to database
					if ($("#data-to-database-on-fly-checkbox").is(":checked")) {
						$.post($('#database-server-script-on-fly').val(),{
							$name: $name[$i],
							$email: $email[$i],
							$now: $now[$i],
							$x: $x[$i],
							$y: $y[$i],
							$active: $active[$i],
							$duration: $duration[$i],
							$current_url: $current_url[$i],
							$ip_address: $ip_address[$i],
							$samplingmode: $samplingmode[$i],
							$leftclick: $leftclick[$i],
							$rightclick: $rightclick[$i],
							$middleclick: $middleclick[$i],
							$keyboardtype: $keyboardtype[$i],
							$scrollleft: $scrollleft[$i],
							$scrolltop: $scrolltop[$i],
							$windowwidth: $windowwidth[$i],
							$windowheight: $windowheight[$i],
							$restrictedfocusviewer: $restrictedfocusviewer[$i],
							$bubbleview: $bubbleview[$i],
							$fingertracinglearningsystem: $fingertracinglearningsystem[$i],
							$cursorreminder: $cursorreminder[$i],
							$transparency: $transparency[$i],
							$magnifyer: $magnifyer[$i],
							$textcolor: $textcolor[$i],
							$backgroundcolor: $backgroundcolor[$i]
						}, function(data,status){
							console.log(data);
						});
					}
					/*
					// post to file
					$.post("files/savedatafiledefaulteach.php",{
						$file: String($name[1]).replace(" ", ""),// + String($now[1]).replace(":", ".").replace(" ", "") + '.json',
						$name: $name[$i],
						$email: $email[$i],
						$now: $now[$i],
						$x: $x[$i],
						$y: $y[$i],
						$active: $active[$i],
						$duration: $duration[$i],
						$current_url: $current_url[$i],
						$ip_address: $ip_address[$i],
						$samplingmode: $samplingmode[$i],
						$leftclick: $leftclick[$i],
						$rightclick: $rightclick[$i],
						$middleclick: $middleclick[$i],
						$keyboardtype: $keyboardtype[$i],
						$scrollleft: $scrollleft[$i],
						$scrolltop: $scrolltop[$i],
						$windowwidth: $windowwidth[$i],
						$windowheight: $windowheight[$i],
						$restrictedfocusviewer: $restrictedfocusviewer[$i],
						$bubbleview: $bubbleview[$i],
						$fingertracinglearningsystem: $fingertracinglearningsystem[$i],
						$cursorreminder: $cursorreminder[$i],
						$transparency: $transparency[$i],
						$magnifyer: $magnifyer[$i],
						$textcolor: $textcolor[$i],
						$backgroundcolor: $backgroundcolor[$i]
					}, function(data,status){
						console.log(data);
					});
					*/
				}).mousedown(function(event) {
					switch (event.which) {
						case 1:
							$leftclick[$i] = true;
							mouseClick = 'left';
							break;
						case 2:
							$middleclick[$i] = true;
							mouseClick = 'middle';
							break;
						case 3:
							$rightclick[$i] = true;
							mouseClick = 'right';
							break;
						default:
							console.log('You have a strange Mouse!');
					}
					// Demo
					demo();
				}).keypress(function(event) {
					$keyboardtype[$i] += event.key;
					keyboardPress = event.key;
					//demo
					demo();
				}).scroll(function(event) {
					// coordinate
					$i += 1;
					$keyboardtype[$i] = '';
					$leftclick[$i] = false;
					$rightclick[$i] = false;
					$middleclick[$i] = false;

					// record name and email each time
					if ($('#name').val() === '') {
						$name[$i] = 'anonymous';
					} else {
						$name[$i] = $('#name').val();
					}
					if ($('#email').val() === '') {
						$email[$i] = 'anonymous';
					} else {
						$email[$i] = $('#email').val();
					}

					$windowwidth[$i] = $(window).width();
					$windowheight[$i] = $(window).height();
					$current_url[$i] = window.location.href;
					$samplingmode[$i] = $('#sampling-rate-mode-checkbox').prop("checked");
					// Animation
					$restrictedfocusviewer[$i] = $('#restricted-focus-viewer-imitation-checkbox').prop("checked");
					$bubbleview[$i] = $('#bubble-view-imitation-checkbox').prop("checked");
					$fingertracinglearningsystem[$i] = $('#finger-tracing-learning-system-imitation-checkbox').prop("checked");
					$cursorreminder[$i] = $('#cursor-reminder').val();
					$transparency[$i] = $('#transparency-control').val() / 100;
					$magnifyer[$i] = $('#fontsize-magnifyer').val();
					$x[$i] = $x[$i - 1];
					$y[$i] = $y[$i - 1];
					$now[$i] = new Date();
					$duration[$i - 1] = ($now[$i] - $now[$i - 1]) / 1000;
					if (lastScrolledLeft != $(document).scrollLeft()) {
						$x[$i] -= lastScrolledLeft;
						lastScrolledLeft = $(document).scrollLeft();
						$x[$i] += lastScrolledLeft;
					}
					if (lastScrolledTop != $(document).scrollTop()) {
						$y[$i] -= lastScrolledTop;
						lastScrolledTop = $(document).scrollTop();
						$y[$i] += lastScrolledTop;
					}
					$scrollleft[$i] = lastScrolledLeft;
					$scrolltop[$i] = lastScrolledTop;
					// Demo
					demo();
				});
			}
		} else {
			$(window).off();
		}
	}
	// Run the mousetrailrecord() function when the #mouse-trail-recording checkbox is checked.
	$("#mouse-trail-recording, #sampling-rate-mode-checkbox").click(function() {
		mousetrailrecord();
	}).ready(function() {
		mousetrailrecord();
	})
	$("#data-to-database-on-fly-checkbox").click(function() {
		mousetrailrecord();
	}).ready(function() {
		mousetrailrecord();
	})

	function demo() {
		// Demo
		if ($("#demo-checkbox").is(":checked")) {
			$("#demo").html("<strong>MouseX</strong>: " + $x[$i] + " ,<strong>MouseY</strong>: " + $y[$i] + " ,<strong>ScrollLeft</strong>: " + $scrollleft[$i] + " ,<strong>ScrollTop</strong>: " + $scrolltop[$i] + " ,<strong>KeyboardPress</strong>: " + keyboardPress + " ,<strong>MouseClick</strong>: " + mouseClick).css('display', 'block');
		} else {
			$("#demo").css('display', 'none');
		}
	}
	$('#demo-checkbox').click(function() {
		demo();
	}).ready(function() {
		demo();
	})
}).mouseenter(function() {
	$('#active').text('active');
}).mouseleave(function() {
	$('#active').text('inactive');
	if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
		$.post($('#file-server-script').val(),{
			$file: String($name[1]).replace(" ", "") + String($now[1]).replace(":", ".").replace(" ", "") + '.json',
			$name: $name,
			$email: $email,
			$now: $now,
			$x: $x,
			$y: $y,
			$active: $active,
			$duration: $duration,
			$current_url: $current_url,
			$ip_address: $ip_address,
			$samplingmode: $samplingmode,
			$leftclick: $leftclick,
			$rightclick: $rightclick,
			$middleclick: $middleclick,
			$keyboardtype: $keyboardtype,
			$scrollleft: $scrollleft,
			$scrolltop: $scrolltop,
			$windowwidth: $windowwidth,
			$windowheight: $windowheight,
			$restrictedfocusviewer: $restrictedfocusviewer,
			$bubbleview: $bubbleview,
			$fingertracinglearningsystem: $fingertracinglearningsystem,
			$cursorreminder: $cursorreminder,
			$transparency: $transparency,
			$magnifyer: $magnifyer,
			$textcolor: $textcolor,
			$backgroundcolor: $backgroundcolor
		}, function(data,status){
			console.log(data);
		});
	};
});

        }
    };
});
