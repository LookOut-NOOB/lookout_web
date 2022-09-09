import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export const Maps = ({ type, lati, long }) => {
  const libraries = ["places"];

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;
  if (type === "map") return <Map lati={lati} long={long} />;
  if (type === "location") return <Location />;
};

function Map({ lati, long }) {
  let latitude = parseFloat(lati);
  let longitude = parseFloat(long);
  console.log(latitude);
  const center = useMemo(
    () => ({ lat: latitude, lng: longitude }),
    [latitude, longitude]
  );
  return (
    <GoogleMap zoom={20} center={center} mapContainerClassName="h-96 w-full">
      <MarkerF position={center} />
    </GoogleMap>
  );
}

function Location() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>

            <input
              {...getInputProps({ placeholder: "Type address" })}
              className="w-full p-2 border border-gray-300"
            />

            <div>
              {loading ? (
                <div className="text-sm text-gray-500">...loading</div>
              ) : null}

              {suggestions.map((suggestion, index) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };

                return (
                  <div
                    key={index}
                    {...getSuggestionItemProps(suggestion, { style })}
                    className="text-sm"
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
