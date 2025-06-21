import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-[40px] font-[100px] text-white uppercase mt-2 md:mt-24 cursor-default">
          Felipe Madureira de Souza
        </h1>
            <nav className="text-white flex flex-col uppercase mt-16 md:flex-row content-center">
                <li className="pt-6 px-4">
                    <Link href='/projetos' className="hover:text-hoverpurple hover:bg-white hover:rounded-3xl text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl">
                      Projetos
                    </Link>
                </li>
                <li className="pt-6 text-2xl p-1 font-semibold cursor-default hidden md:block">|</li>
                <li className="pt-6 px-4">
                    <Link href='/conhecimentos'className="hover:text-hoverpurple hover:bg-white hover:rounded-3xl text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl">
                      Conhecimentos
                    </Link>
                    <div className="flex flex-col mt-4 space-y-2 hidden">
                      <Link href='/conhecimentos'className="hover:text-hoverpurple hover:bg-white hover:rounded-3xl text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl">
                        Back-End
                      </Link>

                      <Link href='/conhecimentos'className="hover:text-hoverpurple hover:bg-white hover:rounded-3xl text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl">
                        Front-End
                      </Link>

                      <Link href='/conhecimentos'className="hover:text-hoverpurple hover:bg-white hover:rounded-3xl text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl">
                        Banco de dados
                      </Link>
                    </div>
                </li>
                <li className="pt-6 text-2xl p-1 font-semibold cursor-default hidden md:block">|</li>
                <li className="pt-6 px-4">
                    <Link href='/sobre' className="hover:text-hoverpurple hover:bg-white hover:rounded-3xl text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl">
                      Sobre
                    </Link>
                </li>
                <li className="pt-6 text-2xl p-1 font-semibold cursor-default hidden md:block">|</li>
                <li className="pt-6 px-4">
                    <Link href='/contato' className="hover:text-hoverpurple hover:bg-white hover:rounded-3xl text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl">
                      Contato
                    </Link>
                </li>
            </nav>
    </div>
  )
}
