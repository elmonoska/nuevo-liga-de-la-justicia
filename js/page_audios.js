//Alternate audio
const missionSelect = document.querySelector("#missionSelect");
const pistaSelect = document.querySelector("#pistaSelect");
const audioTitle = document.querySelector("#audioTitle");
const pistaListen = document.querySelector("#pistaListen");

//function que cambia el track mientras se modifique algun select que se desea ver
function change() {
  //Obtiene el valor de la cd seleccionado
  const selectedOptionMission =
    missionSelect.options[missionSelect.selectedIndex];
  //Obtiene el valor del track seleccionado
  const selectedOptionAudio = pistaSelect.options[pistaSelect.selectedIndex];
  pistaListen.setAttribute(
    "src",
    `multi/CDS/MISSION (AUDIO)/${selectedOptionMission.value}/${selectedOptionAudio.value}`
  );
  audioTitle.textContent = `Estas escuchando el ${selectedOptionMission.value} - ${selectedOptionAudio.text}`;
}
