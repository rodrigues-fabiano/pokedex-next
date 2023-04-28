import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" bg-slate-800 text-white flex justify-between items-center px-5 py-4">
      <div className="flex justify-center items-center gap-4">
        <Image
          src="/images/pokeball.png"
          width='30'
          height='30'
          alt='Pokebola como logo'
        />
        <h1 className="text-2xl">Pokedex - Next.js</h1>
      </div>
        <ul className="flex items-center gap-4">
          <li className="navbar-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/about">
              Sobre
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar;