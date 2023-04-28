import Link from 'next/link';
import Image from 'next/image';

import { TbBrandNextjs, TbBrandTypescript, TbBrandTailwind, TbPokeball } from 'react-icons/tb';

const About = () => {
  return (
    <div className='p-4 flex flex-col items-center'>
      <h1 className='text-4xl font-bold mb-4'>Sobre o projeto</h1>
      <p className='mb-6'>Um projeto para praticar o aprendizado de Next.js com Typescript e Tailwind, consumindo dados da PokéAPI para construção dinâmica dos componentes e páginas.</p>
      <div className='flex gap-4 justify-center'>
        <Link
          href='https://nextjs.org/'
          target='_blank'
        >
          <TbBrandNextjs
            className='tecnologies-icons'
          />
        </Link>
        <Link
          href='https://www.typescriptlang.org/docs/'
          target='_blank'
        >
          <TbBrandTypescript
            className='tecnologies-icons'
          />
        </Link>
        <Link
          href="https://v2.tailwindcss.com/docs"
          target='_blank'
        >
          <TbBrandTailwind
            className='tecnologies-icons'
          />
        </Link>
        <Link
        href="https://pokeapi.co/"
        target='_blank'
        >
          <Image
            className='tecnologies-icons'
            src="/images/pokeapi_256.png"
            height='100'
            width='100'
            alt='Logo da PokéAPI'
          />
        </Link>
      </div>
    </div>
  )
}

export default About;