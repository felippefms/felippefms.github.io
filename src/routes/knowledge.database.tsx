import { createFileRoute } from '@tanstack/react-router'
import PageWrapper from '@/components/pagewrapper';
import KnowledgeBox from '@/components/knowlegdebox';

import mysqlimg from "@/media/images/mysql.png";
import postgresql from "@/media/images/postgresql.png";

export const Route = createFileRoute('/knowledge/database')({
  component: Database,
})

function Database() {
  return (
    <PageWrapper>
      <h1 className="text-white text-center text-[1.5rem] font-[540] cursor-default">BANCO DE DADOS<br /><br /></h1>
      <KnowledgeBox image={mysqlimg} text="MYSQL" description="Modelagem e gerenciamento de bancos de dados relacionais com MySQL, criação de tabelas, relacionamentos, consultas SQL (SELECT, INSERT, UPDATE, DELETE) e otimização de consultas." />
      <KnowledgeBox image={postgresql} text="POSTGRESQL" description="Desenvolvimento e gerenciamento de bancos de dados com PostgreSQL prontos para produção e consultas SQL (SELECT, INSERT, UPDATE, DELETE), JOINs e otimização de desempenho." />
    </PageWrapper>
  )
}
