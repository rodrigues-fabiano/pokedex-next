import { useState } from 'react';

import Card from "../components/Card";

export const getStaticProps = async () => {

  const totalPokemons = 150
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${totalPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index: number) => {
    item.id = index + 1;
  })

  return {
    props: {
      pokemons: data.results,
    }
  }
}

const Home = ({ pokemons }) => {
  const [pokemon, setPokemon] = useState(pokemons);

  return (
    <div className=" bg-poke-bg bg-auto py-16">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-[#e33d33]">Poké<span className="text-slate-800">dex</span></h1>
        <p>Next.js &#8226; TypeScript &#8226; Tailwind</p>
      </div>
      <div className="flex flex-wrap justify-center max-w-[1800px] m-auto gap-8">
        {pokemon.map((monster) => (
          <Card key={monster.id} pokemon={monster} />
        ))}
      </div>
    </div>
  )
}

export default Home;