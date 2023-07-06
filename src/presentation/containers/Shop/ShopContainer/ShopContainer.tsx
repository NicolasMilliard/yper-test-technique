import { FC, useState, useEffect, useTransition } from "react";
import ShopDetails from "../ShopDetails/ShopDetails";
import DeliveryHours, { Hour } from "../DeliveryHours/DeliveryHours";
import getShopDetails from "../../../../infrastructure/api/Yper/getShopDetails";

interface Props {
  idShop: string | undefined;
}

interface ShopDetailsType {
  name: string;
  address: {
    street: string;
    city: string;
    zip: number;
  };
  delivery_hours: Hour[];
}

const ShopContainer: FC<Props> = ({ idShop }) => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<ShopDetailsType | null>(null);

  useEffect(() => {
    fetchData();
  }, [idShop]);

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
      {data && (
        <>
          <ShopDetails
            shopName={data.name}
            address={data.address.street}
            city={data.address.city}
            zipCode={data.address.zip}
          />
          <DeliveryHours hours={data.delivery_hours} />
        </>
      )}
    </>
  );
};

export default ShopContainer;
