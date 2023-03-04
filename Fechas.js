const hoy = new Date()

console.log(hoy)

const miCumpleanios = new Date(1988,6,29)

console.log(miCumpleanios)

console.log(hoy > miCumpleanios)

const diaCumple = miCumpleanios.getDate()

const mesCumple = miCumpleanios.getMonth() + 1

const anioCumple = miCumpleanios.getFullYear()

console.log(diaCumple)
console.log(mesCumple)
console.log(anioCumple)