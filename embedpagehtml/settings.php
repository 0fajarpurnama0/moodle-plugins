<?php
$settings->add(new admin_setting_heading(
 'headerconfig',
 get_string('headerconfig', 'block_embedpagehtml'),
 get_string('descconfig', 'block_embedpagehtml')
));

$settings->add(new admin_setting_configcheckbox(
 'embedpagehtml/Allow_HTML',
 get_string('labelallowhtml', 'block_embedpagehtml'),
 get_string('descallowhtml', 'block_embedpagehtml'),
 '0'
));

$allowHTML = get_config('embedpagehtml', 'Allow_HTML');
