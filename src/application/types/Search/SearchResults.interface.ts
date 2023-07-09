interface SearchResultsInterface {
    _id: string;
    name: string;
    address: {
        location: {
            coordinates: number[];
        };
    };
}

export default SearchResultsInterface;