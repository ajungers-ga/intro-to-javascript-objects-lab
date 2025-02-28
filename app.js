const pokemon = require('./data.js');

const game = {
    party: ["Charmander"],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    difficulty: "Easy",
  };
  
    //1

  console.dir(pokemon, { maxArrayLength: null })

    //2

  console.log(pokemon[58].name); // 59 = 58 when count starts from 0
  console.log(game)

    //3

console.log(game.difficulty);

    //4

const starterPokemon = pokemon.find(p => p.starter === true && p.name === "Charmander");

if (starterPokemon) {
    game.party[0] = starterPokemon;
    console.log("current Party:", game.party);
}

//5

const morePokemon = [
    pokemon.find(p => p.name === "Jolteon"),
    pokemon.find(p => p.name === "Wigglytuff"),
    pokemon.find(p => p.name === "Venonat")
];

game.party.push(...morePokemon);
console.log("updated party;", game.party);

//6

for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 3) {
        game.gyms[i].completed = true;
    }
}

console.log("updated gyms;", game.gyms);

//7

const starterIndex = game.party.findIndex(p => p.name === "Charmander");

if (starterIndex !== -1) {

    const evolvedPokemon = pokemon.find(p => p.name === "Charmeleon");
        if (evolvedPokemon) {
            game.party.splice(starterIndex, 1, evolvedPokemon);
            console.log("Starter Pokemon evolved! Updated Party:", game.party);
        } else {
            console.log("Evolved Pokemon not found!");
        }        
    } else {
        console.log("Starter Pokemon not found in the party.");
    }

    //8

    console.log("Current Party Pokemon");
    game.party.forEach(p => {
        if (p && p.name);
        console.log(p.name);
    }
    );

    //9

    const starterPokemons = pokemon.filter(p => p.starter === true);

    console.log("Starter Pokemon:");
    starterPokemons.forEach(p => console.log(p.name));

    //10

    game.catchPokemon = function(pokemonObj) {
        this.party.push(pokemonObj);
    };

    const newPokemon = pokemon.find(p => p.name === "Gengar");
    if (newPokemon) {
        game.catchPokemon(newPokemon);
        console.log("You caught:", newPokemon.name);
    } else {
        console.log("Pokemon not found.");
    }       
       console.log("Updated Party:", game.party);





