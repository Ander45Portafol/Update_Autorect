import { AddButton } from "../AddButton";
import { CleanText } from "../CleanButton";
import { InpuTransparent } from "../Input";

export function CategoryForm() {
    return (
        <>
            <div className="p-4 md:p-5 space-y-4 ">
                <form className="flex-col w-full pt-2">
                    <div className="flex justify-between w-full">
                        <div className="flex w-full my-10 ml-4">
                            <InpuTransparent text="Category name" type="text" />
                            <InpuTransparent text="Category Description" type="text" />
                        </div>
                    </div>
                    <div className="flex justify-evenly">
                        <CleanText text="CLEAN" />
                        <AddButton text="CONFIRM" />
                    </div>
                </form>
            </div>
        </>
    )
}