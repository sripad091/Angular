
//Initialize and add the map

function initMap() {
    //Your Location

    const loc={ lat:17.385044,lng:78.486671 };
    //Centered map on location
    const map = new google.maps.Map(document.querySelector('.map') 
    , {
zoom: 14,
center: loc
    });
    //the marker,positined at location
    const marker = new google.maps.Marker({ position:loc,map:map });
}