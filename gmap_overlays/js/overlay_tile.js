/**
 *  Handle tile overlays in google format.
 */
/* $Id$ */

Drupal.gmap.addHandler('gmap', function(elem) {
  var obj = this;
  obj.bind('init', function() {
    $.each(obj.vars.overlay, function(i,d) {
      switch (d.type) {
        case 'tile':
          var minzoom = null;
          var maxzoom = null;
          if (d.minZoom) { minzoom = d.minZoom; } // @@@ Doesn't work.
          if (d.maxZoom) { maxzoom = d.maxZoom; } // @@@ Doesn't work.
          var tilelayer =  new GTileLayer(null, minzoom, maxzoom, d.options);

          var myTileLayer = new GTileLayerOverlay(tilelayer);
          obj.map.addOverlay(myTileLayer);
          break;
      }
    });
  });
});
