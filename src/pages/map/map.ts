import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class Map
{
    @ViewChild('map') mapElement: ElementRef;
    map: any;
    infoWindow:any;
    
    constructor(public navCtrl: NavController, public platform: Platform) 
    {
        platform.ready().then(() => {
            this.CurrentLocation();
        });
        
    }

    //CurrentLocation
    CurrentLocation(){
    let that = this;
    that.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 15,
          myLocationButton: true,
          indoorPicker: true,
        });
        that.infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }; 

            that.infoWindow.setPosition(pos);
            that.infoWindow.setContent('your Location.');
            that.infoWindow.open(that.map);
            that.map.setCenter(pos);
          }, function() {
            this.handleLocationError(true, that.infoWindow, that.map.getCenter(),that.map);
          });
        } else {
          // Browser doesn't support Geolocation
          this.handleLocationError(false, that.infoWindow, this.map.getCenter(),this.map);
        }
    
  
  }
  
handleLocationError(browserHasGeolocation, infoWindow, pos,map) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

    //LoadingMap
    LoadingMap() {
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 6.952682, lng: 79.926970},
          zoom: 15,
          styles: [{
            stylers: [{ visibility: 'simplified' }]
          }, {
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }]
        });

       // this.infoWindow = new google.maps.InfoWindow();
        //this.service = new google.maps.places.PlacesService(map);

        // The idle event is a debounced event, so we can query & listen without
        // throwing too many requests at the server.
        //this.map.addListener('idle', performSearch);
      }
}