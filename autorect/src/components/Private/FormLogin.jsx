import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../const';
import { useState } from 'react';

export function FormLogin() {
    const [usuario, setUsurio] = useState({
        nombre_usuario: '',
        clave_usuario: ''
    });
    const navegar=useNavigate();
    const ValidateCredentials = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(usuario)
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData.llave_acceso)
                sessionStorage.setItem("llave",responseData.llave_acceso)
                navegar("main")
            }else{
                console.log(response)
            }
        } catch (error) {
            console.error(error);
        }
    }
        //En esta funcion se guardan los valores que tienen en ese momento cada input
    const inputsUpdate = (e) => {
        const { name, value } = e.target;
        setUsurio({ ...usuario, [name]: value })
    }
    return (
        <form className='flex-col bg-black w-96 h-full' onSubmit={ValidateCredentials}>
            <div className="relative">
                <input type="text" id="user_input" value={usuario.nombre_usuario} name='nombre_usuario' onChange={inputsUpdate} className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-500 border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-100 peer" placeholder=" " />
                <label htmlFor="user_input" className="absolute text-base text-white duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username</label>
            </div>
            <div className="relative mt-8">
                <input type="password" id="pass_input" value={usuario.clave_usuario} onChange={inputsUpdate} name='clave_usuario' className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-500 border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-100 peer" placeholder=" " />
                <label htmlFor="pass_input" className="absolute text-base text-white duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
            </div>
            <div className="w-full h-10 flex justify-end mt-4">
                <a href="" className="text-gray-500 font-base">Forgot password?</a>
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-red-900 h-16 w-36 rounded-xl text-lg font-bold text-white" type='submit'>Login</button>
            </div>
        </form>
    )
}