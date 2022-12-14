import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYW51c2FyYTciLCJhIjoiY2xiZGc0aDJwMDEwODNybWZhbnZjdGJpaiJ9.iSl7Weog5LpBvJpHnohsSg";
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom,
    });

    new mapboxgl.Marker({
      position: center,
      map: map,
      draggable: true,
    })
      .setLngLat(center)
      .addTo(map);
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
