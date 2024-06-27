export function CleanText({text}){
    return (
        <>
            <button className="bg-blue-600 w-36 h-10 flex items-center justify-center gap-4 text-white mt-4 rounded-lg hover:bg-blue-900"><box-icon type='solid' size='20px' color='white' name='eraser'></box-icon>{text}</button>
        </>
    )
}