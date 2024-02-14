const missionSelected = document.querySelector("#missionSelected");
const trackSelected = document.querySelector("#trackSelected");
const trackTitle = document.querySelector("#trackTitle");
const trackListen = document.querySelector("#trackListen");

function refreshTrack() {
  /* Refresh track title */
  trackTitle.textContent = `Estas escuchando ${
    missionSelected.options[missionSelected.selectedIndex].textContent
  } - ${trackSelected.options[trackSelected.selectedIndex].textContent}`;

  /* Refresh track to listen */
  trackListen.src = `./assets/media/Missions/${missionSelected.value}/${trackSelected.value}`;
}

missionSelected.addEventListener("change", refreshTrack);
trackSelected.addEventListener("change", refreshTrack);