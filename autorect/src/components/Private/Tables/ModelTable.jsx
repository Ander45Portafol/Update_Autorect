import { useState } from "react";
import { useModal } from "../../../assets/modalScript";
import { model_columns, open_modal } from "../../../const";
import { UpdateButton } from "../UpdateButton";
import { ModelModal } from "../Modals/ModelModal";

export function ModelTable({ stateModal,marcas,models ,mess,setModel}) {
    const [idModelo,setIdModelo]=useState(null)
    const setModalState=useModal((state)=>state.setModalState)
    const update = (id) => {
        setIdModelo(id)
        open_modal()
        setModalState(2)
    }
    return (
        <div className="relative h-3/4 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-base text-gray-800 bg-gray-300">
                    <tr>
                        {model_columns.map(column => (
                            <th scope="col" className="px-6 py-3 text-center" key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        models?
                        models&&
                        models.map(model => (
                            <tr className="bg-white border-b text-center text-sm font-bold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={model.id_modelo}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                                    {model.id_modelo}
                                </th>
                                <td className="px-6 py-4">
                                    {model.nombre_modelo}
                                </td>
                                <td className="px-6 py-4">
                                    {model.anio_modelo}
                                </td>
                                <td className="px-6 py-4">
                                    {model.nombre_marca}
                                </td>
                                <td className="px-6 py-4 w-20">
                                    <div className="flex justify-center">
                                        <UpdateButton click={()=>update(model.id_modelo)}/>
                                        <button className="btn_delete w-10 h-8 flex justify-center items-center"><box-icon name='trash' type='solid' size='24px' color='#822727' ></box-icon></button>
                                    </div>
                                </td>
                            </tr>
                        )):<tr className="h-14 bg-blue border-b text-md flex justify-center items-center font-bold dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-56 ml-2"><p>{mess}</p></td>
                            </tr>
                    }
                </tbody>
            </table>
            <ModelModal modalState={stateModal} brands={marcas} newdata={setModel} id={idModelo}/>
        </div>
    )
}