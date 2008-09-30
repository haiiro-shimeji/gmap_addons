// $Id$

Drupal.behaviors.gmap_debug = function (context) {
  $('#gmap-debug-forcesizecheck:not(.gmap-debug-processed)', context).addClass('gmap-debug-processed').each(function () {
    $(this).click(function(e) {
      e.preventDefault();
      if (Drupal.gmap) {
        Drupal.gmap.globalChange('widthchange');
        alert(Drupal.t('Dimensions recalculated.'));
      }
      else {
        alert(Drupal.t('No maps loaded.'));
      }
      return false;
    });
  });
};
