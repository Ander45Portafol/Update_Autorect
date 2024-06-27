import { AddButton } from "../AddButton";
import { CleanText } from "../CleanButton";
import { InpuTransparent } from "../Input";
import { SelectTransparent } from "../Select";

export function ProductForm() {
    return (
        <div className="p-4 md:p-5 space-y-4">
            <div className="flex-col w-full">
                <div className="flex justify-evenly w-full">
                    <InpuTransparent text="Product Name" type="text" />
                    <InpuTransparent text="Price" type="number" />
                    <InpuTransparent text="Stock" type="number" />
                </div>
                <div className="flex justify-evenly w-full mt-10">
                    <SelectTransparent text="Category" />
                    <SelectTransparent text="Model" />
                    <SelectTransparent text="Status" />
                </div>
                <div className="w-full mt-8">
                    <InpuTransparent text="Product Description" type="text" />
                </div>
                <div className="w-full flex justify-end">
                    <div className="flex-col">
                        <AddButton text="CONFIRM" />
                        <CleanText text="CLEAN" />
                    </div>
                </div>
            </div>
        </div>
    )
}