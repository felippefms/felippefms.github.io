import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation()

  return (
    <PageWrapper>
      <h1 className="text-white text-center text-[1.5rem] font-[540] cursor-default">BACK-END<br /><br /></h1>
      <KnowledgeBox image={nodejsimg} text="NODE.JS" description={t('knowledge_nodejs')}/>
      <KnowledgeBox image={pythonimg} text="PYTHON" description={t('knowledge_python')}/>
      <KnowledgeBox image={fastapiimg} text="FASTAPI" description={t('knowledge_fastapi')}/>
      <KnowledgeBox image={djangoimg} text="DJANGO" description={t('knowledge_django')}/>
    </PageWrapper>
  )
}
