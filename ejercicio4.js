const pokemon = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Comparacion de Pokemones")
pokemon.question("Ingrese el Primer Pokemon: ", async (nombre)=>{
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);

    if(!respuesta.ok){
        console.log("El Primer pokemon NO exixte");
        pokemon.close();
        return;
    }
    const pokemon1 = await respuesta.json();

    //* Para el uso de dos awiat se anidan como un if dentro de otro.
pokemon.question("Ingrese el Primer Pokemon: ", async (nombre2)=>{

    const respuesta2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre2.toLowerCase()}`);

    if(!respuesta2.ok){
        console.log("El Primer pokemon NO exixte");
        pokemon.close();
        return;
    }

    const pokemon2 = await respuesta2.json();
    console.log("\n Comaparacion de Pokemones");
    console.log("\n HP - Vida");
    console.log(`${pokemon1.name}: ${pokemon1.ststs[0].base_stat}`);
    console.log(`${pokemon2.name}: ${pokemon2.ststs[0].base_stat}`);
    if(pokemon1.stast[0].base_stat > pokemon2.stast[0].base_stat){
    console.log(`${pokemon1.name} Tiene mas Hp/vida con ${pokemon1.stast[0].base_stat}`);
    }else{
    console.log(`${pokemon2.name} Tiene mas Hp/vida con ${pokemon2.stast[0].base_stat}`);
    }
    
    pokemon.close();

});

});
