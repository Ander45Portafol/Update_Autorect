// hooks/useEmployeeForm.js
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { API,close_modal } from "../const";


export const useEmployeeForm = (modalState, idEmpleado, setEmployees) => {
    const [data, setData] = useState({
        id_empleado: '',
        nombre_empleado: '',
        apellido_empleado: '',
        correo_empleado: '',
        direccion_empleado: '',
        estado_empleado: '',
        telefono_empleado: '',
        fecha_nac_empleado: '',
        tipo_documento: '',
        numero_documento: '',
        area_trabajo: ''
    });

    useEffect(() => {
        if (modalState === 2 && idEmpleado) {
            chargeData(idEmpleado);
        }
    }, [modalState, idEmpleado]);

    const chargeData = async (id_empleado) => {
        try {
            const response = await fetch(`${API}empleados/${id_empleado}`);
            if (response.ok) {
                const responseData = await response.json();
                setData(responseData.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const createData = async (formData) => {
        try {
            const response = await fetch(`${API}empleados`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const result = await response.json();
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    title: result.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 3000
                });
                setEmployees(prev => [...prev, result.data]);
                close_modal();
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Ocurrió un problema",
                text: error.message,
                icon: 'error',
                showConfirmButton: false,
                timer: 3000
            });
        }
    };

    const updateData = async (formData, id) => {
        try {
            const response = await fetch(`${API}empleados/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const result = await response.json();
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    title: result.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 3000
                });
                const updatedEmployees = await fetch(`${API}empleados`);
                const responseData = await updatedEmployees.json();
                setEmployees(responseData.data);
                close_modal();
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Ocurrió un problema",
                text: error.message,
                icon: 'error',
                showConfirmButton: false,
                timer: 3000
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (modalState === 1) {
            await createData(data);
        } else if (modalState === 2) {
            await updateData(data, idEmpleado);
        }
    };

    return {
        data,
        setData,
        handleSubmit
    };
};
