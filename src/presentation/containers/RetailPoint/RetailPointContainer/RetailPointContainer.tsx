import { FC, useState, useEffect, useTransition } from "react";
import RetailPointDetails from "../RetailPointDetails/RetailPointDetails";
import DeliveryHours, { Hour } from "../DeliveryHours/DeliveryHours";
import getShopDetails from "infrastructure/api/Yper/getShopDetails";

interface Props {
  idRetailPoint: string | undefined;
}

interface ShopDetailsType {
  name: string;
  address: {
    street: string;
    city: string;
    zip: number;
    location: {
      coordinates: {
        0: number;
        1: number;
      };
    };
  };
  delivery_hours: Hour[];
}

const RetailPointContainer: FC<Props> = ({ idRetailPoint }) => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<ShopDetailsType | null>(null);

  useEffect(() => {
    fetchData();
  }, [idRetailPoint]);

  const fetchData = async () => {
    if (idRetailPoint) {
      try {
        const response = await getShopDetails(idRetailPoint);
        // Update state as a non-blocking transition
        startTransition(() => {
          setData(response.result);
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {data && (
        <>
          <RetailPointDetails
            shopName={data.name}
            address={data.address.street}
            city={data.address.city}
            zipCode={data.address.zip}
            latitude={data.address.location.coordinates[1]}
            longitude={data.address.location.coordinates[0]}
          />
          <DeliveryHours hours={data.delivery_hours} />
        </>
      )}
    </>
  );
};

export default RetailPointContainer;
