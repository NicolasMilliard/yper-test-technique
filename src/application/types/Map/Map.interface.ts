import MarkerInterface from "./Marker.interface";

interface MapInterface {
    latitude: number;
    longitude: number;
    zoom: number;
    mapHeight: number;
    markers: MarkerInterface[];
}

export default MapInterface;