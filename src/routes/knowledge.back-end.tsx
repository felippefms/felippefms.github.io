import { createFileRoute } from '@tanstack/react-router'
import PageWrapper from '@/components/pagewrapper';
import KnowledgeBox from '@/components/knowlegdebox';

import pythonimg from "@/media/images/python.png"
import nodejsimg from "@/media/images/nodejs.png";
import fastapiimg from "@/media/images/fastapi.png";
import djangoimg from "@/media/images/django.png";

export const Route = createFileRoute('/knowledge/back-end')({
  component: FrontEnd,
})

function FrontEnd() {
  return (
    <PageWrapper>
      <h1 className="text-white text-center text-[1.5rem] font-[540] cursor-default">BACK-END<br /><br /></h1>
      <KnowledgeBox image={nodejsimg} text="NODE.JS" description="Criação de arrays, objetos e funções JAVASCRIPT, JSON e código limpo para fácil leitura."/>
      <KnowledgeBox image={pythonimg} text="PYTHON" description="Desenvolvimento de scripts, automações e aplicações backend utilizando Python, com foco em código limpo, manipulação de dados e boas práticas."/>
      <KnowledgeBox image={fastapiimg} text="FASTAPI" description="Criação de APIs REST rápidas e eficientes utilizando FastAPI, validação de dados com Pydantic, tipagem com Python e integração com bancos de dados."/>
      <KnowledgeBox image={djangoimg} text="DJANGO" description="Criação de APIs REST utilizando Django, incluindo criação de modelos, rotas e integração com banco de dados."/>
    </PageWrapper>
  )
}
