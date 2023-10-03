const months = {
  mes_1: "./img/calendario_mes 1.png",
  mes_2: "./img/calendario_mes 2.png",
  mes_3: "./img/calendario_mes 3.png",
  mes_4: "./img/calendario_mes 4.png",
  mes_5: "./img/calendario_mes 5.png",
  mes_6: "./img/calendario_mes 6.png",
  mes_7: "./img/calendario_mes 7.png",
  mes_8: "./img/calendario_mes 8.png",
  mes_9: "./img/calendario_mes 9.png",
  mes_10: "./img/calendario_mes 10.png",
  mes_11: "./img/calendario_mes 11.png",
  mes_12: "./img/calendario_mes 12.png",
};

const monthSelect = document.querySelector("#monthSelect");
const monthTitle = document.querySelector("#monthTitle");
const monthImage = document.querySelector("#monthImage");
const monthView = document.querySelector("#monthView")

//Funcion que cambia la informacion del titulo de mes e imagen
function change() {
  //Obtiene el mes que se selecciona
  const selectedOptionMonth = monthSelect.options[monthSelect.selectedIndex];

  //Ponemos titulo al mes
  monthTitle.textContent = selectedOptionMonth.text;

  let valueOption = selectedOptionMonth.value;

  //Ponemos la ruta de la imagen
  monthImage.src = months[valueOption];

  //Ponemos la ruta de la imagen para abrirla en nueva pestaña
  monthView.href = months[valueOption];
  
}
