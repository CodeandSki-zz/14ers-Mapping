import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from "react-google-maps";

export default class GoogleMap extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {

      },

    }
  }



    render() {

      return (
          {mountains.map((row, key) => (
      <Marker
        position={{lat: row.geometry.coordinates[1], lng: row.geometry.coordinates[0]}}
        key={row.properties.name}
        onClick={this.toggleInfoWindow.bind(this, row.properties.name)}
      >

      </Marker>

    ))}

      );
    }


}
