import {Link } from 'react-router-dom';

export function FormLogin() {
    return (
            <form className='flex-col bg-black w-96 h-full'>
                <div className="relative">
                    <input type="text" id="user_input" className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-500 border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-100 peer" placeholder=" " />
                    <label htmlFor="user_input" className="absolute text-base text-white duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username</label>
                </div>
                <div className="relative mt-8">
                    <input type="password" id="pass_input" className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-500 border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-100 peer" placeholder=" " />
                    <label htmlFor="pass_input" className="absolute text-base text-white duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                </div>
                <div className="w-full h-10 flex justify-end mt-4">
                    <a href="" className="text-gray-500 font-base">Forgot password?</a>
                </div>
                <div className="flex justify-center mt-4">
                    <Link to="main">
                        <button className="bg-red-900 h-16 w-36 rounded-xl text-lg font-bold text-white">Login</button>
                    </Link>
                </div>
            </form>
    )
}