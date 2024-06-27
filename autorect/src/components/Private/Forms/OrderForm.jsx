import { SelectTransparent } from "../Select";
import {InpuTransparent} from "../Input"
import {CleanText} from "../CleanButton"
import {InputDate} from "../InputDate"
import {AddButton} from "../AddButton"

export function OrderForm(){
    return(
        <>
        <div className="p-4 md:p-5 space-y-4 ">
            <form className="flex-col w-full pt-4">
                <div className="flex justify-evenly">
                    <SelectTransparent text="Client"/>
                    <SelectTransparent text="Employee"/>
                </div>
                <div className="flex justify-evenly mt-10">
                    <SelectTransparent text="Status"/>
                    <InputDate text="Date"/>
                </div>
                <div className="flex justify-start mt-8">
                    <InpuTransparent text="Address" type="text"/>
                    <div className="flex-col ml-10">
                        <CleanText text="CLEAN"/>
                        <AddButton text="CONFIRM"/>
                    </div>
                </div>
            </form>
        </div>
    </>
    )
}