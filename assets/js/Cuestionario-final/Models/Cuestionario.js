//@ts-check
import { Pregunta } from "./Pregunta.js";

export class Cuestionario {

    preguntaIndice = 0;
    calificacion  = 0;

    /**
     * 
     * @param {Pregunta[]} preguntas un arreglo de preguntas
     */
    constructor(preguntas){
        this.preguntas = preguntas;
    }

    /**
     * 
     * @returns {Pregunta} devolvera la pregunta encontrara
     */
    obtenerPreguntaActual(){
        return this.preguntas[this.preguntaIndice];
    }

    haFinalizado(){
        return this.preguntas.length === this.preguntaIndice
    }

    /**
     * 
     * @param {string} respuesta la respuesta de la pregunta
     */
    adivinar(respuesta){
        if(this.obtenerPreguntaActual().validarRespuesta(respuesta)){
            this.calificacion++;
        }
        this.preguntaIndice++;
    }
}
