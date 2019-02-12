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

function xmldb_block_mcmmmska_upgrade($oldversion) {
    global $CFG, $DB;
 
    $result = TRUE;
    $dbman = $DB->get_manager();
// Insert PHP code from XMLDB Editor here
    if ($oldversion < 2019021200) {

        // Define table block_mcmmmska to be created.
        $table = new xmldb_table('block_mcmmmska');

        // Adding fields to table block_mcmmmska.
        $table->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
        $table->add_field('name', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('email', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('date', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('x', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('y', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('tab', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('duration', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('current_url', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('ip_address', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('samplingmode', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('leftclick', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('rightclick', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('middleclick', XMLDB_TYPE_TEXT, null, null, null, null, null);
		$table->add_field('touch', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('keyboardtype', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('scrollx', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('scrolly', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('windowwidth', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('windowheight', XMLDB_TYPE_CHAR, '255', null, null, null, null);
		$table->add_field('screenwidth', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('screenheight', XMLDB_TYPE_CHAR, '255', null, null, null, null);
		$table->add_field('zoom', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('restrictedfocusviewer', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('bubbleview', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('fingertracinglearningsystem', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('cursorreminder', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('transparency', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('magnifier', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('textcolor', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('backgroundcolor', XMLDB_TYPE_CHAR, '255', null, null, null, null);

        // Adding keys to table block_mcmmmska.
        $table->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));

        // Conditionally launch create table for block_mcmmmska.
        if (!$dbman->table_exists($table)) {
            $dbman->create_table($table);
        }

        // mcmmmska savepoint reached.
        upgrade_plugin_savepoint(true, 2019021200, 'block', 'mcmmmska');
    }
 

    return $result;
}
