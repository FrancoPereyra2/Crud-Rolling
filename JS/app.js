//extraer el parametro de la url
console.log(window.location.search)
const parametroId = new URLSearchParams(window.location.search).get('id')
console.log(parametroId)

//buscar el id en el localstorage
const listaContactos = JSON.parse(localStorage.getItem("listaContactosKey")) || [];
//dibujar el objeto en la card

const contactoBuscado = listaContactos.find((contacto)=> contacto.id === parametroId)
console.log(contactoBuscado)

const seccionPrincipal = document.getElementById('contenedorCard')
seccionPrincipal.innerHTML = `<div class="card mb-3" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src= ${contactoBuscado.foto} class="img-fluid rounded-start" alt="${contactoBuscado.apellido}">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${contactoBuscado.apellido}, ${contactoBuscado.nombre}</h5>
                      <ul>
                        <li>Dirección: ${contactoBuscado.direccion}</li>
                        <li>Teléfono: ${contactoBuscado.telefono}</li>
                        <li>Github: ${contactoBuscado.github}</li>
                        <li>Email: ${contactoBuscado.email}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>`