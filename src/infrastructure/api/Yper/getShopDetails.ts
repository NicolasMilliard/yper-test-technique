import axios from "axios";

const getShopDetails = async (idShop: string) => {
    const YPER_API_KEY = process.env.REACT_APP_YPER_API_KEY;

    try {
        const timestamp = Date.now();
        const response = await axios.get(`https://io.beta.yper.org/retailpoint/${idShop}`, {
            headers: {
                Authorization: YPER_API_KEY,
                "X-Request-Timestamp": timestamp,
              },
        });
        return response.data;
        
    } catch (error) {
        throw new Error("Echec du chargement des informations de ce point de vente. Veuillez ré-essayer.");
    }
}

export default getShopDetails;