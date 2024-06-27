import { InpuTransparent } from '../Input';
import { SelectTransparent } from '../Select';
import { AddButton } from '../AddButton';
import { Switch } from '../Switch';
import { CleanText } from '../CleanButton';
export function UserForm() {
    return (
        <div className="p-4 md:p-5 space-y-4 mt-6">
            <form className="flex justify-evenly w-full" method='submit'>
                <div className="flex-col w-full">
                    <div className="flex w-full justify-evenly mt-4">
                        <InpuTransparent text="Username" type="text" />
                        <SelectTransparent text="User type" />
                    </div>
                    <div className=" flex justify-evenly w-full mt-12">
                        <SelectTransparent text="Employee" />
                        <InpuTransparent text="Password" type="password" />
                    </div>
                    <div className="flex mt-6">
                        <Switch text="User state" />
                    </div>
                </div>
                <div className="w-1/3 pb-8 flex-col text-center">
                    <label htmlFor="" className='text-md font-bold'>Photo</label>
                    <div className="flex justify-center mt-2">
                        <div className="border-4 rounded-md border-red-800 w-5/6 h-44 flex justify-center items-center hover:bg-gray-200 transition-all transition-timing-function: linear">Click here</div>
                    </div>
                    <div className="felx-col ml-4">
                        <AddButton text="CONFIRM"/>
                        <CleanText text="CLEAN"/>
                    </div>
                </div>
            </form>
        </div>
    )
}