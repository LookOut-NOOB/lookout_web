import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export const Maps = ({ type }) => {
  const libraries = ["places"];

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAQewpNI1z6v6zCoYRyPs8Ay4yGO3FinRI",
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;
  if (type === "map") return <Map />;
  if (type === "location") return <Location />;
};

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="h-96 w-full">
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
            {/* <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p> */}

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
