import { Cuestionario } from "./Models/Cuestionario.js";
import { Interfaz } from "./Models/Interfaz.js";
import { Pregunta } from "./Models/Pregunta.js";
import { examenFinal } from "./preguntas.js";

const preguntasDesordenadas = examenFinal.sort(() => Math.random()-0.5)
const nuevasPreguntas = preguntasDesordenadas.map(pregunta => {
    return new Pregunta(pregunta.pregunta, pregunta.opciones.sort(()=> Math.random()-0.5), pregunta.respuesta, pregunta.img);
})

/**
 * 
 * @param {Cuestionario} cuestionario es un objeto nuevo de Cuestionario
 * @param {Interfaz} interfaz  es un objeto nuevo de Interfaz
 */
function recargarPagina(cuestionario, interfaz) {
    if (cuestionario.haFinalizado()) {
        interfaz.muestraCalificacion(Number((cuestionario.calificacion/cuestionario.preguntas.length)*100).toFixed(1))

    } else {
        interfaz.muestraPregunta(cuestionario.obtenerPreguntaActual().pregunta);
        interfaz.muestraImg(cuestionario.obtenerPreguntaActual().img);
        interfaz.muestrasOpciones(cuestionario.obtenerPreguntaActual().opciones, (opcionActual) => {
            cuestionario.adivinar(opcionActual)
            setTimeout(() => {
                recargarPagina(cuestionario, interfaz)
            }, 500);
        })
        interfaz.muestraProgreso(cuestionario.preguntaIndice + 1, nuevasPreguntas.length)
    }
}

function menu() {
    const cuestionario = new Cuestionario(nuevasPreguntas);
    const interfaz = new Interfaz();
    recargarPagina(cuestionario, interfaz)
}

const empezarCuestionario = document.querySelector('#empezar')
const instrucciones = document.querySelector('#instrucciones')
empezarCuestionario.addEventListener('click', () => {
    setTimeout(() => {
        instrucciones.classList.add('d-none')
        menu();
    }, 500);
})
