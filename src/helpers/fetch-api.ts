import qs from "qs"
import { getStrapiUrl } from "./api-helper";

export const fetchApi = async(path: string, urlParamsObject = {}, options = {}) => {
    try{
        const mergedOptions = {
            next: { revalidate: 10 },
            headers: {
              "Content-Type": "application/json",
            },
            ...options,
          };

        const queryString = qs.stringify(urlParamsObject, {encodeValuesOnly: true});

        const requestedUrl = `${getStrapiUrl(
            `/api${path}${queryString ? `?${queryString}` : ""}`
        )}`

        const res = await fetch(requestedUrl, mergedOptions);
        const data = await res.json();

        return data;

    }catch (error){
        console.log(error);
        throw new Error("Error fetching API");
    }
}
