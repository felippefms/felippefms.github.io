import { createFileRoute } from '@tanstack/react-router'
import KnowledgeBox from '#/components/knowlegdebox'
import PageWrapper from '#/components/pagewrapper'

import html5img from "@/media/images/html-5.png";
import css3img from "@/media/images/css-3.png";
import javascriptimg from "@/media/images/javascript.png";
import reactimg from "@/media/images/react.png";
import bootstrapimg from "@/media/images/bootstrap.png";
import styledcomponentsimg from "@/media/images/styled-components.png";
import nextimg from "@/media/images/nextjs.png";
import tailwindimg from "@/media/images/tailwind.png";
import typescriptimg from "@/media/images/typescript.png";

export const Route = createFileRoute('/knowledge/front-end')({
  component: FrontEnd,
})

function FrontEnd() {
  return (
    <PageWrapper>
      <h1 className="text-white text-center text-[1.5rem] font-[540] cursor-default">FRONT-END<br /><br /></h1>
      <KnowledgeBox image={html5img} text="HTML 5" description="Tags de HTML atuais e de fácil leitura, código limpo e atribuições com funções Javascript." />
      <KnowledgeBox image={css3img} text="CSS 3" description="Responsividade, UI, estilos, efeitos, transições e media queries." />
      <KnowledgeBox image={javascriptimg} text="JAVASCRIPT" description="Funções, manipulação da DOM, eventos e programação WEB moderna." />
      <KnowledgeBox image={typescriptimg} text="TYPESCRIPT" description="Utilização de Typescript para uma melhor tipagem e controle de aplicações." />
      <KnowledgeBox image={reactimg} text="React" description="Criação de aplicações WEB utilizando ReactJS para toda a estrutura e comportamento do site." />
      <KnowledgeBox image={nextimg} text="NEXT.JS" description="Criação de aplicações WEB utilizando Next.js para melhor performace e rapidez no desenvolvimento." />
      <KnowledgeBox image={bootstrapimg} text="Bootstrap" description="Utilização de Bootstrap em aplicações WEB, tags e escrita seguindo a documentação." />
      <KnowledgeBox image={styledcomponentsimg} text="Styled-Components" description="Utilização de componentes customizáveis e com uso de funções Javascript dentro do CSS." />
      <KnowledgeBox image={tailwindimg} text="Tailwind" description="Estilização máxima e com a melhor performace possível utilizando Tailwind nas aplicações." />
    </PageWrapper>
  )
}
