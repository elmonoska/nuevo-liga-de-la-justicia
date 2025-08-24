import { TRACKS_COLLECTION } from "./data/TRACKS_COLLECTION.js";

console.log(TRACKS_COLLECTION)
const missionSelect = document.getElementById('mission-select');
const trackSelect = document.getElementById('track-select');
const trackTitle = document.getElementById('track-title');
const trackListen = document.getElementById('track-listen');

// 
Object.keys(TRACKS_COLLECTION).forEach(key => {
  // Separa la cadena por guiones bajos, capitaliza cada palabra, une las palabras con espacios
  const text = key.split('_')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
  
  // Crea un option element por cada lista de tracks
  const optionElement = document.createElement('option');
  optionElement.value = key;
  optionElement.textContent = text;
  missionSelect.appendChild(optionElement);
});


// 
missionSelect.addEventListener('change', (e) => {
  // Limpia las opciones del track select, excepto la option por defecto
  trackSelect.length = 1;
  trackSelect.selectedIndex = 0;
  trackTitle.textContent = 'Selecciona una y una pista';
  trackListen.src = '';


  const value = e.target.value;
  
  TRACKS_COLLECTION[value].forEach(track => {
    const optionElement = document.createElement('option');
    optionElement.value = track.value;
    optionElement.textContent = track.text
    trackSelect.appendChild(optionElement)
  });
});

trackSelect.addEventListener('change', (e) => {
  const missionSelectedIndex = missionSelect.selectedIndex;
  const missionSelectedText = missionSelect.options[missionSelectedIndex].text;
  const trackSelectedIndex = trackSelect.selectedIndex;
  const trackSelectedText = trackSelect.options[trackSelectedIndex].text;
  
  trackTitle.textContent = `Estás escuchando: ${missionSelectedText} - ${trackSelectedText}`;

  console.log(trackSelectedIndex)
  console.log(`../media/Missions/${missionSelect.value}/${trackSelectedIndex} ${trackSelectedText}.mp3`)
  trackListen.src = `/assets/media/Missions/${missionSelect.value}/${trackSelectedIndex} ${trackSelectedText}.mp3`
});