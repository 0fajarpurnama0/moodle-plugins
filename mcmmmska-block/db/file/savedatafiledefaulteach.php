<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Moodle's block_mcmmmska is a block plugin which adds trackings of mouse clicks, 
 * mouse movements, mouse scrolls, and keyboards utilizing jquery on assigned page.
 * This theme also includes DOM animations with the purpose of drawing the eyes
 * to the mouse cursor in order to generate a mouse tracking result closer to eye
 * tracking result.
 *
 * Published source codes will be available soon.
 *
 * @package   block_mcmmmska
 * @copyright 2019 Fajar Purnama, Moodle, moodle.org,
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
	$data = array(
		'$name' => $_POST['$name'],
		'$email' => $_POST['$email'],
		'$date' => $_POST['$date'],
		'$x' => $_POST['$x'],
		'$y' => $_POST['$y'],
		'$active' => $_POST['$active'],
		'$duration' => $_POST['$duration'],
		'$current_url' => $_POST['$current_url'],
		'$ip_address' => $_POST['$ip_address'],
		'$samplingmode' => $_POST['$samplingmode'],
		'$leftclick' => $_POST['$leftclick'],
		'$rightclick' => $_POST['$rightclick'],
		'$middleclick' => $_POST['$middleclick'],
		'$keyboardtype' => $_POST['$keyboardtype'],
		'$scrollleft' => $_POST['$scrollleft'],
		'$scrolltop' => $_POST['$scrolltop'],
		'$windowwidth' => $_POST['$windowwidth'],
		'$windowheight' => $_POST['$windowheight'],
		'$restrictedfocusviewer' => $_POST['$restrictedfocusviewer'],
		'$bubbleview' => $_POST['$bubbleview'],
		'$fingertracinglearningsystem' => $_POST['$fingertracinglearningsystem'],
		'$cursorreminder' => $_POST['$cursorreminder'],
		'$transparency' => $_POST['$transparency'],
		'$magnifier' => $_POST['$magnifier'],
		'$textcolor' => $_POST['$textcolor'],
		'$backgroundcolor' => $_POST['$backgroundcolor']
	);
	$file = $_POST['$file'];
	file_put_contents($file, json_encode($data), FILE_APPEND | LOCK_EX);
