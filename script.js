const pokemons = [
  { name: "Bulbasaur", evolutions: [1, 2, 3] },
  { name: "Charmander", evolutions: [4, 5, 6] },
  { name: "Squirtle", evolutions: [7, 8, 9] },
  { name: "Pichu", evolutions: [172, 25, 26] },
  { name: "Eevee", evolutions: [133, 134, 135, 136] },
  { name: "Abra", evolutions: [63, 64, 65] },
  { name: "Machop", evolutions: [66, 67, 68] },
  { name: "Gastly", evolutions: [92, 93, 94] },
  { name: "Ralts", evolutions: [280, 281, 282] },
  { name: "Togepi", evolutions: [175, 176, 468] }
];

const getImageUrl = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const getNameById = (id) => {
  // Simple fallback if you don't want to use the full PokéAPI
  const names = {
    1: "Bulbasaur", 2: "Ivysaur", 3: "Venusaur",
    4: "Charmander", 5: "Charmeleon", 6: "Charizard",
    7: "Squirtle", 8: "Wartortle", 9: "Blastoise",
    25: "Pikachu", 172: "Pichu", 26: "Raichu",
    133: "Eevee", 134: "Vaporeon", 135: "Jolteon", 136: "Flareon",
    63: "Abra", 64: "Kadabra", 65: "Alakazam",
    66: "Machop", 67: "Machoke", 68: "Machamp",
    92: "Gastly", 93: "Haunter", 94: "Gengar",
    280: "Ralts", 281: "Kirlia", 282: "Gardevoir",
    175: "Togepi", 176: "Togetic", 468: "Togekiss"
  };
  return names[id] || `#${id}`;
};

const container = document.getElementById("pokemon-container");

pokemons.forEach(pokemon => {
  const card = document.createElement("div");
  card.className = "pokemon-card";

  const img = document.createElement("img");
  img.className = "pokemon-img";

  let index = 0;
  img.src = getImageUrl(pokemon.evolutions[index]);
  img.alt = getNameById(pokemon.evolutions[index]);

  const name = document.createElement("div");
  name.className = "pokemon-name";
  name.textContent = getNameById(pokemon.evolutions[index]);

    card.addEventListener("click", () => {
      index = (index + 1) % pokemon.evolutions.length;
      
      // Apply animation class
      img.classList.remove("evolve-animation"); // reset
      void img.offsetWidth; // reflow to restart animation
      img.classList.add("evolve-animation");
    
      // Update image and name
      img.src = getImageUrl(pokemon.evolutions[index]);
      img.alt = getNameById(pokemon.evolutions[index]);
      name.textContent = getNameById(pokemon.evolutions[index]);
    });


  card.appendChild(img);
  card.appendChild(name);
  container.appendChild(card);
});
