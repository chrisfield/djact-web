/* global google */
import React, { useCallback } from "react";
import {
  GoogleMap,
  LoadScriptNext,
  MarkerClusterer,
} from "@react-google-maps/api";

import MapMarker from "./map-marker";

const containerStyle = {
  width: "1200px",
  height: "800px",
  border: "solid 1px #e8e8e8",
};

const ukCenter = {
  lat: 55,
  lng: -2,
};

const mapOptions = {
  fullscreenControl: false,
  maxZoom: 8,
};

type props = {
  locations: { name: string; lat: number; lng: number }[];
};

const Map: React.FC<props> = ({ locations }) => {
  const onLoad = useCallback(
    (map) => {
      let bounds = new google.maps.LatLngBounds();
      locations.forEach(({ lat, lng }) => {
        bounds = bounds.extend(new google.maps.LatLng(lat, lng));
      });
      map.fitBounds(bounds);
    },
    [locations]
  );

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

  return (
    <LoadScriptNext googleMapsApiKey={apiKey}>
      <GoogleMap
        options={mapOptions}
        mapContainerStyle={containerStyle}
        center={ukCenter}
        zoom={7}
        onLoad={onLoad}
      >
        <MarkerClusterer>
          {(clusterer) =>
            locations.map(({ name, lat, lng }) => (
              <MapMarker
                key={`${lat}-${lng}`}
                name={name}
                lat={lat}
                lng={lng}
                clusterer={clusterer}
              />
            ))
          }
        </MarkerClusterer>
      </GoogleMap>
    </LoadScriptNext>
  );
};

const locations = [
  { name: "The Hill", lat: 55, lng: -2 },
  { name: "The Wood", lat: 55, lng: -3 },
];

export default React.memo(() => <Map locations={locations} />);
