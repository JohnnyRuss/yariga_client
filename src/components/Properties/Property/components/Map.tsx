import React, { useRef } from "react";
import { useAppSelector } from "store/hooks";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { MAP_TILE_ATTRIBUTION, MAP_TILE_RAPID_API_URL } from "config/config";

import "leaflet/dist/leaflet.css";

import { selectProperty } from "store/selectors/properties.selectors";

import { LocationIcon } from "assets/icons";
import { GpsFixed } from "@mui/icons-material";
import { Paper, Button, Skeleton } from "@mui/material";

const Map: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { location } = useAppSelector(selectProperty);

  const mapRef = useRef<L.Map | null>(null);

  const onBackToPin = () => {
    if (!mapRef.current) return;

    mapRef.current.setView([+location.lat, +location.lon], 17);
  };

  return loading ? (
    <Paper
      elevation={2}
      sx={{
        minHeight: "320px",
        maxHeight: "320px",
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "app_text.contrastText",
      }}
    >
      <Skeleton variant="rectangular" width="100%" height="100%" />
    </Paper>
  ) : (
    <Paper
      elevation={2}
      sx={{
        minHeight: "320px",
        maxHeight: "320px",
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "app_text.contrastText",
        position: "relative",
      }}
    >
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

      <Button
        variant="text"
        onClick={onBackToPin}
        sx={{
          position: "absolute",
          bottom: "15px",
          right: "15px",
          zIndex: 999,
          color: "app_blue.light",
        }}
      >
        <GpsFixed
          sx={{
            fontSize: "35px",
          }}
        />
      </Button>
    </Paper>
  );
};

export default Map;
