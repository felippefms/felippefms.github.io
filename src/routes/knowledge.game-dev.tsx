import { createFileRoute } from '@tanstack/react-router'
import PageWrapper from '@/components/pagewrapper';
import KnowledgeBox from '@/components/knowlegdebox';
import { useTranslation } from 'react-i18next';

import hammereditorimg from "@/media/images/hammereditor.png";
import unrealimg from "@/media/images/unreal.png";
import lunarmagicimg from "@/media/images/lunarmagic.png";

export const Route = createFileRoute('/knowledge/game-dev')({
  component: Gamedev,
})

function Gamedev() {
    const { t } = useTranslation()

  return (
    <PageWrapper>
      <p className="text-white text-center text-[1.5rem] font-[540] cursor-default">GAME-DEV<br /><br /></p>
      <KnowledgeBox image={hammereditorimg} text="Valve Hammer Editor" description={t('knowledge_hammer')} />
      <KnowledgeBox image={unrealimg} text="Unreal Editor 3" description={t('knowledge_unreal3')} />
      <KnowledgeBox image={lunarmagicimg} text="Lunar Magic" description={t('knowledge_lunarmagic')} />
    </PageWrapper>
  )
}
