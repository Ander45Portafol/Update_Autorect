
export function UpdateButton({click}) 
{
    return (
        <>
                    <button onClick={click} className="btn_update w-10 h-8 flex justify-center items-center"><box-icon type='solid' name='edit' size='24px' color='#ffca2c'></box-icon></button>
        </>
    )
}