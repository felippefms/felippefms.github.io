import Image from "next/image";
import PageWrapper from "../../components/pagewrapper.js";
import fotofelipe from "../../imgs/foto_felipe.jpg";
import idade from "../../shared/getAge.js"

export default function Sobre() {

  const curriculum = "/Felipe_Madureira_de_Souza_CV.pdf";

    return (
      <PageWrapper>
        <Image
          src={fotofelipe}
          class="rounded-full"
        ></Image>
        <p class="text-white text-left md:text-justify text-[1.2rem] font-[540] leading-snug cursor-default">
          <br/>Olá !<br/><br/>Me chamo Felipe Madureira de Souza, tenho {idade()} anos e sou formado em Análise e Desenvolvimento de Sistemas.
              Aos 16 anos conheci o desenvolvimento de software e desde então me dedico a estudar e colocar em prática minhas ideias. No momento estou focado no ambiente Front-End, na criação de Web-Sites e sistemas utilizando Javascript com suas mais atuais bibliotecas, frameworks e tecnologias.<br/><br/>
              Apaixonado por música, jogos e hardware, sempre tento algo novo, seja um projeto na web, aprender uma nova tecnologia ou passar um tempo com a família e amigos. Visite as outras opções do site, lá eu conto um pouco sobre meus projetos e conhecimentos que ajudam na caminhada para me tornar o melhor desenvolvedor que eu posso ser.<br/><br/>
              Se deseja uma oportunidade de trabalharmos juntos, entre em contato por email ou telefone, será um prazer ajudar você !<br/><br/>
        </p>

        <div class="flex flex-col items-center space-y-2">
          <p class="text-white text-[1.1rem] font-[500] cursor-default">Deseja saber mais?</p>
          <a href={curriculum} download class="w-fit p-4 font-semibold text-white rounded-full bg-[#000000b0] hover:bg-white hover:text-hoverpurple">Baixe meu CV</a>
        </div>

      </PageWrapper>
    )
  }