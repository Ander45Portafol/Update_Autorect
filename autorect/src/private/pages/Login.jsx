import '../styles/login.css'
import { FormLogin } from '../../components/Private/FormLogin'

export function LoginPrivate() {
    return (
            <div className='contained_login overflow-hidden h-screen w-screen'>
                <div className='bg-transparent h-full flex justify-start'>
                    <div className="h-screen w-1/2">
                        <div className="w-full h-14 pl-8">
                            <img src="images/logo.svg" alt="logotipo" className='h-8 mt-14' />
                        </div>
                        <div className="w-full h-48 texto">
                            <h1 className='font-bold text-xl text-gray-400'>WELCOME TO <span className='text-red-900 text-xl'>AUTORECT</span></h1>
                            <h2 className='text-white text-6xl mt-4 font-extrabold'>Let's login to your</h2>
                            <h2 className='text-white text-6xl mt-2 font-extrabold'>Account <span className='text-red-900 text-6xl mt-2 font-extrabold'>.</span></h2>
                        </div>
                        <div className="w-full h-64 flex justify-center mt-14">
                            <FormLogin />
                        </div>
                    </div>
                </div>
            </div>
    )
}