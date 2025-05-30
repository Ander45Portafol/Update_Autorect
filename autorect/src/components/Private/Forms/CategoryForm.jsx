import { AddButton } from "../AddButton";
import { CleanText } from "../CleanButton";
import { API, close_modal } from "../../../const";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import { useModal } from "../../../assets/modalScript";


export function CategoryForm({ setCategories, idCategoria }) {

    const modalState=useModal((state)=>state.modalState)
    const setModalState=useModal((state)=>state.setModalState)

    const dataForm = {
        id: '',
        nombre_categoria: '',
        descripcion_categoria: ''
    }

    const [data, setData] = useState(dataForm)

    const updateData = async (e, id) => {
        const data = {
            nombre_categoria: e.target.nombre_categoria.value,
            descripcion_categoria: e.target.descripcion_categoria.value
        }
        try {
            const response = await fetch(API + 'categorias/' + id, { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) })
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
                setModalState(0)
                close_modal()
                const dataUpdate=await fetch(API+'categorias',{method:'GET'})
                const responseData = await dataUpdate.json();
                setCategories(responseData.data)
                setData(dataForm)
                e.target.reset();
            }
        } catch (error) {
            console.log(error)
        }
    }
    const createData = async (e) => {
        const data = {
            nombre_categoria: e.target.nombre_categoria.value,
            descripcion_categoria: e.target.descripcion_categoria.value
        }

        try {
            const response = await fetch(API + 'categorias', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) })
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
                close_modal()
                setData(dataForm)
                
                setCategories(prevCategories => [...prevCategories, result.data]); // Assuming the response includes the new category
                e.target.reset()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const chargeData = async (id_categoria) => {
        try {
            if (id_categoria!=0) {
                const response = await fetch(API + 'categorias/' + id_categoria, { method: "GET" })
                if (response.ok) {
                    const responseData = await response.json()
                    setData({
                        id: responseData.data.id_categoria,
                        nombre_categoria: responseData.data.nombre_categoria,
                        descripcion_categoria: responseData.data.descripcion_categoria
                    })
                }
            }else{
                console.log('No encuentra el id')
            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        if (modalState==2&&idCategoria!=null) {
            chargeData(idCategoria)
        }
    },[modalState,idCategoria])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (modalState == 1) {
            createData(e)
        } else if (modalState == 2) {
            updateData(e, idCategoria)
        }
    }

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };
    return (
        <>
            <div className="p-4 md:p-5 space-y-4 ">
                <form className="flex-col w-full pt-2" onSubmit={handleSubmit}>
                    <div className="flex justify-between w-full">
                        <div className="flex w-full my-10 ml-4">
                            <input type="text" className="hidden" id="id_category" value={data.id} onChange={manejarCambio} />
                            <div className="relative z-0 w-1/2">
                                <input type="text" id="category_name" value={data.nombre_categoria} onChange={manejarCambio} className="block py-2.5 px-0 w-4/5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " name="nombre_categoria" autoComplete="off" />
                                <label htmlFor="category_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre categoria</label>
                            </div>
                            <div className="relative z-0 w-1/2">
                                <input type="text" id="category_description" value={data.descripcion_categoria} onChange={manejarCambio} className="block py-2.5 px-0 w-4/5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " name="descripcion_categoria" autoComplete="off" />
                                <label htmlFor="category_description" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Descripción categoria</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-evenly">
                        <CleanText text="Limpiar" />
                        <AddButton text="Guardar" />
                    </div>
                </form>
            </div>
        </>
    )
}