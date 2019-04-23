import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showingInfoWindow: false, //Hides or the shows the infoWindow
        activeMarker: {}, //Shows the active marker upon click
        selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    }; 
} 

onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
});
  render() {
    return (
      <div>
        <h1>Hello Google Maps</h1>
        <Map 
    google={this.props.google}
    initialCenter={{
      lat: 43.7044, 
      lng: 43.7044, 
    }}
    zoom={16}
    > 
    <Marker
    name={'This is a marker we just made yay!'}
    position={{lat: 43.703262, lng: -72.288524}}
    onClick={this.onMarkerClick}
    />
    <InfoWindow
    marker={this.state.activeMarker}
    visible={this.state.showingInfoWindow}>
    </InfoWindow>
    </Map >
      </div>
    ) 
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCkpmbHVEBfXdk6tfii_k5WyYVI4LJFW8k'
})(MapContainer);