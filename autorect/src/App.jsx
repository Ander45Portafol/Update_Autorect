import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPrivate } from "./private/pages/Login";
import 'flowbite/dist/flowbite.min.css';
import './index.css';
import 'boxicons'
import { User } from './private/pages/User';
import { Employee } from './private/pages/Employee';
import { Client } from './private/pages/Client';
import { Product } from './private/pages/Product';
import { Order } from './private/pages/Order';
import { Category } from './private/pages/Category';
import { Model } from './private/pages/Model';
import { Dashboard } from './private/pages/Dashboard';
import Swal from 'sweetalert2'

function App() {
  async function validateConnection() {
    try{
      const response = await fetch('http://127.0.0.1:8000/api/connection', {
        method: 'GET', // Cambia esto según el tipo de petición que necesitas
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        Swal.fire({
            title: 'Ocurrio un problema',
            text: 'No se puede establecer la conexión con el servidor',
            icon: 'error',
            showConfirmButton: false, // Desactiva el botón de confirmación
            showCancelButton: false,  // Desactiva el botón de cancelar
            allowOutsideClick: false, // Opcional: Evita que el usuario cierre el modal haciendo clic fuera
            allowEscapeKey: false 
        })
      }else{

      }
    }catch(Exception){
      Swal.fire({
        title: 'Ocurrio un problema',
        text: 'No se puede establecer la conexión con el servidor',
        icon: 'error',
        showConfirmButton: false, // Desactiva el botón de confirmación
        showCancelButton: false,  // Desactiva el botón de cancelar
        allowOutsideClick: false, // Opcional: Evita que el usuario cierre el modal haciendo clic fuera
        allowEscapeKey: false })
    }
    
  }
  validateConnection()
  return (    
    <Router>
    <Routes>
      <Route path="/" element={<LoginPrivate />} />
      <Route path='main' element={<Dashboard />} />
      <Route path='user' element={<User />} />
      <Route path='employee' element={<Employee />} />
      <Route path='client' element={<Client />} />
      <Route path='product' element={<Product />} />
      <Route path='order' element={<Order />} />
      <Route path='category' element={<Category />} />
      <Route path='model' element={<Model />} />
    </Routes>
  </Router>
  )
}

export default App
