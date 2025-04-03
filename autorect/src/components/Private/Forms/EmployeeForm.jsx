import { useState } from "react";
import { AddButton } from "../AddButton";
import { CleanText } from "../CleanButton";
import { InpuTransparent } from "../Input";
import { InputDate } from "../InputDate";
import { SelectTransparent } from "../Select";
import Swal from 'sweetalert2';
import { useModal } from "../../../assets/modalScript";
import { API,close_modal } from "../../../const";

export function EmployeeForm({ setEmployees, idEmpleado }) {
    const modalState = useModal((state) => state.modalState)
    const setModalState = useModal((state) => state.setModalState)
    const select_job = ['Sistemas', 'Administración', 'Ventas', 'Gerente', 'Supervisor']
    const estado_empleado = ['Vacaciones', 'Incapacidad', 'Suspendido', 'Transladado', 'Trabajando', 'Descanso']
    const tipo_documento = ['DUI', 'Pasaporte']

    const dataForm = {
        id_empleado: '',
        nombre_empleado: '',
        apellido_empleado: '',
        correo_empleado: '',
        direccion_empleado: '',
        estado_empleado: '',
        telefono_empleado: '',
        fecha_nac_empleado: '',
        carne_empleado: '',
        tipo_documento: '',
        numero_documento: '',
        area_trabajo: ''
    }

    const [data, setData] = useState(dataForm)

    const createData = async (e) => {
        const data = {
            nombre_empleado: e.target.nombre_empleado.value,
            apellido_empleado: e.target.apellido_empleado.value,
            correo_empleado: e.target.correo_empleado.value,
            direccion_empleado: e.target.direccion_empleado.value,
            estado_empleado: e.target.estado_empleado.value,
            telefono_empleado: e.target.telefono_empleado.value,
            fecha_nac_empleado: e.target.fecha_nac_empleado.value,
            carne_empleado: null,
            tipo_documento: e.target.tipo_documento.value,
            numero_documento: e.target.numero_documento.value,
            area_trabajo: e.target.area_trabajo.value,
        }
        console.log(data)
        try {
            const response = await fetch(API + 'empleados', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) })
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

                setEmployees(prevEmployees => [...prevEmployees, result.data]); // Assuming the response includes the new category
                e.target.reset()
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Ocurrio un problema",
                text:error,
                icon: 'Error',
                showConfirmButton: false,
                timer: 3000
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (modalState == 1) {
            createData(e)
        } else if (modalState == 2) {
        }
    }
    const inputsUpdate = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    return (
        <>
            <div className="p-4 md:p-5 space-y-4 ">
                <form className="flex-col w-full" onSubmit={handleSubmit}>
                    <div className="flex justify-evenly w-full">
                        <input type="text" className="hidden" value={data.id_empleado} id="id_employee" onChange={inputsUpdate} />
                        <InpuTransparent text="Nombre" type="text" valueData={data.nombre_empleado} textId={"nombre_empleado"} updateData={inputsUpdate} />
                        <InpuTransparent text="Apellido" type="text" textId={"apellido_empleado"} valueData={data.apellido_empleado} updateData={inputsUpdate} />
                        <InpuTransparent text="Correo Electronico" textId={"correo_empleado"} valueData={data.correo_empleado} updateData={inputsUpdate} type="email" />
                    </div>
                    <div className="flex justify-evenly w-full mt-10">
                        <InpuTransparent text="Celular" type="text" textId={"telefono_empleado"} valueData={data.telefono_empleado} updateData={inputsUpdate} />
                        <InpuTransparent text="Dirección" type="text" textId={"direccion_empleado"} valueData={data.direccion_empleado} updateData={inputsUpdate} />
                        <InputDate text="Fecha Nacimiento" textId={"fecha_nac_empleado"} valueData={data.fecha_nac_empleado} updateData={inputsUpdate} />
                    </div>
                    <div className="flex justify-evenly w-full mt-10">
                        <SelectTransparent text="Area Trabajo" nameo={"area_trabajo"} data={select_job} updateData={inputsUpdate} />
                        <SelectTransparent text="Tipo Documento" nameo={"tipo_documento"} data={tipo_documento} updateData={inputsUpdate} />
                        <InpuTransparent text="Numero Documento" type="text" textId={"numero_documento"} valueData={data.numero_documento} updateData={inputsUpdate} />
                    </div>
                    <div className="flex justify-evenly w-full mt-10">
                        <div className="flex w-2/3 justify-start">
                            <SelectTransparent text="Estado Empleado" nameo={"estado_empleado"} data={estado_empleado} updateData={inputsUpdate} />
                        </div>
                        <div className="flex-col w-1/3 pl-10">
                            <AddButton text="CONFIRM" />
                            <CleanText text="CLEAN" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}