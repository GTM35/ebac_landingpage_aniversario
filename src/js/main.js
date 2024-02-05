document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  setInterval(() => {
    timeHero();
  }, 1000);
});

function timeHero() {
  let labelHero = document.querySelector(".header__event span");

  const dataAniversario = new Date("Feb 06, 2024 17:15:00");
  const dataHoje = new Date();

  const timeStampDiff = dataAniversario.getTime() - dataHoje.getTime();

  const diasEmMs = 86400000;
  const horasEmMs = 3600000;
  const minutosEmMs = 60000;

  const Dia = Math.floor(timeStampDiff / diasEmMs);
  const Horas = Math.floor((timeStampDiff % diasEmMs) / horasEmMs);
  const Minutos = Math.floor((timeStampDiff % horasEmMs) / minutosEmMs);

  if (timeStampDiff < 0) {
    labelHero.innerHTML = `Evento já começou`;
  } else {
    labelHero.innerHTML = `${Dia}d ${Horas}h ${Minutos}min`;
  }
}
