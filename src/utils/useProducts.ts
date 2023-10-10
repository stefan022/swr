import useSWR from "swr";

import { fetcher } from "./helpers/fetcher";
import { baseURL } from "../constants/baseURL";

export const useProducts = () => {
    const { data, error, isLoading } = useSWR(`${baseURL}/products`, fetcher);
   
    return {
        products: data,
        isLoading,
        isError: error
    };
};