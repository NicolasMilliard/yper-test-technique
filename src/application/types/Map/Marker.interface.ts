interface MarkerInterface {
    _id: string;
    address: {
        location: {
            coordinates: number[];
        };
    };
    name: string;
}

export default MarkerInterface