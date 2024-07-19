import { useDelete } from "../../useDelete"
import Swal from 'sweetalert2'


export function DeleteButton({ id, setCategories }) {
    const { delete_data } = useDelete('categories/' + id)
    const delete_function = () => {
        Swal.fire({
            title: 'Log Out',
            text: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            showConfirmButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                delete_data()
                setCategories(prevCategories => prevCategories.filter(category => category.id_categoria !== id));
            }
        })

    }
    return (
        <>
            <button onClick={delete_function} className="btn_delete w-10 h-8 flex justify-center items-center">
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