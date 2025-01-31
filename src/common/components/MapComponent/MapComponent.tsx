import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./MapComponent.css";

type Props = {
  latitude: number;
  longitude: number;
  zoom?: number;
  userAvatarUrl: string;
};

const MapComponent: React.FC<Props> = ({ latitude, longitude, zoom = 4, userAvatarUrl }) => {
  const customIcon = new L.Icon({
    className: "map-component__icon",
    iconUrl: userAvatarUrl,
  });

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      style={{ height: "200px", width: "100%" }}>
      <TileLayer
        attribution='&copy; 
        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={customIcon}>
        <Popup>This is your location!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
