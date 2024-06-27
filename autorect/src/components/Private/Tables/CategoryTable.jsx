import { API, open_modal } from "../../../const";
import { UpdateButton } from "../UpdateButton";
import { useFetch } from "../../../useFetch";


export function CategoryTable({ columns,modal }) {
    const change=()=>{
        open_modal()
        modal(false)
    }
    const {data}=useFetch(API+'categories',{method:'GET'})
    console.log(data)
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-base text-gray-800 bg-gray-300">
                    <tr>
                        {columns.map(column => (
                            <th scope="col" className="px-6 py-3 text-center" key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(data => (
                            <tr className="bg-white border-b text-center text-sm font-bold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={data.id_categoria}>
                                <td className="px-6 py-4">
                                    {data.nombre_categoria}
                                </td>
                                <td className="px-6 py-4">
                                    {data.descripcion_categoria}
                                </td>
                                <td className="px-6 py-4 w-20">
                                    <div className="flex justify-center">
                                        <UpdateButton OpenModal={change}/>
                                        <button className="btn_delete w-10 h-8 flex justify-center items-center"><box-icon name='trash' type='solid' size='24px' color='#822727' ></box-icon></button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}