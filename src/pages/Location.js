import React from 'react';
import {compose, withProps } from 'recompose';
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
const APIKEY = require('../config')

const MyMapComponent = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${APIKEY}&callback=initMap`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `77vh` }} />,
        mapElement: <div style={{ height: `100%`} } />,
    }),
    withScriptjs,
    withGoogleMap,
    )(props =>
    <div>
        <GoogleMap
            defaultZoom={16}
            defaultCenter={origin}
            clickableIcons={true}
            options={{ styles: mapStyles, disableDefaultUI: true, }}
        >
            {props.isMarkerShown && <Marker position={origin} />}
        </GoogleMap>
    </div> 
)

class Location extends React.Component {
    state = {
        isMarkerShown: true,
    }

    delayedShowMarker = () => {
    setTimeout(() => {
        this.setState({ isMarkerShown: true })
    }, 3000)
    }

    handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
    }

    componentDidMount(){
        document.body.style.overflowY = 'hidden';
    }

    componentWillUnmount(){
        document.body.style.overflowY = 'visible';
    }

    render() {
        return (
        <>
        <MyMapComponent
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
        />
        </>
        )
  }
}

const origin = {
    lat: 42.897252,
    lng: -77.274405
}


const mapStyles = [ 
    {elementType: 'geometry', stylers: [{color: '#2E2F33'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi',
      stylers: [{visibility: 'on'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#8B8E97'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#8B8E97'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}]
    }
]

export default Location;