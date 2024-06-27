import { AddButton } from "../AddButton";
import { CleanText } from "../CleanButton";
import { InpuTransparent } from "../Input";
import { SelectTransparent } from "../Select";

export function ModelForm() {
    return (
        <>
            <div className="p-4 md:p-5 space-y-4 ">
                <form className="flex-col w-full pt-4">
                    <div className="flex justify-evenly mt-8">
                        <InpuTransparent text="Model name" type="text"/>
                        <InpuTransparent text="Model year" type="text"/>
                    </div>
                    <div className="flex justify-start mt-10">
                        <SelectTransparent text="Brand"/>
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