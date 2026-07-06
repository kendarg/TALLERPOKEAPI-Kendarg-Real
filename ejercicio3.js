// Estados dentro de Consola
const readline= require("readline");
const pokemon = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
//! Que pena no me fieje que la 2 y la 2 son lo mismo

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
    for(const tipo of datos.type){
        console.log(tipo.type.name);
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