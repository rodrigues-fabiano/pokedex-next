import Image from 'next/image'
import Link from 'next/link'

interface PokemonProps {
  pokemon: {
    id: number;
    name: string;
    types: [{
      type: {
        name: string;
        url: string;
      }
    }];
  }
}

const Card = ({ pokemon }: PokemonProps) => {

  const pokeIndex = ('000' + pokemon.id).slice(-3);


  return (
    <Link
      href={`pokemon/${pokemon.id}`}
    >
      <div
        className='relative flex flex-col justify-between items-end py-4 pt-6 rounded-2xl drop-shadow-md bg-slate-800 text-slate-100 h-72 w-96 transition-transform hover:scale-110'>
        <div className='flex justify-between items-baseline w-full px-4'>
          <h3
          className="capitalize font-bold text-4xl text-slate-300"
          >
            {pokemon.name}
            </h3>
          <span className='text-3xl text-slate-500 font-bold'>#{pokeIndex}</span>
        </div>
        <Image
          className='h-40 w-auto'
          src={`https://professorlotus.com/Sprites/${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}.gif`}
          width={150}
          height={150}
          alt={pokemon.name}
        />
      </div>
    </Link>
  )
}

export default Card;