const months = {
  mes_1: "./assets/img/Poster/calendario_mes 1.png",
  mes_2: "/assets/img/Poster/calendario_mes 2.png",
  mes_3: "/assets/img/Poster/calendario_mes 3.png",
  mes_4: "/assets/img/Poster/calendario_mes 4.png",
  mes_5: "/assets/img/Poster/calendario_mes 5.png",
  mes_6: "/assets/img/Poster/calendario_mes 6.png",
  mes_7: "/assets/img/Poster/calendario_mes 7.png",
  mes_8: "/assets/img/Poster/calendario_mes 8.png",
  mes_9: "/assets/img/Poster/calendario_mes 9.png",
  mes_10: "/assets/img/Poster/calendario_mes 10.png",
  mes_11: "/assets/img/Poster/calendario_mes 11.png",
  mes_12: "/assets/img/Poster/calendario_mes 12.png",
};

const monthSelect = document.querySelector("#monthSelect");
const monthImage = document.querySelector("#monthImage");
const monthView = document.querySelector("#monthView");

function refreshMonth() {
  let monthSelected = monthSelect.value;
  monthImage.src = months[monthSelected];
  monthView.href = months[monthSelected];
}

monthSelect.addEventListener("change", refreshMonth);