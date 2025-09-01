import { AddButton } from "../AddButton";
import { CleanText } from "../CleanButton";
import { InpuTransparent } from "../Input";
import { InputDate } from "../InputDate";
import { SelectTransparent } from "../Select";
import { useModal } from "../../../assets/modalScript";
import { useEmployeeForm } from "../../../assets/useEmployeeForm";

export function EmployeeForm({ setEmployees, idEmpleado }) {
    //Manejador del estado del modal, se utiliza para capturarla como parametro para el hook del form
    const modalState = useModal((state) => state.modalState)
    //Utilizo un hook personalizado para llevar el control de todas las acciones que realiza el formulario
    const { data, setData, handleSubmit } = useEmployeeForm(modalState, idEmpleado, setEmployees);

    const select_job = ['Sistemas', 'Administración', 'Ventas', 'Gerente', 'Supervisor']
    const estado_empleado = ['Vacaciones', 'Incapacidad', 'Suspendido', 'Transladado', 'Trabajando', 'Descanso']
    const tipo_documento = ['DUI', 'Pasaporte']

    //En esta funcion se guardan los valores que tienen en ese momento cada input
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
                        <SelectTransparent text="Area Trabajo" nameo={"area_trabajo"} valuedata={data.area_trabajo} data={select_job} updateData={inputsUpdate} />
                        <SelectTransparent text="Tipo Documento" nameo={"tipo_documento"} valuedata={data.tipo_documento} data={tipo_documento} updateData={inputsUpdate} />
                        <InpuTransparent text="Numero Documento" type="text" textId={"numero_documento"} valueData={data.numero_documento} updateData={inputsUpdate} />
                    </div>
                    <div className="flex justify-evenly w-full mt-10">
                        <div className="flex w-2/3 justify-start">
                            <SelectTransparent text="Estado Empleado" nameo={"estado_empleado"} valuedata={data.estado_empleado} data={estado_empleado} updateData={inputsUpdate} />
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