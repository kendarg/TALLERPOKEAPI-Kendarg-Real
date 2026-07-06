// Estados dentro de Consola
const readline= requiere("readline");
const pokemon = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
//! question
    // * guarda, envia y espera la informacion dada por nosotros
//! async
    //* Esepera a que el usuario termine de escribir
//! (nombre) =>
    //* Este es lo mismo que si le agrego funcion desde el inicio funcion(){}

pokemon.question("Ingrese el nombre del pokemon: ", async(nombre)=>{

try{
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`); // toLowerCase() es para dejar todo en minuscula
    
    if(!respuesta.ok){
        console.log("Pokemon no encontrado");
        pokemon.close();
        return;
    }

    const datos = await respuesta.json();
    
    console.log("\n Informacion del pokemon");
    console.log("Nombre:", datos.name);
    console.log("ID:", datos.id);
    console.log("Altura:", datos.height);
    console.log("Peso:", datos.weight);
    
    console.log("\n Tipos")
    for(const tipo of datos.types){
        console.log(tipo.types.name);
    }

    console.log("\n Stats");
    for(const stat of datos.stats){
        console.log(`${stat.stat.name}: ${stat.base_stat}`);
    }

}
catch(error){
    console.log("Ocurrio un Error: ", error.menssage);
}

pokemon.close();
});