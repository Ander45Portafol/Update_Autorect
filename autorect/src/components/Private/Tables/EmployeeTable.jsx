import { open_modal } from "../../../const";
import { UpdateButton } from "../UpdateButton";

export function EmployeeTable({columns,data,modal}) {
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
                        data.map(employee => (
                            <tr className="bg-white border-b text-center text-sm font-bold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={employee.ID}>
                                <td className="px-6 py-4">
                                    {employee.ID}
                                </td>
                                <td className="px-6 py-4 ">
                                    {employee.Lastname}
                                </td>
                                <td className="px-6 py-4">
                                    {employee.Name}
                                </td>
                                <td className="px-6 py-4">{employee.DUI}</td>
                                {employee.Status ? <td className="px-6 py-4">
                                    <p className="bg-green-700 text-white rounded-lg flex items-center justify-center h-10">Active</p>
                                </td> : <td className="px-6 py-4">
                                    <p className="bg-red-900 text-white rounded-lg flex items-center justify-center h-10">Inactive</p>
                                </td>}
                                <td className="px-6 py-4">
                                    {employee.Type}
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