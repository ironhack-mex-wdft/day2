//ARRAYS
// ESTÁ ENTRE CORCHETES Y ENTRE CADA COMA, VA UN TIPO DE DATO
//                 0       1          2          3         4           5
//                                                              0                1
//                                                                          0        1         2
const nombres = ["Mike", "Jorge", "Viviana", "Alejandro", 35, ["Anahí", ["Sandra", "Diego", "Laura"]] ]

// PARA ACCEDER A LAS POSICIONES, UTILIZAN EL NÚMERO EN EL CUAL ESTÁ SITUADO EL DATO.

console.log(nombres[3])
console.log(nombres[1])
console.log(nombres[4])
console.log(nombres[5][1])
console.log(nombres[5][1][1])

const apellidos = ["Nieva", "Cervantes", "Lopez"]

// apellidos.push("Rivera")
// apellidos.unshift("Marquez")

// splice funciona 
// array.splice([posición de inicio], [cuántos elementos hacia adelante quieres borrar])
apellidos.splice(0,1)
console.log(apellidos)


// Que los paises digan "Mexico es el mejor pais", "Colombia es el mejor pais", "Peru es el mejor pais."
let paises = ["Mexico", "Colombia", "Peru"]
let paisesCopy = []

paises.forEach((elemento, index) => {
    const pais = `${elemento} es el mejor país`

    paisesCopy.push(pais)
    
})

console.log(paisesCopy)