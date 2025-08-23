const data_date = new Date()
const day = data_date.getDate();
const month = data_date.getMonth() + 1; // Recuerda que los meses comienzan desde 0
const year = data_date.getFullYear();
export const formatedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
export const user_columns=["Image","Username","Employee","Status","Type","Actions"]
export const data_user=[{ID:1,Image:'null',Username:'Anderxd',Employee:'20230415', Status:true, Type:'Admin'},{ID:2,Image:'null',Username:'Pepito',Employee:'20210145', Status:false, Type:'Manager'}]
export const employee_columns=["ID","Apellido","Nombre", "Documento","Estado", "Area Trabajo","Acciones"]
export const data_employee=[{ID:1,Lastname:"Aguilar Ramos",Name:"Anderson Isaac",DUI:"28912871-2",Status:true,Type:"Admin"}]
export const client_columns=["Lastname","Name","Username","DUI","Phone number","Status","Actions"]
export const data_client=[{ID:1,Lastname:"Guardado Hernandez",Name:"Michelle Abigail",DUI:"12345678-9",Status:false,Phone_number:"7682-2134",Username:"Michixd"}]
export const product_columns=["Image","Product name","Price","Model","Brand","Status","Actions"]
export const data_product=[{ID:1,Image:'null',Product_name:'Brakes',Price:'$60.34',Model:'Yaris, 2015',Brand:'Toyota',Status:true}]
export const order_columns=["Ordern N°","Order date", "Client", "Employee", "Status","Actions"]
export const data_order=[{ID:1,Date:'2023-07-25',Client:'Antonio Rodriguez',Employee:'Anderson Aguilar',Status:true}]
export const category_columns=["Name category","Decription","Actions"]
export const data_category=[{ID:1,Name_category:'Frenos',Description:'In this category you will find all kinds of spare parts for the brakes of a car'}]
export const brand_columns=["ID","Logo","Brand name","Actions"]
export const data_brand=[{ID:1,Logo:'null',Brandname:'Toyota'}]
export const model_columns=["ID", "Model name","Model year","Brand", "Actions"]
export const data_model=[{ID:1,Model_name:'Yaris',Model_year:'2015',Brand:'Toyota'}]

//Funciones para abrir y cerrar el modal
import { Modal } from 'flowbite';

//Funcion para cerrar el modal
export const close_modal = () => {
    const target = document.getElementById('modal');
    const options = {
        backdrop: 'static',
        placement: 'center'
    }
    const modal = new Modal(target, options)
    modal.hide();
}
//Funcion para abrir el modal
export const open_modal = () => {
    const target = document.getElementById('modal');
    const options = {
        backdrop: 'static',
        placement: 'center'
    }
    const modal = new Modal(target, options)
    modal.show();
}
//Dirreccion api
export const API='http://127.0.0.1:8000/api/';

//Tengo que hacer una variable para mejorar los select y adaptarlo a una forma en que funcione con los datos de la api