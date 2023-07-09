import RetailPointDeliveryHoursInterface from "./RetailPointDeliveryHours.interface";

interface RetailPointDetailsInterface {
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
    delivery_hours: RetailPointDeliveryHoursInterface[];
}

export default RetailPointDetailsInterface;