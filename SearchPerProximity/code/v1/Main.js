var myLatLng = { lat: -19.858809, lng: -43.9203603 };
var mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};


var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

var directionsService = new google.maps.DirectionsService();

var directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map);


function calcRoute() {
    
    var request = {
        origin: document.getElementById("a partir de").value,
        destination: document.getElementById("para").value,
        travelMode: google.maps.TravelMode.DRIVING, 
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

          
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("a partir de").value + ".<br />To: " + document.getElementById("para").value + ".<br /> Distância de condução <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Duração <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>";

            
            directionsDisplay.setDirections(result);
        } else {
            directionsDisplay.setDirections({ routes: [] });
        
            map.setCenter(myLatLng);

            
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
        }
    });

}




var options = {
    types: ['(cities)']
}
