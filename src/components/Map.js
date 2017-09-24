import React from 'react';
import Header from './Header'
import { Button, Input } from 'semantic-ui-react'
var map, renderer, service, autocompleteFrom, autocompleteTo, origin, 
    destination, geocoder, markers=[], waypoints=[];

class Map extends React.Component {
  constructor() {
    super();
    // this.panToArcDeTriomphe = this.panToArcDeTriomphe.bind(this);
  }

  componentDidMount() {
    map = new window.google.maps.Map(this.refs.map, {
      zoom: 12, 
      mapTypeId: window.google.maps.MapTypeId.ROADMAP, 
      center: new window.google.maps.LatLng(49.2796502,-123.1116371,15) 
    });
    renderer = new window.google.maps.DirectionsRenderer({'draggable': true});
    renderer.setMap(map);
    service = new window.google.maps.DirectionsService();
    geocoder = new window.google.maps.Geocoder;
    autocompleteFrom = new window.google.maps.places.Autocomplete(
      (document.getElementById('autocompleteFrom')),
      {types: ['geocode']});
    autocompleteFrom.addListener('place_changed', fillInAddressFrom);

    autocompleteTo = new window.google.maps.places.Autocomplete(
      (document.getElementById('autocompleteTo')),
      {types: ['geocode']});
    autocompleteTo.addListener('place_changed', fillInAddressTo);
  }

  // panToArcDeTriomphe() {
  //   console.log(this)
  //   map.panTo(ARC_DE_TRIOMPHE_POSITION);
  // }

  render() {
    const mapStyle = {
      width: 415,
      height: 500,
      border: '1px solid black'
    };

    return (
      <div>
        <Header/>
        <div ref="map" style={mapStyle}>I should be a map!</div>
        <div>          
          <div>From:</div>
          <Input id="autocompleteFrom" placeholder='Enter address...' />
          <Button onClick={clickPointOrigin}>Click on map</Button>
          
          <div>To:</div>
          <Input id="autocompleteTo" placeholder="Enter address" />
          <Button onClick={clickPointDestination}>Click on map</Button>
          
          <div>Time:</div>
          <Input id="date" type="date" />
          <Input id="time" type="time" />
          
          <div>How many passengers:</div>
          <Input id="passengers" type="text" />

          <Button onClick={sendData}>Submit</Button>
        </div>
      </div>
    );
  }
}

function fillInAddressFrom() {
    var place = autocompleteFrom.getPlace();
    origin = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
    if (origin && destination) {
        createRoute()
    } else {
        addMarker(origin, 0);
    }
}
 
function fillInAddressTo() {
    var place = autocompleteTo.getPlace();
    destination = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
    if (origin && destination) {
        createRoute()
    } else {
        addMarker(destination, 1);
    }
}

function createRoute() {
    if (markers[0]) {deleteMarker(0)}
    if (markers[1]) {deleteMarker(1)}
    service.route({ 'origin': origin, 'destination':  destination, 'travelMode': window.google.maps.DirectionsTravelMode.DRIVING},function(res,sts) {
        if(sts=='OK')renderer.setDirections(res);
    }) 
}


function addMarker(location, index) {
    if (index == 0) {
        var marker = new window.google.maps.Marker({
            position: location,
            map: map,
            label: "A"
        });
    } else {
        var marker = new window.google.maps.Marker({
            position: location,
            map: map,
            label: "B"
        });
    }
    markers[index] = marker;
}

function deleteMarker(index) {
    markers[index].setMap(null);
    markers[index] = null;
}

function clickPointOrigin() {
  map.addListener('click', function(event) {
    origin = event.latLng;
    if (origin && destination) {
        createRoute()
    } else {
        addMarker(origin, 0);
    }
    setAddress(event.latLng, "origin");
    window.google.maps.event.clearListeners(map, 'click');
  });
}
function clickPointDestination() {
  map.addListener('click', function(event) {
    destination = event.latLng;
    if (origin && destination) {
        createRoute()
    } else {
        addMarker(destination, 1);
    }
    setAddress(event.latLng, "destination");
    window.google.maps.event.clearListeners(map, 'click');
  });
}

function setAddress(latlng, type) {
    geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === 'OK') {
            if (results[1]) {
                if (type == "origin")
                    document.getElementById('autocompleteFrom').value = results[1].formatted_address;
                else
                    document.getElementById('autocompleteTo').value = results[1].formatted_address;
            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });
}

function render_waypoints() {
    var rleg = renderer.directions.routes[0].legs[0];
    var wp = rleg.via_waypoints
    for (var i=0;i<wp.length;i++) {
        waypoints[i] = [wp[i].lat(),wp[i].lng()]
    }
}

function sendData() {
    render_waypoints();
    var data = {
        start_at: {
            date: document.getElementById('date').value,
            time: document.getElementById('time').value
        },
        directions: {
            start: {
                lat: origin.lat(),
                lng: origin.lng()
            },
            end: {
                lat: destination.lat(),
                lng: destination.lng()
            },
            waypoints: waypoints
        },
        stops: [],
        passengers: document.getElementById('passengers').value
    }
    console.log(data);

    window.$.ajax({
        url: "http://evopool-backend.staging.inputhealth.flynnhosting.net/api/drivers/trips",
        type: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        data: JSON.stringify(data),
        success: function(msg) {
            console.log("success");
        }
    });
}

export default Map;