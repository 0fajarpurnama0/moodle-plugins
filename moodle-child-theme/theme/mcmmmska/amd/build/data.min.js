define(['jquery', 'jqueryui'], function($, jqui) {
 
    return {
        init: function() {

// Generate and save the data.
$(document).ready(function(){
  $('#generate-table').click(function(){
		// mouse cursor coordinates
		$.each( $y, function( index, value ){
			$('#mousetrail').append('<tr> <td>' + (index + 1) + '</td> <td>' + $name[index] + '</td> <td>' + $email[index] + '</td> <td>'+ $now[index] + '</td> <td>' + $duration[index] + 'sec' + '</td> <td>' + $active[index] + '</td> <td>' + $x[index] + '</td> <td>' + $y[index] + '</td> <td>' + $scrollleft[index] + '</td> <td>' + $scrolltop[index] + '</td> <td>' + $current_url[index] + '</td> <td>' + $ip_address[index]  + '</td> <td>' + $windowwidth[index] + '</td> <td>' + $windowheight[index] + '</td> <td>' + $samplingmode[index] + '</td> <td>' + $leftclick[index] + '</td> <td>' + $middleclick[index] +  '</td> <td>' + $rightclick[index] + '</td> <td>' + $keyboardtype[index] + '</td> <td>' + $restrictedfocusviewer[index] +  '</td> <td>' + $bubbleview[index] +  '</td> <td>' + $fingertracinglearningsystem[index] +  '</td> <td>' + $cursorreminder[index] + '</td> <td>' + $transparency[index] +  '</td> <td>' +  '>=' + $magnifyer[index]  + 'px' +  '</td> <td>' +  $textcolor[index] +  '</td> <td>' + $backgroundcolor[index] + '</td> </tr>');
		});
	});
	// Download the data in json format.
	$('#download-data').click(function(){
		// Create data in json format
		$data = {
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
		};
		var a = document.createElement("a");			
		a.download = String($name[1]).replace(" ", "") + String($now[1]).replace(":", ".").replace(" ", "") + '.json';
		a.href = "data:text/plain;base64," + btoa(JSON.stringify($data));
		a.click();
	});
	$('#send-data-file').click(function(){
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
	});
	$('#send-data-database').click(function(){
		$.post($('#database-server-script').val(),{
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
	});
});

        }
    };
});
