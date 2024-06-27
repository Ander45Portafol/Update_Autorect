import { AddButton } from "../AddButton";
import { CleanText } from "../CleanButton";
import { InpuTransparent } from "../Input";
import { InputDate } from "../InputDate";
import { SelectTransparent } from "../Select";
import { Switch } from "../Switch";

export function EmployeeForm() {
    return (
        <>
            <div className="p-4 md:p-5 space-y-4 ">
                <form className="flex-col w-full">
                    <div className="flex justify-evenly w-full">
                        <InpuTransparent text="Name" type="text" />
                        <InpuTransparent text="Lastname" type="text" />
                        <InpuTransparent text="DUI" type="DUI" />
                    </div>
                    <div className="flex justify-evenly w-full mt-10">
                        <InpuTransparent text="Phone" type="text" />
                        <InpuTransparent text="Email" type="email" />
                        <InputDate text="Birth date" />
                    </div>
                    <div className="flex justify-evenly w-full mt-10">
                        <div className="flex-col w-2/3">
                            <div className="flex">
                                <SelectTransparent text="Type" />
                                <InpuTransparent text="Address" type="text" />
                            </div>
                            <div className="flex mt-8">
                                <Switch text="Status" />
                            </div>
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