import { useEffect, useState } from "react";
import { AddButton } from "../AddButton";
import { CleanText } from "../CleanButton";
import { InpuTransparent } from "../Input";
import { SelectTransparent } from "../Select";
import { useModal } from "../../../assets/modalScript";
import { API, close_modal } from "../../../const";

export function ModelForm({ modal,setData,Marcas,setModel, idModelo }) {

    async function createData(e) {
        const data = {
            nombre_modelo: e.target.nombre_modelo.value,
            id_marca: e.target.id_marca.value,
            anio_modelo: e.target.anio_modelo.value
        }
        try {
            const response = await fetch(API + 'modelos/' + id, { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) })
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

                setModel(prevEmployees => [...prevEmployees, result.data]); // Assuming the response includes the new category
                e.target.reset()
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Ocurrio un problema",
                text: error,
                icon: 'Error',
                showConfirmButton: false,
                timer: 3000
            })
        }
    }

    //En esta funcion se guardan los valores que tienen en ese momento cada input
    const inputsUpdate = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

        //Metodo manejador de eventos, para que el sistema detecte que proceso se está realizando
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (modal == 1) {
            createData(e)
        } else if (modal == 2) {
            //updateData(e,idEmpleado)
        }
    }


    return (
        <>
            <div className="p-4 md:p-5 space-y-4 ">
                <form className="flex-col w-full pt-4" onSubmit={handleSubmit}>
                    <div className="flex justify-evenly mt-8">
                        <input type="text" className="hidden" value={data.id_modelo} id="id_modelo" onChange={inputsUpdate} />
                        <InpuTransparent text="Nombre Modelo" type="text" valueData={data.nombre_modelo} textId={"nombre_modelo"} updateData={inputsUpdate} />
                        <InpuTransparent text="Año Modelo" type="text" valueData={data.anio_modelo} textId={"anio_modelo"} updateData={inputsUpdate} />
                    </div>
                    <div className="flex justify-start mt-10">
                        <SelectTransparent text="Marca" nameo={"marca"} valuedata={data.id_marca} data={Marcas.data} usability={false} updateData={inputsUpdate} />
                        <div className="flex-col ml-10">
                            <CleanText text="CLEAN" />
                            <AddButton text="CONFIRM" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}