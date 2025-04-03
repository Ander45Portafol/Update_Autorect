import { useState } from "react";
import { employee_columns, open_modal } from "../../../const";
import { UpdateButton } from "../UpdateButton";
import { DeleteButton } from "../DeleteButton";
import { useDelete } from "../../../useDelete";
import { ModalEmployee } from "../Modals/EmployeeModal";
import { useModal } from "../../../assets/modalScript";

export function EmployeeTable({ employees, mess, setEmployee }) {
    //Se maneja un estado para guardar y modificar el id, para el momento de actualizar o de eliminar algun registro
    const [idEmpleado, setIdEmpleado] = useState(null)
    //Es utitilizado para modificar el estado global del modal
    const setModalState = useModal((state) => state.setModalState)
    //Metodo para abrir el modal de actualización, enviando el id del registro
    //Para abrir el modal se actualiza el estado del componente para indicarle que se realizará otro proceso
    const update = (id) => {
        setIdEmpleado(id)
        open_modal()
        setModalState(2)
    }
    //Metodo para poder eliminar un registro
    const delete_function = (id) => {
        const { delete_data } = useDelete('empleados/' + id)
        Swal.fire({
            title: 'Eliminar Empleado',
            text: '¿Estas seguro?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#cc4224',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#31b65c',
            confirmButtonText: 'Eliminar',
            showConfirmButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                delete_data()
                setEmployee(prevData => prevData.filter(data => data.id_empleado !== id));
            }
        })
    }
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-base text-gray-800 bg-gray-300">
                    <tr>
                        {employee_columns.map(column => (
                            <th scope="col" className="px-6 py-3 text-center" key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody >
                    {
                        employees ?
                            employees &&
                            employees.map(employee => (
                                <tr className="bg-white border-b text-center text-sm font-bold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={employee.id_empleado}>
                                    <td className="px-6 py-4">
                                        {employee.id_empleado}
                                    </td>
                                    <td className="px-6 py-4 ">
                                        {employee.apellido_empleado}
                                    </td>
                                    <td className="px-6 py-4">
                                        {employee.nombre_empleado}
                                    </td>
                                    <td className="px-6 py-4">{employee.numero_documento}</td>
                                    <td className="px-6 py-4">
                                        <p className="bg-green-700 text-white rounded-lg flex items-center justify-center h-10">{employee.estado_empleado}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        {employee.area_trabajo}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center">
                                            <UpdateButton click={() => update(employee.id_empleado)} />
                                            <DeleteButton deleteFunction={() => delete_function()} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                            : <tr className="h-14 bg-blue border-b text-md flex justify-center items-center font-bold dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-56 ml-2"><p>{mess}</p></td>
                            </tr>
                    }
                </tbody>
            </table>
            <ModalEmployee newdata={setEmployee} id={idEmpleado} />
        </div>
    )
}