import '../styles/dashboard.css'
import { open_modal } from '../../const.js'
import { EmployeeTable } from "../../components/Private/Tables/EmployeeTable.jsx";
import { ExtraButton } from "../../components/Private/ExtrasButton.jsx";
import { NewButton } from "../../components/Private/NewButton.jsx";
import { InputDay } from "../../components/Private/InputToDay.jsx";
import { Sidebar } from '../../components/Private/Sidebar.jsx';
import { useGet } from '../../useGet.js';
import { useModal } from '../../assets/modalScript.js';
import { useState } from 'react';


export function Employee() {
    //Custom Hook donde se hacen los metodos Get
    const {data,message,setData}=useGet('empleados')
    //variable para cambiar el estado del modal
    const setModalState=useModal((state)=>state.setModalState)
    //variable para contar los empleados que estan trabajando.
    const cantidadActivos = data.filter(empleado => empleado.estado_empleado === "Trabajando").length;
    //metodo para modificar el estado del modal y poder abrirlo para agregar.
    const isOpen = () => {
        open_modal()
        setModalState(1)
    }
    return (
        <div className="w-screen h-screen overflow-hidden flex">
            <div className="h-full w-20 sidebar flex justify-center bg-red-500">
                <Sidebar />
            </div>
            <div className="h-full w-full flex-col">
                <div className="w-full mt-8 px-8 flex justify-between">
                    <div className="">
                        <h1 className="text-gray-900 font-semibold text-3xl">EMPLEADOS</h1>
                    </div>
                    <div className="flex justify-between bt_top_crud">
                        <ExtraButton text="Exportar" nameicon="export" />
                        <ExtraButton text="Imprimir" nameicon="printer" />
                        <NewButton OpenModal={isOpen} />
                    </div>
                </div>
                <div className="w-full mt-8 px-8 h-20">
                    <div className="bg-gray-200 w-full rounded-xl h-16 pt-2 pl-2 flex justify-between">
                        <div className="">
                            <button className="z-20 absolute mt-3 ml-3 btn_search"><box-icon name='search' color='black' size='22px'></box-icon></button>
                            <input type="text" className="pl-10 text_search rounded-xl h-12 bg-white z-10 relative" placeholder="DUI" />
                        </div>
                        <div className="">
                            <InputDay />
                        </div>
                    </div>
                </div>
                <div className="w-full mt-4 h-14 px-8">
                    <div className="filters flex">
                        <button className="w-36 filter_active pb-2">Todos <span className="rounded-full p-1 ml-1 bg-gray-900 text-white text-xs">{data?data.length:0}</span></button>
                        <button className="w-32 pb-2.5">Activos <span className="rounded-full p-1 ml-1 bg-gray-900 text-white text-xs">{cantidadActivos}</span></button>
                    </div>
                </div>
                <div className="w-full px-8">
                    <EmployeeTable employees={data} mess={message} setEmployee={setData} />
                </div>
            </div>
        </div>
    )
}