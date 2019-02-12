<?php

class theme_themename_core_renderer extends \theme_boost\output\core_renderer {
    public function full_header() {
        global $PAGE, $USER;

	$PAGE->requires->js_call_amd('theme_mcmmmska/config', 'init', array($USER->firstname, $USER->lastname, $USER->email));
	$PAGE->requires->js_call_amd('theme_mcmmmska/animation', 'init');
	$PAGE->requires->js_call_amd('theme_mcmmmska/mousetrail', 'init');
	$PAGE->requires->js_call_amd('theme_mcmmmska/data', 'init');
	$PAGE->requires->js_call_amd('theme_mcmmmska/screenshot', 'init');

        $header = new stdClass();
        $header->settingsmenu = $this->context_header_settings_menu();
        $header->contextheader = $this->context_header();
        $header->hasnavbar = empty($PAGE->layout_options['nonavbar']);
        $header->navbar = $this->navbar();
        $header->pageheadingbutton = $this->page_heading_button();
        $header->courseheader = $this->course_header();
        return $this->render_from_template('theme_boost/header', $header);
    }
}
