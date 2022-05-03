import { useEffect } from "react";
import { fetchCryptocurrencies } from "../redux/actions/cryptocurrenciesA";
import { useAppDispatch } from "./useAppDispatch";
import { useCustomSearchParams } from "./useCustomSearchParams"


export const useFetchCryptoByParams = (limit: number): ReturnType<typeof useCustomSearchParams> => {
   const dispatch = useAppDispatch()
   const [params, setParams] = useCustomSearchParams();

   useEffect(() => {
      const data: any = { limit }
      if (params?.search) {
         data.search = params.search;
      }

      if (params?.offset) {
         data.offset = params.offset;
      }

      dispatch(fetchCryptocurrencies(data))
   }, [params?.search, params?.offset])

   return [params, setParams]
}