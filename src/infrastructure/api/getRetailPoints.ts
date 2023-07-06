import axios from "axios";

const getRetailPoints = async (lat: number, lng: number) => {
    const YPER_API_KEY = process.env.REACT_APP_YPER_API_KEY;
    const max_distance = "30000";
    const max_results= 10;

    try {
        const timestamp = Date.now();
        const response = await axios.get(`https://io.beta.yper.org/retailpoint/search?location=${lat},${lng}&max_distance=${max_distance}&limit=${max_results}`, {
            headers: {
                Authorization: YPER_API_KEY,
                "X-Request-Timestamp": timestamp,
              },
        });
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default getRetailPoints;