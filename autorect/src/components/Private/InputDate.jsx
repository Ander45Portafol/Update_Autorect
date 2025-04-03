export function InputDate({text,textId,valueData,updateData}){
    return(
        <div className="relative z-0 w-1/2">
            <input type="date" id={textId} value={valueData} name={textId} onChange={updateData} className="block py-2.5 px-0 w-4/5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-gray-500 focus:outline-none focus:ring-0 peer" placeholder=" " >

            </input>
            <label htmlFor={textId} className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{text}</label>
        </div>
    )
}