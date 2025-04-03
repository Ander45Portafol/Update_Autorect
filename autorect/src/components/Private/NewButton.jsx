export function NewButton({OpenModal}) {
    return (
        <>
            <button className="text-white bg-red-800 h-8 font-medium text-sm flex justify-center items-center rounded-xl gap-2 w-24" onClick={OpenModal}>Nuevo<box-icon type='solid' name='plus-circle' size='18px' color='white'></box-icon></button>
        </>
    )
}