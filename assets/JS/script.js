const nuevaTarea = document.getElementById("anotar");
const listaTarea = document.getElementById("lista");
const btnAgregarTarea = document.getElementById("boton");
const totalTareas = document.getElementById("totalDeTareas");
const tareasRealizadas = document.getElementById("tareasRealizadas");

let datos = [
  { id: 1, tarea: "Hacer mercado", check:false },
  { id: 2, tarea: "Estudiar para la prueba", check:false },
  { id: 3, tarea: "Sacar a pasear a Kira", check:false },
  { id: 4, tarea: "Sacar la basura", check:false },
  { id: 5, tarea: "Lavar la Ropa", check:false },
  { id: 6, tarea: "Limpiar el Baño", check:false },
  { id: 7, tarea: "Hacer la Cama", check:false },
];

document.addEventListener("DOMContentLoaded", () => {
  renderizarTareas();
});

function renderizarTareas() {
  listaTarea.innerHTML = "";

  datos.forEach((elemento, index) => {
    elemento.id = index + 1;
  });

  datos.forEach((elemento) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${elemento.id}</td>
        <td>${elemento.tarea}</td>
        <td>
          <input type="checkbox" id="check-${elemento.id}" ${elemento.check ? "checked" : ""} onchange="actualizarEstado(${elemento.id})">
        </td>
        <td class="delete-btn" onclick="eliminarTareas(${elemento.id})">✖</td>     
    `;
    listaTarea.appendChild(fila);
});

contadorTotal();
}

function actualizarEstado(id) {
const tarea = datos.find((elemento) => elemento.id === id);
if (tarea) {
    tarea.check = !tarea.check; 
}
contadorTotal();
}


function eliminarTareas(id) {
  datos = datos.filter((elemento) => elemento.id !== id);
  renderizarTareas(); 
}

function contadorTotal() {
  totalTareas.innerText = datos.length;
  tareasRealizadas.innerText = document.querySelectorAll(
    "#lista input:checked"
  ).length;
}

btnAgregarTarea.addEventListener("click", () => {
  if (nuevaTarea.value.trim() === "") {
    return alert("Ingresar una tarea válida");
  }

  datos.push({
    id: datos.length + 1, 
    tarea: nuevaTarea.value,
  });

  nuevaTarea.value = "";
  renderizarTareas();
});
