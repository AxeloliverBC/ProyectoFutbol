// apuestas.js

const proximosPartidos = [
    { id: 1, local: "Real Madrid", visitante: "Barcelona", fecha: "2024-08-01" },
    { id: 2, local: "Manchester United", visitante: "Liverpool", fecha: "2024-08-02" },
    { id: 3, local: "Bayern Munich", visitante: "Borussia Dortmund", fecha: "2024-08-03" },
    { id: 4, local: "PSG", visitante: "Olympique de Marseille", fecha: "2024-08-04" }
];

const sitiosApuestas = {
    bet365: { nombre: "Bet365", multiplicador: 1.9 },
    williamhill: { nombre: "William Hill", multiplicador: 1.85 },
    bwin: { nombre: "Bwin", multiplicador: 1.95 },
    betfair: { nombre: "Betfair", multiplicador: 2.0 },
    "1xbet": { nombre: "1xBet", multiplicador: 2.1 }
};

function cargarProximosPartidos() {
    const contenedor = document.getElementById('proximos-partidos');
    const selectPartido = document.getElementById('partido');

    proximosPartidos.forEach(partido => {
        const partidoElement = document.createElement('div');
        partidoElement.classList.add('partido', 'mb-3');
        partidoElement.innerHTML = `
            <p>${partido.local} vs ${partido.visitante}</p>
            <p>Fecha: ${partido.fecha}</p>
        `;
        contenedor.appendChild(partidoElement);

        const option = document.createElement('option');
        option.value = partido.id;
        option.textContent = `${partido.local} vs ${partido.visitante}`;
        selectPartido.appendChild(option);
    });
}

function simularApuesta(evento) {
    evento.preventDefault();
    const partidoId = document.getElementById('partido').value;
    const resultado = document.getElementById('resultado').value;
    const monto = parseFloat(document.getElementById('monto').value);
    const sitioApuestaId = document.getElementById('sitio-apuesta').value;

    if (!sitioApuestaId) {
        alert("Por favor, selecciona un sitio de apuestas.");
        return;
    }

    const partido = proximosPartidos.find(p => p.id == partidoId);
    const sitioApuesta = sitiosApuestas[sitioApuestaId];

    const resultadoApuesta = Math.random() < 0.5 ? "ganada" : "perdida";
    const ganancia = resultadoApuesta === "ganada" ? monto * sitioApuesta.multiplicador : 0;

    const resultadoElement = document.getElementById('resultado-apuesta');
    resultadoElement.innerHTML = `
        <h3>Resultado de la simulación</h3>
        <p>Partido: ${partido.local} vs ${partido.visitante}</p>
        <p>Tu predicción: ${resultado}</p>
        <p>Sitio de apuesta: ${sitioApuesta.nombre}</p>
        <p>Monto apostado: ${monto.toFixed(2)}€</p>
        <p>Resultado: Apuesta ${resultadoApuesta}</p>
        <p>Ganancia: ${ganancia.toFixed(2)}€</p>
        <p>Multiplicador aplicado: ${sitioApuesta.multiplicador}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM cargado, iniciando carga de partidos...");
    cargarProximosPartidos();
    document.getElementById('apuesta-form').addEventListener('submit', simularApuesta);
});