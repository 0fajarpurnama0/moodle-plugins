<?php
 class block_simplehtml extends block_base {
  function init() {
   $this->title = get_string('simplehtml', 'block_simplehtml');
   $this->version = 2004111200;
  }
  // The PHP tag and the curly bracket for the class definition
  // will only be closed after ther is another function added in the next section.
 
  function get_content() {
   if ($this->content !== NULL) {
    return $this->content;
   }
  
   $this->content = new stdClass;
   $this->content->text = $this->config->text;
   $this->content->footer = '';
  
   return $this->content; 
  }

  function instance_allow_config() {
   return true;
  }
 } // Here's the closing curly bracket for the class definition
  // and here's the closing PHP tag from the section above.
?>
