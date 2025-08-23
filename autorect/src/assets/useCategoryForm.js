import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { API, close_modal } from "../const";

export const useCategoryForm = (modalState, idCategoria, setCategoria) => {
    const [data, setData] = useState({
        id: '',
        nombre_categoria: '',
        descripcion_categoria: ''
    });

    useEffect(() => {
        if (modalState === 2 && idCategoria) {
            chargeData(idCategoria);
        }
    }, [modalState, idCategoria]);

    const chargeData = async (id_categoria) => {
        try {
            if (id_categoria != 0) {
                const response = await fetch(API + 'categorias/' + id_categoria, { method: "GET" })
                if (response.ok) {
                    const responseData = await response.json()
                    setData({
                        id: responseData.data.id_categoria,
                        nombre_categoria: responseData.data.nombre_categoria,
                        descripcion_categoria: responseData.data.descripcion_categoria
                    })
                }
            } else {
                console.log('No encuentra el id')
            }
        } catch (e) {
            console.log(e)
        }
    }
    const createData = async (formData) => {

        try {
            const response = await fetch(API + 'categorias', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) })
            if (response.ok) {
                const result = await response.json()
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    title: result.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 3000
                })
                setCategoria(prevCategories => [...prevCategories, result.data]); // Assuming the response includes the new category
                close_modal()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateData = async (formData, id) => {
        try {
            const response = await fetch(API + 'categorias/' + id, { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) })
            if (response.ok) {
                const result = await response.json()
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    title: result.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 3000
                })
                const dataUpdate = await fetch(API + 'categorias', { method: 'GET' })
                const responseData = await dataUpdate.json();
                setCategoria(responseData.data)
                close_modal();
            }
        } catch (error) {
            console.log(error)
        }
    }
        const handleSubmit = async (e) => {
        e.preventDefault()

        if (modalState == 1) {
            createData(data)
        } else if (modalState == 2) {
            updateData(data, idCategoria)
        }
    }
    return {
        data,
        setData,
        handleSubmit
    };
}

