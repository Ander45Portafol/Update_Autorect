import { open_modal } from "../../../const";
import { UpdateButton } from "../UpdateButton";

export function ModelTable({ columns, data ,modal}) {
    const change =()=>{
        open_modal()
        modal(false)
    }
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
                        data.map(model => (
                            <tr className="bg-white border-b text-center text-sm font-bold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={model.ID}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                                    {model.ID}
                                </th>
                                <td className="px-6 py-4">
                                    {model.Model_name}
                                </td>
                                <td className="px-6 py-4">
                                    {model.Model_year}
                                </td>
                                <td className="px-6 py-4">
                                    {model.Brand}
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