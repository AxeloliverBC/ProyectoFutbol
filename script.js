// Inicializar AOS (Animate On Scroll)
AOS.init();

// Función para crear el gráfico de goles
function crearGraficoGoles() {
    const ctxGoles = document.getElementById('golesChart');
    if (ctxGoles) {
        new Chart(ctxGoles, {
            type: 'bar',
            data: {
                labels: ['Equipo A', 'Equipo B', 'Equipo C', 'Equipo D', 'Equipo E'],
                datasets: [{
                    label: 'Goles marcados',
                    data: [65, 59, 80, 81, 56],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// Función para crear el gráfico de tarjetas
function crearGraficoTarjetas() {
    const ctxTarjetas = document.getElementById('tarjetasChart');
    if (ctxTarjetas) {
        new Chart(ctxTarjetas, {
            type: 'pie',
            data: {
                labels: ['Liga A', 'Liga B', 'Liga C', 'Liga D'],
                datasets: [{
                    label: 'Tarjetas',
                    data: [300, 250, 200, 150],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de barras para Goles por Equipo
    var ctxGoles = document.getElementById('golesChart').getContext('2d');
    new Chart(ctxGoles, {
        type: 'bar',
        data: {
            labels: ['Barcelona', 'Real Madrid', 'Bayern Munich', 'Manchester City', 'Liverpool', 'AC Milan', 'Manchester United', 'Inter de Milan', 'Ajax'],
            datasets: [{
                label: 'Goles a Favor',
                data: [68, 70, 84, 78, 75, 62, 58, 66, 80],
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Goles en Contra',
                data: [29, 31, 30, 28, 32, 35, 42, 33, 25],
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Goles por Equipo en la Temporada'
                }
            }
        }
    });
    // Gráfico de torta para Tarjetas por Liga
    var ctxTarjetas = document.getElementById('tarjetasChart').getContext('2d');
    new Chart(ctxTarjetas, {
        type: 'pie',
        data: {
            labels: ['La Liga', 'Premier League', 'Bundesliga', 'Serie A', 'Ligue 1'],
            datasets: [{
                data: [980, 1020, 890, 1050, 975],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Tarjetas Amarillas por Liga'
                }
            }
        }
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     // Tu código existente aquí...

//     // Añadir este nuevo código al final
//     const links = document.querySelectorAll('.card .btn-primary');
//     links.forEach(link => {
//         link.addEventListener('click', function(event) {
//             console.log('Enlace clickeado:', this.href);
//             // No prevenimos el comportamiento por defecto para que el enlace funcione
//         });
//     });

//     // Mover la inicialización de AOS aquí si no está ya en tu script.js
//     AOS.init();
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var audio = document.getElementById('ambienteEstadio');
    
//     // Ajusta el volumen (0.3 es un 30% del volumen máximo, ajusta según necesites)
//     audio.volume = 0.3;

//     function playAudio() {
//         audio.play().catch(error => {
//             console.log("Reproducción automática prevenida: ", error);
//             // Aquí puedes agregar un mensaje sutil para el usuario si lo deseas
//         });
//     }

//     // Intenta reproducir el audio automáticamente
//     playAudio();

//     // Agrega un evento de clic a todo el documento para intentar reproducir el audio
//     // Esto ayuda en casos donde la reproducción automática está bloqueada
//     document.addEventListener('click', function() {
//         if (audio.paused) {
//             playAudio();
//         }
//     }, { once: true }); // El 'once: true' asegura que este evento solo se active una vez
// });

