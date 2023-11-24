const texto = document.getElementById('contadorVisitas')
const btn = document.getElementById('btnReestablecer')


!localStorage.contador
    ? localStorage.setItem('contador', '1')
    : localStorage.contador = parseFloat(localStorage.getItem('contador')) + 1;
texto.innerText = localStorage.contador;


btn.addEventListener('click', () => {
    localStorage.clear()
    texto.textContent = 0
})
