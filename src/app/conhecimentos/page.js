import PageWrapper from "../../components/pagewrapper.js";
import KnowledgeBox from "../../components/knowlegdebox.js";

import html5img from "../../imgs/html-5.png";
import css3img from "../../imgs/css-3.png";
import javascriptimg from "../../imgs/javascript.png";
import nodejsimg from "../../imgs/nodejs.png";
import reactimg from "../../imgs/react.png";
import bootstrapimg from "../../imgs/bootstrap.png";
import reactnativeimg from "../../imgs/reactnative.png";
import styledcomponentsimg from "../../imgs/styled-components.png";
import nextimg from "../../imgs/nextjs.png";
import tailwindimg from "../../imgs/tailwind.png";
import typescriptimg from "../../imgs/typescript.png";

export default function Conhecimentos() {
    return (
      <PageWrapper>
        <p class="text-white text-left text-[1.2rem] font-[540] cursor-default">O principal objetivo desse site é tornar de forma pública todos os meus conhecimentos em diversas tecnologias, frameworks e bibliotecas, assim como a publicação dos meus projetos pessoais de portfólio.<br /><br /></p>
        <KnowledgeBox image={html5img} text="HTML 5" description="Tags de HTML atuais e de fácil leitura, código limpo e atribuições com funções Javascript."></KnowledgeBox>
        <KnowledgeBox image={css3img} text="CSS 3" description="Responsividade, UI, estilos, efeitos, transições e media queries."></KnowledgeBox>
        <KnowledgeBox image={javascriptimg} text="JAVASCRIPT" description="Funções, manipulação da DOM, eventos e programação WEB moderna."></KnowledgeBox>
        <KnowledgeBox image={typescriptimg} text="TYPESCRIPT" description="Utilização de Typescript para uma melhor tipagem e controle de aplicações."></KnowledgeBox>
        <KnowledgeBox image={nodejsimg} text="NODE.JS" description="Criação de arrays, objetos e funções JAVASCIPT, JSON e código limpo para fácil leitura."></KnowledgeBox>
        <KnowledgeBox image={reactimg} text="React" description="Criação de aplicações WEB utilizando ReactJS para toda a estrutura e comportamento do site."></KnowledgeBox>
        <KnowledgeBox image={reactnativeimg} text="React Native" description="Desenvolvimento de aplicativos e soluções mobile para Android e IOS."></KnowledgeBox>
        <KnowledgeBox image={nextimg} text="NEXT.JS" description="Criação de aplicações WEB utilizando Next.js para melhor performace e rapidez no desenvolvimento."></KnowledgeBox>
        <KnowledgeBox image={bootstrapimg} text="Bootstrap" description="Utilização de Bootstrap em aplicações WEB, tags e escrita seguindo a documentação."></KnowledgeBox>
        <KnowledgeBox image={styledcomponentsimg} text="Styled-Components" description="Utilização de componentes customizáveis e com uso de funções Javascript dentro do CSS."></KnowledgeBox>
        <KnowledgeBox image={tailwindimg} text="Tailwind" description="Estilização máxima e com a melhor performace possível utilizando Tailwind nas aplicações."></KnowledgeBox>
      </PageWrapper>
    )
  }
  