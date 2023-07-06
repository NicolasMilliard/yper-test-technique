import { FC, useState, useEffect, useTransition } from "react";
import ShopDetails from "../ShopDetails/ShopDetails";
import DeliveryHours from "../DeliveryHours/DeliveryHours";
import getShopDetails from "../../../../infrastructure/api/getShopDetails";

interface Props {
  idShop: string | undefined;
}

interface ShopDetails {
  name: string;
  address: {
    street: string;
    city: string;
    zip: number;
  };
  delivery_hours: any; // TO DO
}

const ShopContainer: FC<Props> = ({ idShop }) => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<ShopDetails | null>(null);

  useEffect(() => {
    fetchData();
  }, [idShop]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const fetchData = async () => {
    if (idShop) {
      try {
        const response = await getShopDetails(idShop);
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
      <ShopDetails
        shopName={data?.name}
        address={data?.address.street}
        city={data?.address.city}
        zipCode={data?.address.zip}
      />
      <DeliveryHours hours={data?.delivery_hours} />
    </>
  );
};

export default ShopContainer;
