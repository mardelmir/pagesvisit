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


// Corrección review
// const contadorVisitas = document.getElementById('contadorVisitas')
// const btnReestablecer = document.getElementById('btnReestablecer')

// let contador = localStorage.getItem('visitas') || 0
// contador++;
// localStorage.setItem('visitas', contador)
// contadorVisitas.innerHTML = contador

// btnReestablecer.addEventListener('click', () => {
//     localStorage.clear()
//     contadorVisitas.innerHTML = 0
// })

// const numeros = [3, 4, 9, 10]
// const sumaNumeros = numeros.reduce((valorAcumulado, valorActual) => {
//     // 1- 0 + 3
//     // 2- 3 + 4
//     // 3- 7 + 9

//     return valorAnterior + valorActual
// })

// const user = {
//     name: "María",
//     email: "maria@gmail.com",
//     calificaciones: [7, 5, 10, {
//         nota: 10
//     }]
// }
// user.calificaciones[3].nombre = "Sonia"

// console.log(user)
// const userModified = {
//     ...user,
//     name: "Sonia"
// }
// const { calificaciones } = user
// const [, , , obj] = calificaciones
// obj.nombre = "nombre"
// console.log(obj)
// localStorage.setItem("user", JSON.stringify(user))

// const userSaved = localStorage.getItem("user")

// // console.log(JSON.parse(userSaved)) //res.json()
