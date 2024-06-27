import { open_modal } from "../../../const";

export function ClientTable({ columns, data }) {
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
                        data.map(client => (
                            <tr className="bg-white border-b text-center text-sm font-bold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={client.ID}>
                                <td className="px-6 py-4">
                                    {client.Lastname}
                                </td>
                                <td className="px-6 py-4 ">
                                    {client.Name}
                                </td>
                                <td className="px-6 py-4">
                                    {client.Username}
                                </td>
                                <td className="px-6 py-4">
                                    {client.DUI}
                                </td>
                                <td className="px-6 py-4"> {client.Phone_number}</td>
                                {client.Status ? <td className="px-6 py-4">
                                    <p className="bg-green-700 text-white rounded-lg flex items-center justify-center h-10">Active</p>
                                </td> : <td className="px-6 py-4">
                                    <p className="bg-red-900 text-white rounded-lg flex items-center justify-center h-10">Inactive</p>
                                </td>}
                                <td className="px-6 py-4">
                                    <div className="flex justify-center">
                                        <button onClick={open_modal} className="btn_update w-10 h-8 flex justify-center items-center"><box-icon type='solid' name='edit' size='24px' color='#ffca2c'></box-icon></button>
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