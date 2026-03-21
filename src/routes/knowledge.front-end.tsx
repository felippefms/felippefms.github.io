import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <h1 className="text-white text-center text-[1.5rem] font-[540] cursor-default">FRONT-END<br /><br /></h1>
      <KnowledgeBox image={html5img} text="HTML 5" description={t('knowledge_html5')} />
      <KnowledgeBox image={css3img} text="CSS 3" description={t('knowledge_css3')} />
      <KnowledgeBox image={javascriptimg} text="JAVASCRIPT" description={t('knowledge_javascript')} />
      <KnowledgeBox image={typescriptimg} text="TYPESCRIPT" description={t('knowledge_typescript')} />
      <KnowledgeBox image={reactimg} text="React" description={t('knowledge_react')} />
      <KnowledgeBox image={nextimg} text="NEXT.JS" description={t('knowledge_nextjs')} />
      <KnowledgeBox image={bootstrapimg} text="Bootstrap" description={t('knowledge_bootstrap')} />
      <KnowledgeBox image={styledcomponentsimg} text="Styled-Components" description={t('knowledge_styled_components')} />
      <KnowledgeBox image={tailwindimg} text="Tailwind" description={t('knowledge_tailwind')} />
    </PageWrapper>
  )
}
