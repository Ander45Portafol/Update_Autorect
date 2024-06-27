import { ButtonNav } from './ButtonNav';
import Swal from 'sweetalert2'
export function Sidebar() {
const log_out=()=>{
    Swal.fire({
        title: 'Log Out',
        text: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton:true,
      }).then((result)=>{
        if (result.isConfirmed) {
            window.location.assign('/')
        }
      })
      
}
    return (
        <nav className="h-full w-full relative" id="sidebar">
            <div className="flex justify-center pt-10">
                <img src="images/logo.svg" alt="" className="w-8" />
            </div>
            <div className="options flex mt-14 justify-center">
                <ul className="flex-col">
                    <ButtonNav direction='/main' nameicon='grid-alt'/>
                    <ButtonNav direction='/user' nameicon='user-circle'/>
                    <ButtonNav direction='/employee' nameicon='group'/>
                    <ButtonNav direction='/client' nameicon='user-pin'/>
                    <ButtonNav direction='/product' nameicon='cart-alt'/>
                    <ButtonNav direction='/order' nameicon='box'/>
                    <ButtonNav direction='/category' nameicon='category-alt'/>
                    <ButtonNav direction='/model' nameicon='car-garage'/>
                </ul>
            </div>
            <div className="log_out flex justify-center mt-10 pt-2">
                <button onClick={log_out} className="w-14 h-12 bg-red-900 rounded-lg flex justify-center items-center">
                    <box-icon name='log-out' type='solid' color='white' size='28px'></box-icon>
                </button>
            </div>
        </nav>
    )
}