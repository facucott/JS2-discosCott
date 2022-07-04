//VARIABLES

let discos = 100;
let opcion;

//FUNCIONES

const discosVendidos = (cant) => {
    if (discos > cant) {
        discos = discos - cant;
        console.log(`El nuevo stock es de ${discos} discos.`);
    } else {
        console.log(`No hay discos suficientes, quedan ${discos} unidades.`);
    }
}

const discosIngresados = (cant) => {
    discos = discos + cant;
    console.log(`El nuevo stock es de ${discos} discos.`);
}

//MENÚ

do {
    opcion = parseInt (prompt ('Ingrese alguna de las siguientes opciones:\n\n1 - Disco/s vendido/s\n2 - Ingresar disco/s a la tienda\n3 - Salir'));
    let cant;

    switch (opcion) {
        case 1:
            cant = parseInt (prompt('Ingrese la cantidad de discos que se vendieron'));
            discosVendidos (cant);
            break;
        case 2:
            cant = parseInt (prompt('Ingrese la cantidad de discos que entraron'));
            discosIngresados (cant);
            break;
        case 3:
            alert ('Hasta luego!');
            break;
        default:
            alert ('Lo que ha seleccionado no es una opción válida');
            break;
    }  
} 

while (opcion !== 3)