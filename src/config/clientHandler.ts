import axios, {AxiosInstance} from "axios";

export const clientRequest: AxiosInstance = axios.create({
    baseURL: "http://localhost/api",
    headers: {
        "Accept": "application/json"
    }
});