import ApiErrorInterface from "./ApiError.interface";

const isApiError = (x: unknown): x is ApiErrorInterface => {
    if (x && typeof x === "object" && "code" in x) {
        return true;
    }
    return false;
};

export default isApiError;