window.onload = function(){
  function mapa(lat,long) {
        L.mapquest.key = 'h7NTFSMKnIeIpfabHHixQCCSkp4G1brF';

        var map = L.mapquest.map('map', {
          center: [37.7749, -122.4194],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
      }
  document.querySelector("#butau").addEventListener("click", function(){
    var onSuccess = function(position) {
        mapa(position.coords.latitude, position.coords.longitude);
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });
}