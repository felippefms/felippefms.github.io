import PageWrapper from '#/components/pagewrapper'
import { createFileRoute } from '@tanstack/react-router'
import ProjectBox from '#/components/projectbox'

import paginapersonalizada from "@/media/images/pagina-personalizada.png"
import marvelimg from "@/media/images/marvelimg.png"
import feelsocialimg from "@/media/images/feelsociallogo.png"
import listadecomprasimg from "@/media/images/listadecompras.png"
import galeriadeimagensimg from "@/media/images/galeria.png"
import flappybirdimg from "@/media/images/passaro.png"

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
      <PageWrapper>
        <p className="text-white text-center text-[1.2rem] font-[540] cursor-default">Alguns dos meus projetos pessoais e open-source serão publicados aqui, na minha página do LinkedIn e na minha página do GitHub.</p>
        <ProjectBox 
        image={paginapersonalizada}
        content="https://github.com/felippefms/pagina-customizada"
        title= "Landpage loja personalizada"
        description="Uma landpage exemplo para sua loja ou empresa com uma boa responsividade, entre em contato para fazer a sua! O projeto utiliza Typescript, NextJS e Tailwind.">
        </ProjectBox>
        
        <ProjectBox 
        image={marvelimg}
        content="https://github.com/felippefms/marvel-comic-book-store"
        title= "Marvel Comic-Book Store"
        description="Uma loja de quadrinhos API REST online utilizando React e Styled-Components para você ver suas HQs favoritas e adiciona-lás ao carrinho de compras.">
        </ProjectBox>

        <ProjectBox 
        image={feelsocialimg}
        content="https://github.com/felippefms/feelsocial"
        title= "Feelsocial (Em Breve)"
        description="Um projeto de rede social utilizando Typescript, NextJS e Tailwind contando com um belo design e funcionalidades como chat e login de usuários.">
        </ProjectBox>

        <ProjectBox 
        image={galeriadeimagensimg}
        content="https://github.com/felippefms/galeria_animais"
        title= "Galeria de Imagens"
        description="Um projeto de galeria de imagens de animais utilizando React.">
        </ProjectBox>

        <ProjectBox 
        image={listadecomprasimg}
        content="https://github.com/felippefms"
        title= "Lista de Compras (Em Breve)"
        description="Um aplicativo de lista de compras totalmente customizável e rápido para usar sem se preocupar com muitas opções, perfeito para compras do dia a dia.">
        </ProjectBox>

        <ProjectBox 
        image={flappybirdimg}
        content="https://github.com/felippefms/Flappy-Bird"
        title= "Flappy Bird"
        description="Um jogo ao estilo Flappy Bird, criado utilizando Javascript durante o curso WEB MODERNO da Cod3r.">
        </ProjectBox>
      </PageWrapper>
  )
}
