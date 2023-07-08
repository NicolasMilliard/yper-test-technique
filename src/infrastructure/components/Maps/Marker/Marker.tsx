import { FC } from "react";
import { Link } from "react-router-dom";
import pin from "application/constants/icons/map/google-maps-pin.svg";

interface Props {
  lat: number;
  lng: number;
  link: string | null;
}

const Marker: FC<Props> = ({ lat, lng, link }) => {
  return (
    <>
      {link ? (
        <Link to={`/shop/${link}`}>
          <img src={pin} alt="Pin" />
        </Link>
      ) : (
        <img src={pin} alt="Pin" />
      )}
    </>
  );
};

export default Marker;
