import { useState, useEffect, useRef } from "react";
import { API } from "./const";


export function useGet(url) {
    // const {data}=useFetch(API+'categories',{method:'GET'})
    const [data, setData] = useState([]);
    const [message,setMessage]=useState(null);
    const fetchedRef = useRef(false);
        async function getData() {
            try {
                const response = await fetch(API + url,{ method: "GET" });
                const responseData = await response.json();
                setData(responseData.data);
                setMessage(responseData.message)
            } catch (error) {
                console.log(error);
            }
        }
    useEffect(() => {
        if (fetchedRef.current) return;
        fetchedRef.current = true;
        // fetch(url, action)
        //   .then((response) => setData(response.json().data))
        //   .then((info) => setData(info.data))
        //   .catch((error) => setError(error))
        getData();
    }, [url]);
  return { data,message,setData };
}
