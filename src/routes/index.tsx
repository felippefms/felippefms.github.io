import { createFileRoute } from '@tanstack/react-router'
import MainMenu from '#/components/mainMenu'
import LanguageSwitcher from '#/components/languageSwitcher'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className='flex flex-col'>
      <LanguageSwitcher />
      <h1 className='text-[40px] font-[100px] text-white uppercase mt-14 md:mt-24 cursor-default'>Felipe Madureira de Souza</h1>
      <MainMenu />
    </div>
  )
}
