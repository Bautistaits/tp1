let colores = ["violeta", "azul", "verde", "amarillo", "celeste"]
let primero = colores[0]
let ultimo = colores[colores.length - 1]
console.log(primero)
console.log(ultimo)
console.log(colores.length)
colores.push("negro")
colores.unshift("blanco")
console.log(colores)
colores.pop()
console.log(colores)
colores.shift()
console.log(colores)
colores[1] = "marron"
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
}

