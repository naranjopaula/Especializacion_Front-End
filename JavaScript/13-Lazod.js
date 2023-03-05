//Cómo repetir un mismo código varias veces

const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");

const precioCiudad = new Array(500,400,300,200);
const presupuestoDisponible = 190;
let i = 0;

while (precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length){

        i++;
    
}

if (i == ciudadesDisponibles.length){
    console.log("No tenemos pasajes disponibles");
}
else
console.log("Puedes comprar pasajes para:"+ciudadesDisponibles[i]);


