import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export const NewMaps = withGoogleMap((props) => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
));
