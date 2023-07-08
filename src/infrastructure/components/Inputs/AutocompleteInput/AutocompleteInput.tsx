import { FC, ChangeEvent } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

import { useDispatch } from "react-redux";
import { setLocation } from "application/redux/locationSlice";

import styles from "./AutocompleteInput.module.scss";

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

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

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

  const renderSuggestions = () =>
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
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInput}
        disabled={!ready}
        required
      />
      {/* Address list */}
      {status === "OK" && (
        <div className={styles.listContainer}>
          <ul className={styles.list}>{renderSuggestions()}</ul>
        </div>
      )}
    </div>
  );
};

export default AutocompleteInput;
