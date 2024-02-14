export class Pregunta {
    /**
     * 
     * @param {string} pregunta este es el texto de la pregunta
     * @param {Array} opciones estas son las opciones de las preguntas
     * @param {string} respuesta  esta es la respuesta de la pregunta
     * @param {string} img  es la imagen para cada pregunta
     */
    constructor(pregunta, opciones, respuesta, img){
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
        this.img = img;
    }
    /**
     * 
     * @param {string} respuestaUser la respuesta del usuario en texto
     * @returns {boolean} devuelve si la respuesta del usuario es correcta
     */
    validarRespuesta(respuestaUser){
        return respuestaUser === this.respuesta;
    }
}