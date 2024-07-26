// noticias.js

const noticiasActuales = [
    {
        titulo: "Messi lidera al Inter Miami a la victoria",
        resumen: "Lionel Messi anotó dos goles en la victoria 3-1 del Inter Miami sobre el Orlando City.",
        link: "https://cnnespanol.cnn.com/2023/08/03/lionel-messi-dos-goles-victoria-inter-miami-contra-orlando-city-reux/"
    },
    {
        titulo: "Real Madrid anuncia nuevo fichaje",
        resumen: "El club blanco ha confirmado la llegada de una joven promesa brasileña para la próxima temporada.",
        link: "https://sport.pe/real-madrid/la-esperada-llegada-de-endrick-al-real-madrid/"
    },
    {
        titulo: "Controversia en la Premier League",
        resumen: "Una decisión del VAR en el partido entre Liverpool y Manchester City genera debate.",
        link: "https://cnnespanol.cnn.com/2023/10/03/error-monumental-liverpool-crisis-futbol-ingles-trax/"
    },
    {
        titulo: "Nuevo récord de asistencia en el fútbol femenino",
        resumen: "El partido de la Liga F entre Barcelona y Real Madrid bate el récord de espectadores.",
        link: "https://www.france24.com/es/deportes/20220331-barca-madrid-femenino-record-asistencia"
    }
];

function cargarNoticiasActuales() {
    const contenedorNoticias = document.getElementById('noticias-actuales');
    noticiasActuales.forEach(noticia => {
        const noticiaElement = document.createElement('div');
        noticiaElement.classList.add('noticia-actual', 'mb-3');
        noticiaElement.innerHTML = `
            <h4>${noticia.titulo}</h4>
            <p>${noticia.resumen}</p>
            <a href="${noticia.link}" target="_blank" class="btn btn-primary btn-sm">Leer más</a>
        `;
        contenedorNoticias.appendChild(noticiaElement);
    });
}

document.addEventListener('DOMContentLoaded', cargarNoticiasActuales);