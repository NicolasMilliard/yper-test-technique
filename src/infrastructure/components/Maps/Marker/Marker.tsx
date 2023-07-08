import { FC } from "react";
import pin from "../../../../application/constants/icons/map/google-maps-pin.svg";

interface Props {
  lat: number;
  lng: number;
  text: string | null;
}

const Marker: FC<Props> = ({ lat, lng, text }) => {
  return (
    <div>
      <img src={pin} alt="Pin" />
      <span>{text}</span>
    </div>
  );
};

export default Marker;
