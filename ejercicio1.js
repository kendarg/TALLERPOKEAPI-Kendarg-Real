// Estados fuera de Consola
async function obtenerPokemon() {

    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/lucario");
    const datos = await respuesta.json();

    console.log("Tipos:");
    for (const t of datos.types) {
        console.log(t.type.name);
    }

    console.log("\nStats:");
    for (const s of datos.stats) {
        console.log(s.stat.name, s.base_stat);
    }

    console.log("\nHabilidades:");
    for (const a of datos.abilities) {
        console.log(a.ability.name);
    }

}

obtenerPokemon();