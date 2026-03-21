import { createFileRoute } from '@tanstack/react-router'
import PageWrapper from '@/components/pagewrapper';
import KnowledgeBox from '@/components/knowlegdebox';

import reactimg from "@/media/images/react.png";
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/knowledge/mobile')({
  component: Mobile,
})

function Mobile() {
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <h1 className="text-white text-center text-[1.5rem] font-[540] cursor-default">MOBILE<br /><br /></h1>
      <KnowledgeBox image={reactimg} text="React Native" description={t('knowledge_react_native')} />
    </PageWrapper>
  )
}
