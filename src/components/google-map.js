import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const { lat, lng } = this.props;
    new google.maps.Map(this.mapRef.current, {
      zoom: 12,
      center: { lat: lat, lng: lng }
    });
  }

  render(props) {
    return <div className="google-map" ref={this.mapRef} />;
  }
}

export function addGoogleMapsScripts() {
  const gmaps = document.createElement('script');
  gmaps.setAttribute(
    'src',
    `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}`
  );
  document.head.appendChild(gmaps);
}

export default GoogleMap;
