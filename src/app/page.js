import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 class="text-[40px] font-[100px] text-white uppercase mt-2 md:mt-24 cursor-default">
          Felipe Madureira de Souza
        </h1>
            <nav class="text-white flex flex-col uppercase mt-16 md:flex-row content-center">
                <li class="pt-6 px-4">
                    <Link href='/projetos' class="hover:text-hoverpurple hover:bg-white hover:rounded-3xl text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl">
                      Projetos
                    </Link>
                </li>
                <li class="pt-6 text-2xl p-1 font-semibold cursor-default hidden md:block">|</li>
                <li class="pt-6 px-4">
                    <Link href='/conhecimentos'class="hover:text-hoverpurple hover:bg-white hover:rounded-3xl text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl">
                      Conhecimentos
                    </Link>
                </li>
                <li class="pt-6 text-2xl p-1 font-semibold cursor-default hidden md:block">|</li>
                <li class="pt-6 px-4">
                    <Link href='/sobre' class="hover:text-hoverpurple hover:bg-white hover:rounded-3xl text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl">
                      Sobre
                    </Link>
                </li>
                <li class="pt-6 text-2xl p-1 font-semibold cursor-default hidden md:block">|</li>
                <li class="pt-6 px-4">
                    <Link href='/contato' class="hover:text-hoverpurple hover:bg-white hover:rounded-3xl text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl">
                      Contato
                    </Link>
                </li>
            </nav>
    </div>
  )
}
