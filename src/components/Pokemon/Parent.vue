<template>
  <div class="card">
    <div class="card-header">
      <h2>Pokemon</h2>
    </div>
    <div class="card-body">
      <div v-if="pokemon" class="d-flex justify-content-center mt-2">
        <img :src="pokemon.sprites.front_default" alt="random-pokemon" />
        <img :src="pokemon.sprites.front_shiny" alt="random-pokemon" />
        <img :src="pokemon.sprites.back_default" alt="random-pokemon" />
        <img :src="pokemon.sprites.back_shiny" alt="random-pokemon" />
      </div>
      <div v-else>
        <p>Click on the generate button below!</p>
      </div>
    </div>
    <div class="card-footer">
      <PokemonChild @generate-pokemon="generateParent" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import PokemonChild from "./Child.vue";
let pokemon = ref(null);
const generateParent = async () => {
  const randomNumber = Math.floor(Math.random() * 21);
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
  const wholeData = await fetch("https://pokeapi.co/api/v2/pokemon");
  const jsonData = await data.json();
  const pokemonData = await wholeData.json();
  pokemon.value = jsonData;
  console.log("Pokemons: ", pokemonData);
};
</script>
