// $Id$

if (Drupal.jsEnabled) {
  $(document).ready(function() {
    $('div.location_quickgeocode').each(function() {
      $(this).html('[ Quick Geocode ]');
      var fieldset = $(this).parents('fieldset.location');

      // Get the map in a totally roundabout way.
      var obj = false;
      var mapid = $(fieldset).find('div.gmap-map')[0].id;
      setTimeout(function() {
        obj = Drupal.gmap.getMap(mapid);
      }, 0);

      $(this).click(function() {
        if (obj) {
          var location = {}
          $(fieldset).find('input,select').each(function() {
            if (this.name) {
              location[this.name.match(/([^\[]*)\]$/).pop()] = $(this).val();
            }
          });
          $.ajax({
            url: '/location_quickgeocode',
            dataType: 'json',
            data: location,
            success: function(data) {
              if (data && data.lat && data.lon) {
                obj.locpick_coord = new GLatLng(data.lat, data.lon);
                obj.change("locpickchange", -1);
              }
              else {
                alert ('Sorry, not found.');
              }
            }
          });
        }
      });
    });
  });
}
