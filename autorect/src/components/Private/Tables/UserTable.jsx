import { open_modal } from "../../../const";
import { UpdateButton } from "../UpdateButton";

export function UserTable({ columns, data,modal }) {
    const change=()=>{
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
                        data.map(user => (
                            <tr className="bg-white border-b text-center text-sm font-bold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={user.ID}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-center items-center" >
                                    <img src={user.Image} alt="" className="border-2 border-gray-500 rounded-lg w-10 h-10" />
                                </th>
                                <td className="px-6 py-4 ">
                                    {user.Username}
                                </td>
                                <td className="px-6 py-4">
                                    {user.Employee}
                                </td>
                                {user.Status ? <td className="px-6 py-4">
                                <p className="bg-green-700 text-white rounded-lg flex items-center justify-center h-10">Active</p>
                                </td> : <td className="px-6 py-4">
                                <p className="bg-red-900 text-white rounded-lg flex items-center justify-center h-10">Inactive</p>
                                </td>}
                                <td className="px-6 py-4">
                                    {user.Type}
                                </td>
                                <td className="px-6 py-4">
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