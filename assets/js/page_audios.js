import { TRACKS_COLLECTION } from "./data/TRACKS_COLLECTION.js";

const $listSelect = document.getElementById('mission-select');
const $trackSelect = document.getElementById('track-select');
const $trackTitle = document.getElementById('track-title');
const $trackListen = document.getElementById('track-listen');

/**
 * Crea un elemento <option> para un select
 * @param {string} value Valor del atributo value del option
 * @param {string} text Valor del text content del option
 * @returns {HTMLOptionElement}
 */
function createOptionElement(value, text) {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = text;
  return option;
}

// Rellena el select de lista de audios a partir del TRACKS_COLLECTION
Object.keys(TRACKS_COLLECTION).forEach(key => {
  // Separa la cadena por guiones bajos, capitaliza cada palabra, une las palabras con espacios
  const text = key.split('_')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');

  // Agrega al list select las listas respectivamente
  $listSelect.appendChild(createOptionElement(key, text));
});


// Evento: al cambiar la lista, limpia y rellena el select de pistas
$listSelect.addEventListener('change', (e) => {
  // Limpia las opciones del track select, excepto la option por defecto
  $trackSelect.length = 1;
  $trackSelect.selectedIndex = 0;
  $trackTitle.textContent = 'Selecciona una lista de audios y una pista';
  $trackListen.src = '';

  const value = e.target.value;

  // Agrega todas las pistas al track select en base a la lista seleccionada
  TRACKS_COLLECTION[value].forEach(track => {
    $trackSelect.appendChild(createOptionElement(track.value, track.text))
  });
});

// Evento: al cambiar un track, muestra en el titulo la lista y pista actual, asigna la ruta del audio al reproductor
$trackSelect.addEventListener('change', (e) => {
  const listSelectedText = $listSelect.options[$listSelect.selectedIndex].text;
  const trackSelectedIndex = $trackSelect.selectedIndex;
  const trackSelectedText = $trackSelect.options[trackSelectedIndex].text;
  
  $trackTitle.textContent = `Estás escuchando: ${listSelectedText} - ${trackSelectedText}`;
  
  $trackListen.src = `./assets/media/Missions/${$listSelect.value}/${trackSelectedIndex} ${trackSelectedText}.mp3`
});