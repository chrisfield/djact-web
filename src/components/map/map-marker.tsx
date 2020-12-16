/* global google */
import React from "react";
import { Marker } from "@react-google-maps/api";
import { Clusterer } from "@react-google-maps/marker-clusterer";

type props = {
  clusterer?: Clusterer;
  lat: number;
  lng: number;
};

const MapMarker: React.FC<props> = ({ clusterer, lat, lng }) => (
  <Marker
    clusterer={clusterer}
    position={{ lat, lng }}
    icon={{
      url:
        "https://unpkg.com/@googlemaps/markerclustererplus@1.0.3/images/m1.png",
      scaledSize: new google.maps.Size(33, 47),
      labelOrigin: new google.maps.Point(16, 15),
    }}
    // label={{ color: 'white', text: 'here'}}
  />
);

export default MapMarker;
