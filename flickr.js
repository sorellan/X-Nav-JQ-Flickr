jQuery(document).ready(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=?";

  $("#button").click(function() {
    $("#images").empty();
    var etiquetas = [];
    etiquetas = $("#etiqueta").val().split(" ");

    for (var x=0; x<etiquetas.length; x++) {
      $.getJSON(flickerAPI, {
        tags: etiquetas[x],
      }).done(function(data) {
        $.each(data.items, function(i, item) {
          $("<img>").attr("src", item.media.m).appendTo("#images");
          if (i === 3) {
            return false;
          }
        });
      });
    } 
     
  });

});