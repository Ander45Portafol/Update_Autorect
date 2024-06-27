export function AddButton({ text }) {
    return (
        <>
            <button type="submit" className='bg-red-800 w-36 h-10 flex items-center justify-center gap-4 text-white mt-4 rounded-lg hover:bg-red-900'><box-icon type='solid' color='white' size='20px' name='check-circle'></box-icon>{text}</button>
        </>
    )
}