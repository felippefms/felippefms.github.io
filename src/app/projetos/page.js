import PageWrapper from "../../components/pagewrapper.js";
import ProjectBox from "../../components/projectbox.js";

import paginapersonalizada from "../../imgs/pagina-personalizada.png"
import marvelimg from "../../imgs/marvelimg.png"
import feelsocialimg from "../../imgs/feelsociallogo.png"
import listadecomprasimg from "../../imgs/listadecompras.png"
import galeriadeimagensimg from "../../imgs/galeria.png"
import responsivemenuimg from "../../imgs/menu.png"
import flappybirdimg from "../../imgs/passaro.png"

export default function Projetos() {
    return (
      <PageWrapper>
        <p class="text-white text-left text-[1.2rem] font-[540] cursor-default">Alguns dos meus projetos pessoais e open-source serão publicados aqui, na minha página do LinkedIn e na minha página do GitHub.</p>
        <ProjectBox 
        image={paginapersonalizada}
        content="https://felippefms.github.io/pagina-customizada/"
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
        title= "Feelsocial"
        description="Um projeto de rede social utilizando Typescript e Styled-Components contando com um belo design e funcionalidades como chat e login de usuários.">
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
        image={responsivemenuimg}
        content="https://felippefms.github.io/responsive-menu/"
        title= "Responsive Menu"
        description="Um menu simples e Responsivo, feito com HTML, CSS e Media queries.">
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
  