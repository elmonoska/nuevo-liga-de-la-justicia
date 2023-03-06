export class Interfaz {
    constructor() {

    }
    /**
     * 
     * @param {string} texto esta es la pregunta que se mostrara en el DOM
     */
    muestraPregunta(texto) {
        const tituloPregunta = document.querySelector('#pregunta');
        tituloPregunta.textContent = texto;
    }

    /**
     * 
     * @param {string} img la imagen de cada pregunta
     */
    muestraImg(img){
        const imgPregunta = document.querySelector('#imgPregunta');
        imgPregunta.src = img;
    }

    /**
     * 
     * @param {string[]} opciones las opciones de la pregunta
     */
    muestrasOpciones(opciones, callback) {
        const contenedorOpciones = document.querySelector('#opciones');
        contenedorOpciones.textContent = ''
        for (let i = 0; i < opciones.length; i++) {
            {
                const button = document.createElement('button');
                button.textContent = opciones[i]
                button.className = 'btn btn-light p-4 w-75 border border-dark border-opacity-75 shadow my-2 text-capitalize'
                button.addEventListener('click', () => callback(opciones[i]))

                contenedorOpciones.appendChild(button)
            }
        }
    }

    /**
     * 
     * @param {number} calificacion es el puntaje final del cuestionario
     */
    muestraCalificacion(calificacion){
        if(calificacion < 50){
            const cuestionarioFinalizadoHTML = `
            <h1 class="text-center display-1">Has finalizado el cuestionario.</h1>
            <hr>
            <p class="text-center display-1  text-danger"><strong>Lo lamento ☹️</strong></p>
            
            <h2 class="text-center">Tu calificacion final es de: <strong class="text-danger  display-3">${calificacion}%</strong></h2>
            <p>Al parecer aun no cumples con la calificacion minima. No te desanimes, tomate unos minutos y vuelve a intentarlo.</p>
            <a href="javascript:location.reload()"
              class="btn btn-primary text-white text-uppercase fs-3 p-3 mb-2 w-75 mx-auto">volver a intentar</a>
            `
            const cuestionario = document.querySelector('#cuestionario')
            cuestionario.innerHTML = cuestionarioFinalizadoHTML
        }else{
            const cuestionarioFinalizadoHTML = `
            <h1 class="text-center display-1">Has finalizado el cuestionario.</h1>
            <hr>
            <p class="text-center display-1  text-success"><strong>Felicidades 🥳</strong></p>
            <h2 class="text-center">Tu calificacion final es de: <strong class="text-danger  display-3">${calificacion}%</strong></h2>
            <p>Podemos notar que este curso ha rendido frutos. Con esto finalizamos esta prueba y ahora solo tendras que llenar tus datos de contacto.</p>
            <p>Cuando termines de llegar tus datos, solo da clic en el boton <strong>Enviar datos </strong> y cuando recibamos la informacion nos pondremos en contacto contigo. </p>
            <p><strong class="text-danger">Te recomendamos tambien tomar una captura de pantalla de esto en caso de que suceda algun problema</strong></p>
            
            <form action="https://formsubmit.co/soportetecnicopublicacionesint@gmail.com" 
            method="POST" class="border py-5 px-3 row row-cols-1 gap-2">
                <input type="hidden" name="_template" value="table">
                <input type="hidden" name="_next" value="https://www.google.com.mx">
                <input type="hidden" name="_subject" value="Examen Final Liga de La Justicia ¡Aprobado!">



                <p class="text-center">Datos de contrato</p>
                <label class="col form-label">Folio:</label>
                <input class="col form-control" type="number" name="folio" required placeholder="Escribe aqui tu folio o referncia">
                
                <label class="col form-label">Nombre del titular del contrato:</label>
                <input class="col form-control" type="text" name="nombreTitular" required placeholder="Escribe aqui el nombre">
                
                <label class="col form-label">Nombre del estudiante:</label>
                <input class="col form-control" type="text" name="nombreEstudiante" required placeholder="Escribe aqui tu nombre">
                
                <label class="col form-label">Edad:</label>
                <input class="col form-control" type="number" name="edad" required placeholder="Escribe aqui tu edad">

                <label class="col form-label">Correo electronico:</label>
                <input class="col form-control" type="email" name="email" required placeholder="Escribe aqui tu correo">
                

                <hr>
                <p class="text-center">Domicilio donde quieres recibir tu diploma</p>
                <label class="col form-label">Calle:</label>
                <input class="col form-control" type="text" name="calle" required placeholder="Escribe aqui tu calle">
                
                <label class="col form-label">Numero de Exterior:</label>
                <input class="col form-control" type="text" name="numeroExterior" required placeholder="Escribe aqui tu numero de exterior">
                
                <label class="col form-label">Numero de interior:</label>
                <input class="col form-control" type="text" name="numeroInterior" required placeholder="Escribe aqui tu numero de interior">
                
                <label class="col form-label">Entre calles:</label>
                <input class="col form-control" type="text" name="entreCalle" required placeholder="Escribe aqui las entre calles">
                
                <label class="col form-label">Referencias (color y tipo de fachada):</label>
                <input class="col form-control" type="text" name="referencias" required placeholder="Escribe aqui la referencia de tu domicilio">
                
                <label class="col form-label">Colonia:</label>
                <input class="col form-control" type="text" name="colonia" required placeholder="Escribe aqui tu colonia">
                
                <label class="col form-label">Delegacion:</label>
                <input class="col form-control" type="text" name="delegacion" required placeholder="Escribe aqui tu delegacion">
                
                <label class="col form-label">Ciudad:</label>
                <input class="col form-control" type="text" name="ciudad" required placeholder="Escribe aqui tu ciudad">
                
                <label class="col form-label">Estado:</label>
                <input class="col form-control" type="text" name="estado" required placeholder="Escribe aqui tu estado">
                
                <label class="col form-label">C.P.:</label>
                <input class="col form-control" type="number" name="codigoPostal" required placeholder="Escribe aqui tu codigo postal">
                
                <label class="col form-label">Telefono de casa:</label>
                <input class="col form-control" type="tel" name="telefonoCasa" required placeholder="Escribe aqui tu telefono de casa">
                
                <label class="col form-label">Celular:</label>
                <input class="col form-control" type="tel" name="telefonoCelular" required placeholder="Escribe aqui tu celular">

                <button class="btn btn-primary p-2" type="submit">Enviar datos</button>


            </form>
            `
            const cuestionario = document.querySelector('#cuestionario')
            cuestionario.innerHTML = cuestionarioFinalizadoHTML
            
        }
    }

    /**
     * 
     * @param {number} preguntaActual es la pregunta actual en el cuestionario
     * @param {number} total el total de numero de pregunta
     */
    muestraProgreso(preguntaActual, total){
        const progreso = document.querySelector('#progreso')
        progreso.innerHTML = `Pregunta ${preguntaActual} de ${total}`
    }
}