import { useState, useEffect, useRef } from "react";
import { API } from "./const";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


export function useGet(url) {
    // const {data}=useFetch(API+'categories',{method:'GET'})
    const [data, setData] = useState([]);
    const [message, setMessage] = useState(null);
    const fetchedRef = useRef(false);
    const navigate=useNavigate();
    async function getData() {
        try {
            const response = await fetch(API + url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("llave")}`
                }
            });
            const responseData = await response.json();
            setMessage(responseData.message)
            setData(responseData.data);
        } catch (error) {
            Swal.fire({
                title: 'Ocurrio un problema',
                text: 'No se puede establecer la conexión con el servidor. Error 401',
                icon: 'error',
                showConfirmButton: false, // Desactiva el botón de confirmación
                showCancelButton: false,  // Desactiva el botón de cancelar
                allowOutsideClick: false, // Opcional: Evita que el usuario cierre el modal haciendo clic fuera
                allowEscapeKey: false
            })
            navigate("/");
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
    return { data, message, setData };
}
