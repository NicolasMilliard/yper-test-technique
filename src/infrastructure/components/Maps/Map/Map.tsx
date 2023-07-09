import { FC } from "react";
import Marker from "../Marker/Marker";
import GoogleMap from "google-maps-react-markers";

interface Props {
  latitude: number;
  longitude: number;
  zoom: number;
  mapHeight: number;
  markers: Marker[];
}

interface Marker {
  _id: string;
  address: {
    location: {
      coordinates: number[];
    };
  };
  name: string;
}

const Map: FC<Props> = ({ latitude, longitude, zoom, mapHeight, markers }) => {
  const mapProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
  };

  return (
    <div style={{ width: "100%", height: `${mapHeight}px` }}>
      <GoogleMap apiKey={process.env.REACT_APP_GOOGLE_API_KEY} defaultCenter={mapProps.center} defaultZoom={zoom}>
        {/* Used for the home page */}
        {markers.length > 1 &&
          markers.map((marker) => (
            <Marker
              key={marker._id}
              lat={marker.address.location.coordinates[1]}
              lng={marker.address.location.coordinates[0]}
              link={marker._id}
            />
          ))}

        {/* Used for the retail point page */}
        {markers.length === 1 && (
          <Marker
            key={markers[0]._id}
            lat={markers[0].address.location.coordinates[0]}
            lng={markers[0].address.location.coordinates[1]}
            link={null}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
