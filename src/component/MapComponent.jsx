import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../scssstyles/contactBox.scss";
const MapComponent = () => {
  const arizonaCoords = [34.0489, -111.0937];

  return (
    <MapContainer
      center={arizonaCoords}
      zoom={5}
      style={{ width: "100%", height: "400px" }}
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
                fontFamily: `"Gelasio",
                serif"`,
              }}
            >
              Tsg Notary
            </h3>
            <p
              style={{
                color: "#020a81",

                fontFamily: `"Gelasio",
                serif"`,
              }}
            >
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
                fontFamily: `"Gelasio",
                serif"`,
              }}
            >
              Get Directions
            </button>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
