<html>
<body>
<?php
class block_embedpagehtml extends block_base {
 public function init() {
  $this->title = get_string('embedpagehtml', 'block_embedpagehtml');
  }
 
 public function get_content() {
  if($this->content !== null) {
   return $this->content;
  }

  $this->content = new stdClass;
  $this->content->text =  'Show external site here';
  #$this->content->footer = 'Footer here...';
  
  /*if (! empty($this->config->text)) {
   $this->content->text = $this->config->text;
  }*/


 return $this->content;
 }
 
  public function specialization() {
  if (isset($this->config)) {
   if (empty($this->config->title)) {
    $this->title = get_string('defaulttitle', 'block_embedpagehtml');
   } else {
    $this->title = $this->config->title;
   }
  

   if (empty($this->config->text)) {
    $this->config->text = get_string('defaulttext', 'block_embedpagehtml');
   } else {
    $this->content->text = '<object data=' . $this->config->text . 'width="300" height="200"> <embed src=' . $this->config->text . ' width="300" height="200"> </embed> Error: Embedded data could not be displayed. </object>'; #The only modified line for embedding external website

   }
  }
 }

 public function instance_allow_multiple() {
  return true;
 }

 public function has_config() {
  return true;
 }

}
?>
</body>
</html>
