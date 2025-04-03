import { UpdateButton } from "../UpdateButton";
import { CategoryModal } from "../Modals/CategoryModal";
import { useState } from "react";
import { open_modal } from "../../../const";
import { DeleteButton } from "../DeleteButton";
import { useDelete } from "../../../useDelete";
import Swal from 'sweetalert2'
import { useModal } from "../../../assets/modalScript";


export function CategoryTable({categories,mess,setCategories}) {
    //Es utilizado para modificar el estado global del modal
    const setModalState=useModal((state)=>state.setModalState)
    //Se maneja un estado para guardar y modificar el id, para el momento de actualizar
    const [idCategoria, setIdCateoria] = useState(null)
    //Metodo para abrir el modal de actualizacion, enviando el id del registro
    //Para abrir el modal se actualiza el estado del componente para indicarle que se realizara otro proceso
    const update = (id) => {
        setIdCateoria(id)
        open_modal()
        setModalState(2)
    }
    //Metodo para eliminar un registro
    const delete_function = (id) => {
        const { delete_data } = useDelete('categorias/' + id)
        Swal.fire({
            title: 'Eliminar Categoria',
            text: '¿Estas seguro?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor:'#cc4224',
            cancelButtonText:'Cancelar',
            confirmButtonColor:'#31b65c',
            confirmButtonText:'Eliminar',
            showConfirmButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                delete_data()
                setCategories(prevData => prevData.filter(data => data.id_categoria !== id));
            }
        })

    }

    return (
        <div className="tables relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto h-3/5 w-full">
            <table className="w-full flex-col text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-base w-full text-gray-800 bg-gray-300">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            Nombre Categoria
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Descripción categoria
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {categories ?
                        categories &&
                        categories.map((info) => (
                            <tr
                                className="bg-white border-b text-center text-sm font-bold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={info.id_categoria}
                            >
                                <td className="px-6 py-4">{info.nombre_categoria}</td>
                                <td className="px-6 py-4 text-start">{info.descripcion_categoria}</td>
                                <td className="px-6 py-4 w-20">
                                    <div className="flex justify-center">
                                        <UpdateButton click={() => update(info.id_categoria)} />
                                        <DeleteButton deleteFunction={()=>delete_function(info.id_categoria)}/>
                                    </div>
                                </td>
                            </tr>
                        ))
                        : <tr className=" w-full border-b text-md flex justify-center items-center h-12 font-bold dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <p>{mess}</p>
                        </tr>
                    }
                </tbody>
            </table>
            <CategoryModal newdata={setCategories} id={idCategoria} />
        </div>
    );
}
