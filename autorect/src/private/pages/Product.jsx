import { ModalProduct } from "../../components/Private/Modals/ProductModal";
import { InputDay } from "../../components/Private/InputToDay";
import { ProductTable } from "../../components/Private/Tables/ProductTable";
import { data_product, open_modal, product_columns } from "../../const";
import { NewButton } from "../../components/Private/NewButton";
import { useState } from "react";
import { Sidebar } from "../../components/Private/Sidebar";

export function Product() {
    const [modal, SetModal] = useState(false)
    const is_Open = () => {
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
                        <h1 className="text-gray-900 font-semibold text-3xl">PRODUCTS</h1>
                    </div>
                    <div className="flex justify-between bt_top_crud">
                        <button className="text-gray-500 font-medium text-sm border-2 border-gray-500 rounded-xl w-24 h-8 flex justify-center items-center gap-2">Export <box-icon name='export' size='20px' color='#6B7280'></box-icon></button>
                        <button className="text-gray-500 font-medium text-sm border-2 border-gray-500 rounded-xl w-24 h-8 flex justify-center items-center gap-2">Print<box-icon name='printer' type='solid' size='20px' color='#6B7280'></box-icon></button>
                        <NewButton OpenModal={is_Open}/>
                    </div>
                </div>
                <div className="w-full mt-8 px-8 h-20">
                    <div className="bg-gray-200 w-full rounded-xl h-16 pl-2 flex justify-between">
                        <div className="pt-2">
                            <button className="z-20 absolute mt-3 ml-3 btn_search"><box-icon name='search' color='black' size='22px'></box-icon></button>
                            <input type="text" className="pl-10 text_search rounded-xl h-12 bg-white z-10 relative" placeholder="Username" />
                        </div>
                        <div className="flex justify-end items-center w-full h-full">
                            <InputDay />
                        </div>
                    </div>
                </div>
                <div className="w-full mt-4 h-14 px-8">
                    <div className="filters flex">
                        <button className="w-36 filter_active pb-2">All products <span className="rounded-full p-1 ml-1 bg-gray-900 text-white text-xs">11</span></button>
                        <button className="w-32 pb-2.5">Out of stock <span className="rounded-full p-1 ml-1 bg-gray-900 text-white text-xs">83</span></button>
                    </div>
                </div>
                <div className="w-full px-8">
                    <ProductTable columns={product_columns} data={data_product}modal={SetModal} />
                </div>
            </div>
            <ModalProduct title={modal}/>
        </div>
    )
}