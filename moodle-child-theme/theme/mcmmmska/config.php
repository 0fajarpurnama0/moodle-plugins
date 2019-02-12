<?php

defined('MOODLE_INTERNAL')||die;
$THEME->doctype = 'html5';
$THEME->name = 'mcmmmska';
$THEME->sheets = array('mousetrail'); // Stylesheets for the theme_mcmmmska
$THEME->parents = ['boost']; // Parent theme_mcmmmska
$THEME->enable_dock = false;
$THEME->yuicssmodules = array();
$THEME->javascript = array('html2canvas'); // JS Files for the theme
$THEME->rendererfactory = 'theme_overridden_renderer_factory';
$THEME->csspostprocess = 'theme_remui_process_css';
$THEME->requiredblocks = '';
$THEME->addblockposition = BLOCK_ADDBLOCK_POSITION_FLATNAV;
$THEME->hidefromselector = false;
