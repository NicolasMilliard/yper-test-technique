import { FC, ChangeEvent } from "react";
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

  return (
    <div ref={ref}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        disabled={!ready}
      />
      {/* Address list */}
      {status === "OK" ? (
        <ResultsList list={renderSuggestions()} />
      ) : (
        <>{status && <ResultsError error={formatStatus(status)} />}</>
      )}
    </div>
  );
};

export default AutocompleteInput;
