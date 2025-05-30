import { OrderModal } from "../../components/Private/Modals/OrderModal";
import { ExtraButton } from "../../components/Private/ExtrasButton";
import { InputDay } from "../../components/Private/InputToDay";
import { OrderTable } from "../../components/Private/Tables/OrderTable";
import { data_order, open_modal, order_columns } from "../../const";
import { useState } from "react";
import { NewButton } from "../../components/Private/NewButton";
import { Sidebar } from "../../components/Private/Sidebar";

export function Order() {
    const [modal,SetModal]=useState(false)
    const is_Open=()=>{
        open_modal()
        SetModal(true)
    }
    return (
        <div className="w-screen h-screen overflow-hidden flex">
            <div className="h-full w-20 sidebar flex justify-center bg-red-500">
                <Sidebar />
            </div>
            <div className="h-full w-full flex-col">
                <div className="w-full mt-8 px-8 flex justify-between">
                    <div className="">
                        <h1 className="text-gray-900 font-semibold text-3xl">ORDERS</h1>
                    </div>
                    <div className="flex justify-between bt_top_crud">
                        <ExtraButton text="Export" nameicon="export" />
                        <ExtraButton text="print" nameicon="printer" />
                        <NewButton OpenModal={is_Open}/>
                    </div>
                </div>
                <div className="w-full mt-8 px-8 h-20">
                    <div className="bg-gray-200 w-full rounded-xl h-16 pt-2 pl-2 flex justify-between">
                        <div className="">
                            <button className="z-20 absolute mt-3 ml-3 btn_search"><box-icon name='search' color='black' size='22px'></box-icon></button>
                            <input type="text" className="pl-10 text_search rounded-xl h-12 bg-white z-10 relative" placeholder="Username" />
                        </div>
                        <div className="">
                            <InputDay />
                        </div>
                    </div>
                </div>
                <div className="w-full mt-4 h-14 px-8">
                    <div className="filters flex">
                        <button className="w-36 filter_active pb-2">All orders <span className="rounded-full p-1 ml-1 bg-gray-900 text-white text-xs">11</span></button>
                        <button className="w-32 pb-2.5">Today <span className="rounded-full p-1 ml-1 bg-gray-900 text-white text-xs">83</span></button>
                    </div>
                </div>
                <div className="w-full px-8">
                    <OrderTable columns={order_columns} data={data_order} modal={SetModal} />
                </div>
            </div>
            <OrderModal title={modal}/>
        </div>
    )
}