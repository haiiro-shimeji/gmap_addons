// $Id$

if (Drupal.jsEnabled) {
  $(document).ready(function() {

    $('#gmap-debug-forcesizecheck').click(function(e) {
      e.preventDefault();
      if (Drupal.gmap) {
        Drupal.gmap.globalChange('widthchange');
        alert('Dimensions recalculated.');
      }
      else {
        alert('No maps loaded.');
      }
      return false;
    });
  });
}
