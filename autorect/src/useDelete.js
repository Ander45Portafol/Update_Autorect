import { API } from "./const";
import Swal from 'sweetalert2'


export function useDelete(url) {
    const delete_data = async () => {
        try {
            const response = await fetch(API + url, { method: "DELETE" });
            if (response.ok) {
                const responseData = await response.json();
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    title: responseData.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 3000
                })
            }
        } catch (error) {
            console.log(error);
        }
    };
    return { delete_data };
}
