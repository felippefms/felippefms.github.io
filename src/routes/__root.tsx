import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className='w-screen h-screen bg-bgimage bg-cover bg-center bg-no-repeat flex flex-col items-center text-center'>
      <Outlet />
      <TanStackDevtools config={{ position: 'bottom-right', }} plugins={[ { name: 'TanStack Router', render: <TanStackRouterDevtoolsPanel />, }, ]} />
    </div>
  )
}
