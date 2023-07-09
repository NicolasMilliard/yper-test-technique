import { FC, ChangeEvent, useEffect } from "react";
// Custom hook
import { useGeolocated } from "react-geolocated";
// Autocomplete
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
// Redux
import { useDispatch } from "react-redux";
import { setLocation } from "application/redux/locationSlice";
// Error
import formatStatus from "application/utils/Google/PlacesServiceStatus/formatStatus";
// Components
import Input from "presentation/components/Inputs/AutocompleteInput/Input/Input";
import ResultsList from "presentation/components/Inputs/AutocompleteInput/ResultsList/ResultsList";
import ResultsError from "presentation/components/Inputs/AutocompleteInput/ResultsError/ResultsError";

interface Props {
  placeholder: string;
}

const AutocompleteInput: FC<Props> = ({ placeholder }) => {
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  const dispatch = useDispatch();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "AUTOCOMPLETE",
    debounce: 300,
    requestOptions: {
      region: "FR",
    },
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  // Called when the list is clicked
  const handleSelect =
    ({ description }: { description: string }) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        dispatch(setLocation({ lat: lat, lng: lng }));
      });
    };

  const renderSuggestions = (): JSX.Element[] =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong>
          <br />
          <small>{secondary_text}</small>
        </li>
      );
    });

  // If geolocation is enabled, location state is updated as input value
  useEffect(() => {
    if (coords) {
      if (coords.latitude !== 0 && coords.longitude !== 0) {
        dispatch(setLocation({ lat: coords.latitude, lng: coords.longitude }));
        setValue(`${coords.latitude},${coords.longitude}`);
      }
    }
  }, [coords]);

  return (
    <div ref={ref}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        disabled={!ready}
      />
      {/* Address list */}
      {!coords && (
        <>
          {status === "OK" ? (
            <ResultsList list={renderSuggestions()} />
          ) : (
            <>{status && <ResultsError error={formatStatus(status)} />}</>
          )}
        </>
      )}
    </div>
  );
};

export default AutocompleteInput;
