import {Contacto} from "./classContacto.js";

//declaro las variables
console.log('prueba desde admin.js');
const contacto = new Contacto('Pereyra', 'Franco', 'franco@mail.com', 123456789, 'sdfsf', 'Calle 123');
console.log(contacto);
const modalContacto = new bootstrap.Modal(document.getElementById('modalAdminContacto'))
const btnNuevo = document.getElementById('btnNuevo');

//funciones
const mostrarModal = () => {
    modalContacto.show();
}

//aqui agrego la logica del CRUD
btnNuevo.addEventListener('click', mostrarModal)
