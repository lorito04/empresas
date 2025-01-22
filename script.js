// Listas para almacenar datos de jugadores y equipos
const employees = []; // Lista de jugadores
const teams = []; // Lista de equipos

// Lista de cargos (funciones en la empresa)
const cargos = [
    "contador",
    "asesor",
    "operador",
    "gerente",
    "administrador",
    "ingeniero",
    "tramitador",
    "supervisor",
    "director"
];

// Carga las posiciones en el formulario
function loadcargo() {
    const cargoSelect = document.getElementById("employeePosition"); // Obtiene el elemento select para las posiciones
    cargoSelect.innerHTML = `<option value="">Seleccione un cargo</option>`; // Agrega la opción predeterminada
    cargos.forEach(cargo => {
        const option = document.createElement("option"); // Crea un elemento de opción
        option.value = cargo; // Establece el valor de la opción
        option.textContent = cargo; // Establece el texto visible de la opción
        cargoSelect.appendChild(option); // Agrega la opción al selector
    });
}

// Carga los equipos en el selector del formulario de jugadores
function updateTeamSelect() {
    const teamSelect = document.getElementById("employeeTeam"); // Obtiene el elemento select para los equipos
    teamSelect.innerHTML = `<option value="">Seleccione la empresa donde trabaja</option>`; // Agrega la opción predeterminada
    teams.forEach(team => {
        const option = document.createElement("option"); // Crea un elemento de opción
        option.value = team.name; // Establece el valor de la opción como el nombre del equipo
        option.textContent = team.name; // Establece el texto visible como el nombre del equipo
        teamSelect.appendChild(option); // Agrega la opción al selector
    });
}

// Maneja el formulario para agregar equipos
const teamForm = document.getElementById("addTeamForm"); // Obtiene el formulario para agregar equipos
teamForm.addEventListener("submit", e => {
    e.preventDefault(); // Evita el envío predeterminado del formulario
    const name = document.getElementById("teamName").value; // Obtiene el nombre del equipo
    const logoFile = document.getElementById("teamLogo").files[0]; // Obtiene el archivo del logo
    const logo = logoFile ? URL.createObjectURL(logoFile) : "assets/images/default-team.jpg"; // Genera la URL del logo o usa una imagen predeterminada

    if (!name) {
        alert("Por favor, ingrese el nombre del equipo."); // Muestra un mensaje si el nombre está vacío
        return; // Finaliza la ejecución
    }

    const team = { name, logo }; // Crea un objeto equipo
    teams.push(team); // Agrega el equipo a la lista de equipos
    updateTeamCards(); // Actualiza las tarjetas de equipos
    updateTeamSelect(); // Actualiza el selector de equipos
    teamForm.reset(); // Resetea el formulario
});

// Actualiza la visualización de los equipos
function updateTeamCards() {
    const teamContainer = document.getElementById("teamCardsContainer"); // Obtiene el contenedor de tarjetas de equipos
    teamContainer.innerHTML = ""; // Limpia el contenido existente
    teams.forEach(team => {
        const card = `<div class="team-card">
            <img src="${team.logo}" alt="${team.name}" style="width: 100px; height: 100px; border-radius: 50%;"> <!-- Imagen del logo del equipo -->
            <h3>${team.name}</h3> <!-- Nombre del equipo -->
        </div>`;
        teamContainer.innerHTML += card; // Agrega la tarjeta al contenedor
    });
}

// Maneja el formulario para agregar jugadores
const playerForm = document.getElementById("addPlayerForm"); // Obtiene el formulario para agregar jugadores
playerForm.addEventListener("submit", e => {
    e.preventDefault(); // Evita el envío predeterminado del formulario
    const name = document.getElementById("employeeName").value; // Obtiene el nombre del empleado
    const age = document.getElementById("yearsold").value; // Obtiene la edad del empleado
    const position = document.getElementById("employeePosition").value; // Obtiene la posición seleccionada
    const team = document.getElementById("employeeTeam").value; // Obtiene el equipo seleccionado
    const photoFile = document.getElementById("employeePhoto").files[0]; // Obtiene el archivo de la foto
    const photo = photoFile ? URL.createObjectURL(photoFile) : "assets/images/default-player.jpg"; // Genera la URL de la foto o usa una imagen predeterminada

    if (!name || !age || !position || !team) {
        alert("Por favor, complete todos los campos obligatorios."); // Muestra un mensaje si falta algún campo obligatorio
        return; // Finaliza la ejecución
    }

    const player = { name, age, position, team, photo }; // Crea un objeto jugador
    employees.push(player); // Agrega el jugador a la lista de jugadores
    updatePlayerTable(); // Actualiza la tabla de jugadores
    playerForm.reset(); // Resetea el formulario
});

// Actualiza la tabla de jugadores
function updatePlayerTable() {
    const playerTable = document.getElementById("playerTableBody"); // Obtiene el cuerpo de la tabla de jugadores
    playerTable.innerHTML = ""; // Limpia el contenido existente
    players.forEach(player => {
        const row = `<tr>
            <td><img src="${player.photo}" alt="${player.name}" style="width: 50px; height: 50px; border-radius: 50%;"></td> <!-- Foto del jugador -->
            <td>${player.name}</td> <!-- Nombre del jugador -->
            <td>${player.age}</td> <!-- Edad del jugador -->
            <td>${employees.position}</td> <!-- Posición del jugador -->
            <td>${employees.team}</td> <!-- Equipo del jugador -->
        </tr>`;
        playerTable.innerHTML += row; // Agrega la fila a la tabla
    });
}

// Inicializa el sistema al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    loadcargo(); // Carga las posiciones en el selector
    updateTeamSelect(); // Carga los equipos en el selector
});