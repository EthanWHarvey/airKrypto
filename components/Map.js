import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { getCenter } from "geolib";
import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const [showPopup, setShowPopup] = React.useState(true);

  mapboxgl.accessToken = process.env.mapbox_key;

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  return (
    <ReactMapGL
      initialViewState={{
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 0,
      }}
      mapStyle='mapbox://styles/xethan/cl5ajc7sn000314qfhbmhqj5a'
      mapboxApiAccessToken={process.env.mapbox_key}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat} anchor='bottom'>
            <p
              role='img'
              onClick={() => setSelectedLocation(result)}
              className='cursor-pointer  text-2xl animate-bounce'
              aria-label='push-pin'
            >
              📍
            </p>
          </Marker>

          {showPopup && (
            <Popup
              anchor='bottom'
              closeOnClick={false}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
              className='z-50'
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
