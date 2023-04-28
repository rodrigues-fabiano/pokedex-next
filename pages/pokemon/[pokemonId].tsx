import Link from 'next/link';
import Image from 'next/image'
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'

let maxPokemons = 151;

export const getStaticPaths = async () => {

  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon: PokemonProps, index: number) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {

  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json();

  return {
    props: { pokemon: data },
  }
}

interface PokemonProps {
  pokemon: {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: [{
      type: {
        name: string;
        url: string;
      }
    }];
    stats: [{
      base_stat: number;
      stat: {
        name: string;
        url: string;
      }
    }];
  }
}


const Pokemon = ({ pokemon }: PokemonProps) => {

  console.log(pokemon);

  const pokemonTypeColor = {
    normal: 'bg-[--normal]',
    fire: 'bg-[--fire]',
    water: 'bg-[--water]',
    grass: 'bg-[--grass]',
    electric: 'bg-[--electric]',
    ice: 'bg-[--ice]',
    fighting: 'bg-[--fighting]',
    poison: 'bg-[--poison]',
    ground: 'bg-[--ground]',
    flying: 'bg-[--flying]',
    psychic: 'bg-[--psychic]',
    bug: 'bg-[--bug]',
    rock: 'bg-[--rock]',
    ghost: 'bg-[--ghost]',
    dark: 'bg-[--dark]',
    dragon: 'bg-[--dragon]',
    steel: 'bg-[--steel]',
    fairy: 'bg-[--fairy]',
  };

  return (
    <div className='flex justify-center items-center'>
      {pokemon.id > 1 &&
        <Link href={`/pokemon/${pokemon.id - 1}`}>
          <GrCaretPrevious className='text-5xl hover:scale-110' />
        </Link>
      }
      <div className={`flex flex-col items-center w-[50%] h-[80%] p-8 rounded-3xl drop-shadow-lg ${pokemonTypeColor[pokemon.types[0].type.name]}`}>
        <div className='flex items-center justify-between w-full'>
          <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
          <div className='flex gap-2'>
            {
              pokemon.types.map((item, index) => (
                <p key={index} className={`uppercase font-bold border-2 border-t-slate-100/20 border-l-slate-100/20 border-b-slate-800/20 border-r-slate-800/20 px-3 py-1 rounded-full drop-shadow-lg ${pokemonTypeColor[pokemon.types[index].type.name]}`}>{item.type.name}</p>
              ))
            }
          </div>
        </div>
        <div className='flex flex-row-reverse w-full justify-between'>

          <Image
            className='h-80 w-auto'
            src={`https://professorlotus.com/Sprites/${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}.gif`}
            width={150}
            height={150}
            alt={pokemon.name}
          />
          <div>

            <p>Altura: {pokemon.height * 10}cm</p>
            <p>Peso: {pokemon.weight / 10}kg</p>

            <h2 className="font-bold pt-4">Atributos</h2>
            {
              pokemon.stats.map((item, index) => (
                <p key={index} className='capitalize'
                >
                  {item.stat.name}: {item.base_stat}
                </p>
              ))
            }
          </div>
        </div>
      </div>
      {pokemon.id < maxPokemons &&
        <Link href={`/pokemon/${pokemon.id + 1}`}>
          <GrCaretNext className='text-5xl hover:scale-110' />
        </Link>
      }
    </div >
  )
}

export default Pokemon;