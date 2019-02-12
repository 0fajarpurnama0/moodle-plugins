define(['jquery', 'jqueryui'], function($, jqui) {
 
    return {
        init: function() {

// This is where the checkbox html are created to activate or diactivate.
$(document).ready(function() {
	$('body').prepend(' <div id="dialog" title="Configuration"> <p>Hello, please support us in our user interraction project by allowing us to record your interractions:</p> </div> <br />');
	$('body').prepend(' <button id="opener">Open Logging Settings</button><br />');
	$('body').prepend(' <button id="closer">Close Logging Settings</button>');
	$('body').prepend('<span class="sticky" id="demo"></span>');
	$("#opener").on("click", function() {
		$("#dialog").dialog("open");
	});
	$("#closer").on("click", function() {
		$("#dialog").dialog("close");
	});
	$('#dialog').prepend('<span id="active">active</span>');
	$('#dialog').append('<br /> <br /> What is your name? (leave blank if you want to be anonymous) <input type="text" id="name" /> <br />');
	$('#dialog').append('<br /> <br /> Do you have an email address? (leave blank if you want to be anonymous) <input type="text" id="email" /> <br />');
	$(function() {
		$('#dialog').dialog({
			autoOpen: false,
			width: $(window).width() * 0.8,
			height: $(window).height() * 0.8
		});
	});
	$('#dialog').append('<br /> <br /> <input type="checkbox" id="restricted-focus-viewer-imitation-checkbox"> Restricted Focus Viewer Imitation </input> <br />');
	$('#dialog').append('<br /> <br /> <input type="checkbox" id="bubble-view-imitation-checkbox">Bubble View Imitation </input> <br />');
	$('#dialog').append('<br /> <br /> <input type="checkbox" id="finger-tracing-learning-system-imitation-checkbox">Finger Tracing Learning System Imitation </input> <br />');
	$('#dialog').append('<br /> Transparency Per Element Control (viewser imitation) <br /> <input type="range" min="0" max="100" value="100" id="transparency-control"> <p id="transparency-control-text"> </p></input> <br />');
	$('#dialog').append(' <br /> Fontsize Magnifyer Per Element <br /> <input type="range" min="1" max="100" value="1" id="fontsize-magnifyer"> <p id="fontsize-magnifyer-text"> </p> </input> <br />');
	$('#dialog').append('<input type="checkbox" id="background-color-checkbox"> Background Color </input>');
	$('#dialog').append('<input type="color" id="background-color" value="#9effb1"> <br />');
	$('#dialog').append('<input type="checkbox" id="color-checkbox"> Text Color </input>');
	$('#dialog').append('<input type="color" id="color" value="#0000ff"> <br />');
	//$('#dialog').append('<input type="range" min="0" max="100" value="0" id="background-color-opacity"> <p id="background-color-opacity-text"> </p></input> <br />');
	$('#dialog').append('Cursor Reminder  <input type="range" min="0" max="10" value="0" id="cursor-reminder"> <p id="cursor-reminder-text"> </p></input> <br />');
	$('#dialog').append('<input type="checkbox" id="mouse-trail-recording" checked="checked"> Mouse Trail Recording</input> <br />');
	$('#dialog').append('<input type="checkbox" id="sampling-rate-mode-checkbox" checked="checked"> Sampling Rate Mode</input> <br />');
	$('#dialog').append('<input type="range" min="1" max="90" value="1" id="sampling-rate"> <p id="sampling-rate-text"> </p></input> <br />');
	$('#dialog').append('<input type="checkbox" id="demo-checkbox"> Demo Logging</input> <br />');
	$('#dialog').append('<button id="Capture">Capture</button>');
	$('#dialog').append('<button id="generate-table">Generate Table</button>');
	$('#dialog').append('<button id="download-data">Download Data</button>');
	$('#dialog').append('<br /><button id="send-data-file">Send Data File</button><input type="text" id="file-server-script" value="files/savedatafiledefault.php" />');
	$('#dialog').append('<br /> <input type="checkbox" id="data-to-file-on-fly-checkbox"> Data to file on fly</input><input type="text" id="file-server-script-on-fly" value="files/savedatafiledefault.php" />');
	$('#dialog').append('<br /><button id="send-data-database">Send Data Database</button><input type="text" id="database-server-script" value="files/savedatabasedefault.php" />');
	$('#dialog').append('<br /> <input type="checkbox" id="data-to-database-on-fly-checkbox"> Data to database on fly</input><input type="text" id="database-server-script-on-fly" value="files/savedatabasedefaulteach.php" />');
	$('#dialog').append('<div id="table"></div>');
	$('#table').html('<p>Mouse is at coordinates: <span> <table id="mousetrail"> <tr> <th>No</th> <th>Name</th> <th>Email</th> <th>Date</th> <th>Duration</th> <th>Tab</th> <th>X</th> <th>Y</th> <th>ScrollX</th> <th>scrollY</th> <th>Current Url</th> <th>IP Address</th> <th>Window Width</th> <th>Window Height</th> <th>Sampling Rate Mode</th> <th>Left Click</th> <th>Middle Click</th> <th>Right Click</th> <th>Keyboard Type</th> <th>Restricted Focus Viewer Imitation</th> <th>Bubbleview Imitation</th> <th>Finger Tracing Learning System Imitation</th> <th>Cursor Reminder</th> <th>Transparency</th> <th>Magnifyer</th> <th>Text Color</th> <th>Background Color</th> </tr></table></span>.</p>');
	function sampling_rate_mode() {
		if ($('#sampling-rate-mode-checkbox').is(":checked")) {
			$('#sampling-rate').change(function() {
				$('#sampling-rate-text').text($('#sampling-rate').val() + ' Hz');
			});
		}
	}
	$('#sampling-rate-mode-checkbox').ready(function() {
		sampling_rate_mode();
	}).click(function() {
		sampling_rate_mode();
	});
});

        }
    };
});
