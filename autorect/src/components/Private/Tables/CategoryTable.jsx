import { UpdateButton } from "../UpdateButton";
import { CategoryModal } from "../Modals/CategoryModal";
import { useState } from "react";
import { open_modal } from "../../../const";
import { DeleteButton } from "../DeleteButton";


export function CategoryTable({ category, mess, acmodal, acSetModal, acdata }) {
    const [idCategoria,setIdCateoria]=useState(null)
    const update = (id) => {
        setIdCateoria(id)
        open_modal()
        acSetModal(2)
    }

    return (
        <div className="tables relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto h-3/5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-base text-gray-800 bg-gray-300">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            Name category
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Description category
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {!category ?
                        <tr className="bg-white border-b text-md font-bold dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 text-center">{mess}</td>
                        </tr>
                        : category &&
                        category.map((info) => (
                            <tr
                                className="bg-white border-b text-center text-sm font-bold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={info.id_categoria}
                            >
                                <td className="px-6 py-4">{info.nombre_categoria}</td>
                                <td className="px-6 py-4">{info.descripcion_categoria}</td>
                                <td className="px-6 py-4 w-20">
                                    <div className="flex justify-center">
                                        <UpdateButton click={() => update(info.id_categoria)} />
                                        <DeleteButton id={info.id_categoria} setCategories={acdata} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <CategoryModal state={acmodal} newdata={acdata} id={idCategoria} acState={acSetModal}/>
        </div>
    );
}
