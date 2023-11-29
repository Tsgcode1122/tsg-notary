import React from "react";
import {
  MapContainer,
  AttributionControl,
  TileLayer,
  Marker,
  ZoomControl,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../scssstyles/contactBox.scss";

const MapComponent = () => {
  const arizonaCoords = [34.0489, -111.0937];

  return (
    <div
      style={{
        marginTop: "10px",
        zIndex: "0",
      }}
    >
      {/* Your fixed div goes here */}

      {/* Map container */}
      <MapContainer
        center={arizonaCoords}
        zoom={5}
        style={{ width: "100%", height: "400px" }}
        attributionControl={false}
        zoomControl={false} // Disable the default zoom control
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={arizonaCoords}>
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
