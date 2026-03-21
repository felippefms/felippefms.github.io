import { createFileRoute } from '@tanstack/react-router'
import PageWrapper from '@/components/pagewrapper';
import KnowledgeBox from '@/components/knowlegdebox';

import mysqlimg from "@/media/images/mysql.png";
import postgresql from "@/media/images/postgresql.png";
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/knowledge/database')({
  component: Database,
})

function Database() {

  const { t } = useTranslation()

  return (
    <PageWrapper>
      <h1 className="text-white text-center text-[1.5rem] font-[540] cursor-default">{t('knowledge_databases')}<br /><br /></h1>
      <KnowledgeBox image={mysqlimg} text="MYSQL" description={t('knowledge_mysql')} />
      <KnowledgeBox image={postgresql} text="POSTGRESQL" description={t('knowledge_postgresql')} />
    </PageWrapper>
  )
}
