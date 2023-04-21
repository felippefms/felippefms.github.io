import './globals.css'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Felipe Madureira de Souza',
  description: 'Felipe Madureira de Souza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${montserrat.variable}`}>
      <body class="w-screen h-screen bg-bgimage bg-cover bg-center bg-no-repeat bg-scroll flex flex-col content-center items-center text-center">
        {children}
      </body>
    </html>
  )
}