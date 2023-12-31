import { FC, useTransition, useState, useEffect } from "react";
// API
import getRetailPointDetails from "infrastructure/api/Yper/getRetailPointDetails";
// Components
import ErrorContainer from "presentation/containers/RetailPoint/ErrorContainer/ErrorContainer";
import LoaderContainer from "presentation/containers/RetailPoint/LoaderContainer/LoaderContainer";
import RetailPointDetailsContainer from "presentation/containers/RetailPoint/RetailPointDetailsContainer/RetailPointDetailsContainer";
import DeliveryHoursContainer from "presentation/containers/RetailPoint/DeliveryHoursContainer/DeliveryHoursContainer";
// Types
import { RetailPointDetailsInterface } from "application/types/RetailPoint";
import { isApiError } from "application/types/ApiError";

interface Props {
  idRetailPoint: string;
}

const HandleGetRetailPointDetails: FC<Props> = ({ idRetailPoint }) => {
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<RetailPointDetailsInterface | null>(null);

  useEffect(() => {
    fetchRetailPointDetails();
  }, [idRetailPoint]);

  const fetchRetailPointDetails = async () => {
    try {
      setIsLoading(true);
      const response = await getRetailPointDetails(idRetailPoint);
      // Update state as a non-blocking transition
      startTransition(() => {
        setData(response.result);
      });
      setIsLoading(false);
    } catch (error) {
      if (isApiError(error)) {
        setError(error.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {isLoading && <LoaderContainer />}
      {error && <ErrorContainer error={error} />}
      {data && (
        <>
          <RetailPointDetailsContainer
            shopName={data.name}
            address={data.address.street}
            city={data.address.city}
            zipCode={data.address.zip}
            latitude={data.address.location.coordinates[1]}
            longitude={data.address.location.coordinates[0]}
          />
          <DeliveryHoursContainer hours={data.delivery_hours} />
        </>
      )}
    </>
  );
};

export default HandleGetRetailPointDetails;
