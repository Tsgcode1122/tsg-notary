import React from "react";
import { renderToString } from "react-dom/server";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../scssstyles/contactBox.scss";
import { MdLocationOn } from "react-icons/md";

const MapComponent = () => {
  const arizonaCoords = [34.0489, -111.0937];

  // Define custom styles for the icon
  const iconStyles = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "0 0 10px #020a81",
    transition: "box-shadow 0.3s ease-in-out",
  };
  <style></style>;
  const customIcon = new L.divIcon({
    html: renderToString(
      <MdLocationOn size={32} color="#020a81" style={iconStyles} />,
    ),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div
      style={{
        marginTop: "10px",
        zIndex: "0",
      }}
    >
      {/* Map container */}
      <MapContainer
        center={arizonaCoords}
        zoom={5}
        style={{ width: "100%", height: "400px" }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={arizonaCoords} icon={customIcon}>
          <Popup>
            <div className="map-pop">
              <h3
                style={{
                  color: "#020a81",
                  fontStyle: "italic",
                  fontFamily: `"Gelasio", serif"`,
                }}
              >
                Tsg Notary
              </h3>
              <p style={{ color: "#020a81", fontFamily: `"Gelasio", serif"` }}>
                Arizona, USA
              </p>
              <button
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/dir/?api=1&destination=${arizonaCoords[0]},${arizonaCoords[1]}`,
                  )
                }
                style={{
                  color: "#020a81",
                  fontStyle: "italic",
                  fontFamily: `"Gelasio", serif"`,
                }}
              >
                Get Directions
              </button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
