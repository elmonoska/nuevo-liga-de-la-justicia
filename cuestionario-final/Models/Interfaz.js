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
        if(calificacion < 80){
            const cuestionarioFinalizadoHTML = `
            <h1 class="text-center display-1">Has finalizado el cuestionario.</h1>
            <hr>
            <p class="text-center display-1 text-danger"><strong>¡Mala suerte! ☹️</strong></p>
            
            <h2 class="text-center">Tu calificacion final es de: <strong class="text-danger  display-3">${calificacion}%</strong></h2>
            <p>Al parecer aun no cumples con la calificacion minima. No te desanimes, tomate unos minutos y vuelve a intentarlo. <strong>Puedes intentarlo las veces que necesites</strong>.</p>
            <a href="javascript:location.reload()"
              class="btn btn-primary text-white text-uppercase fs-3 p-3 mb-2 w-75 mx-auto">volver a intentar</a>
            `
            const cuestionario = document.querySelector('#cuestionario')
            cuestionario.innerHTML = cuestionarioFinalizadoHTML
        }else{
            const cuestionarioFinalizadoHTML = `
            <h1 class="text-center display-1">Has finalizado el cuestionario.</h1>
            <hr>
            <p class="text-center display-1  text-success"><strong>¡Felicidades! 🥳</strong></p>
            <h2 class="text-center">Tu calificacion final es de: <strong class="text-success display-3">${calificacion}%</strong></h2>
            <p>Podemos notar que este curso ha rendido frutos. Con esto finalizamos esta prueba y ahora <strong>solo tendras que llenar el siguiente formulario con tus datos de contacto</strong>.</p>
            <p>Cuando termines, solo da clic en el boton <strong>Enviar datos </strong> y cuando recibamos la informacion nos pondremos en contacto contigo lo mas pronto posible.</p>
            <p><strong class="text-danger">Te recomendamos tambien tomar una captura de pantalla de esto como evidencia, en caso de que suceda algun error.</strong></p>
            
            <form action="https://formsubmit.co/soportetecnico@publicacionesint.com.mx" 
            method="POST" class="border py-5 px-3 d-flex flex-column justify-content-around gap-2">
                <input type="hidden" name="_template" value="table">
                <input type="hidden" name="_cc" value="servicioaclientes@publicacionesint.com.mx">
                <input type="hidden" name="_next" value="../../index.html">
                <input type="hidden" name="_subject" value="Examen Final Liga de La Justicia ¡Aprobado!">



                <p class="text-center display-5 text-primary"><strong>Datos de contrato</strong>.</p>
                <label class="col form-label">Folio:</label>
                <input class="col form-control" type="tel" name="folio" required placeholder="Escribe aqui tu folio o referencia" pattern="[0-9]{7}" title="Tu numero de folio empieza con 3 o 4 y solo esta compuesto por 7 digitos">
                
                <label class="col form-label">Nombre completo del titular del contrato:</label>
                <input class="col form-control" type="text" name="nombreTitular" required placeholder="Escribe aqui el nombre completo" pattern="[A-Za-z]{1,50}" title="El nombre solo debe tener letras">
                
                <label class="col form-label">Nombre completo del estudiante:</label>
                <input class="col form-control" type="text" name="nombreEstudiante" required placeholder="Escribe aqui tu nombre completo" pattern="[A-Za-z]{1,50}" title="El nombre solo debe tener letras">
                
                <label class="col form-label">Edad:</label>
                <input class="col form-control" type="tel" name="edad" required placeholder="Escribe aqui tu edad" pattern="[0-9]{2}" title="La edad solo puede tener numeros">

                <label class="col form-label">Correo electronico:</label>
                <input class="col form-control" type="email" name="email" required placeholder="Escribe aqui tu correo" title="Verifica bien tu correo">
                

                <hr>
                <p class="text-center display-5 text-primary"><strong>Domicilio donde quieres recibir tu diploma</strong>.</p>
                <label class="col form-label">Calle:</label>
                <input class="col form-control" type="text" name="calle" required placeholder="Escribe aqui tu calle" pattern="[A-Za-z0-9]{1,40}">
                
                <label class="col form-label">Numero de Exterior:</label>
                <input class="col form-control" type="text" name="numeroExterior" required placeholder="Escribe aqui tu numero de exterior" pattern="[A-Za-z0-9]{1,20}">
                
                <label class="col form-label">Numero de interior:</label>
                <input class="col form-control" type="text" name="numeroInterior" placeholder="Escribe aqui tu numero de interior" pattern="[A-Za-z0-9]{1,20}">
                
                <label class="col form-label">Entre calles:</label>
                <input class="col form-control" type="text" name="entreCalle" required placeholder="Escribe aqui las entre calles" pattern="[A-Za-z0-9]{1,45}">
                
                <label class="col form-label">Referencias (color y tipo de fachada):</label>
                <input class="col form-control" type="text" name="referencias" required placeholder="Escribe aqui la referencia de tu domicilio" pattern="[A-Za-z0-9]{1,75}">
                
                <label class="col form-label">Colonia:</label>
                <input class="col form-control" type="text" name="colonia" required placeholder="Escribe aqui tu colonia"pattern="[A-Za-z0-9]{1,45}">
                
                <label class="col form-label">Delegacion o Municipio:</label>
                <input class="col form-control" type="text" name="delegacion" required placeholder="Escribe aqui tu delegacion o Municipio" pattern="[A-Za-z0-9]{1,45}">
                
                <label class="col form-label">Estado:</label>
                <input class="col form-control" type="text" name="estado" required placeholder="Escribe aqui tu estado" pattern="[A-Za-z]{1,45}" title="El estado solo debe tener letras">
                
                <label class="col form-label">Codigo Postal:</label>
                <input class="col form-control" type="tel" name="codigoPostal" required placeholder="Escribe aqui tu codigo postal" pattern="[0-9]{5}" title="El codigo postal debe componerse de 5 numeros ">
                
                <label class="col form-label">Telefono de casa:</label>
                <input class="col form-control" type="tel" name="telefonoCasa" required placeholder="Escribe aqui tu telefono de casa" pattern="[0-9]{10}" title="El numero de casa debe ser a 10 digitos">
                
                <label class="col form-label">Celular:</label>
                <input class="col form-control" type="tel" name="telefonoCelular" required placeholder="Escribe aqui tu celular" pattern="[0-9]{10}" title="El numero de casa debe ser a 10 digitos">

                <button class="btn btn-primary p-3" type="submit">Enviar datos</button>


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