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
  $('#gmap-debug-reboot:not(.gmap-debug-processed)', context).addClass('gmap-debug-processed').each(function () {
    $(this).click(function(e) {
      e.preventDefault();
      var reply = prompt('Map ID to reboot?');
      if (Drupal.gmap && Drupal.gmap.getMap(reply)) {
        Drupal.gmap.unloadMap(reply);
        var ctr = 0;
        while ($('#gmap-'+reply+'-gmap'+ctr)[0]) {
          $('#gmap-'+reply+'-gmap'+ctr).removeClass('gmap-processed').empty().append('REBOOTING...');
          ctr = ctr + 1;
        }
        Drupal.attachBehaviors(document);
      }
      else {
        alert(Drupal.t('Unable to locate requested map.'));
      }
      return false;
    });
  });
};
