import React, { useRef } from "react";
import { useAppSelector } from "store/hooks";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { selectProperty } from "store/selectors/properties.selectors";
import { MAP_TILE_ATTRIBUTION, MAP_TILE_RAPID_API_URL } from "config/config";

import MapBox from "./MapBox";
import GPSButton from "./GPSButton";
import MapSkeleton from "./MapSkeleton";
import { LocationIcon } from "assets/icons";

const Map: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { location } = useAppSelector(selectProperty);

  const mapRef = useRef<L.Map | null>(null);

  const onBackToPin = () => {
    if (!mapRef.current) return;

    mapRef.current.setView([+location.lat, +location.lon], 17);
  };

  return loading ? (
    <MapSkeleton />
  ) : (
    <MapBox>
      {location.lat && location.lon && (
        <MapContainer
          ref={mapRef}
          center={[+location.lat, +location.lon]}
          zoom={17}
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <TileLayer
            attribution={MAP_TILE_ATTRIBUTION}
            url={MAP_TILE_RAPID_API_URL}
          />

          <Marker
            position={[+location.lat, +location.lon]}
            icon={L.icon({
              iconUrl: LocationIcon,
              iconSize: [50, 50],
            })}
          >
            <Popup>{location.displayName}</Popup>
          </Marker>
        </MapContainer>
      )}

      <GPSButton onBackToPin={onBackToPin} />
    </MapBox>
  );
};

export default Map;
