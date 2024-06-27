export function Switch({ text }) {
    return (
        <>
            <label className="flex-col items-center cursor-pointer">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">{text}</span>
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-800"></div>
            </label>
        </>
    )
}