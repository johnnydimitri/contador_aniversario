const contador = document.getElementById("contador")

// define a data (ano atual)
const dataEvento = new Date("September 6, 2026 00:00:00").getTime()

function atualizaTimer() {
  const agora = new Date().getTime()

  const diferenca = dataEvento - agora

  // conversões
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24)
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60)
  const segundos = Math.floor((diferenca / 1000) % 60)

  contador.innerHTML = 
    `${dias}d ${horas}h ${minutos}m ${segundos}s`

  // quando acabar
  if (diferenca < 0) {
    contador.innerHTML = "Chegou o dia! 🎉"
  }
}

// atualiza a cada 1 segundo
setInterval(atualizaTimer, 1000)

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const elements = document.querySelectorAll('.container');

elements.forEach(el => observer.observe(el));
