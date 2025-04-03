export function DeleteButton({deleteFunction }) {

    return (
        <>
            <button onClick={deleteFunction} className="btn_delete w-10 h-8 flex justify-center items-center">
                <box-icon
                    name="trash"
                    type="solid"
                    size="24px"
                    color="#822727"
                ></box-icon>
            </button>
        </>
    )
}