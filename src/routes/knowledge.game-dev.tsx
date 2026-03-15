import { createFileRoute } from '@tanstack/react-router'
import PageWrapper from '@/components/pagewrapper';
import KnowledgeBox from '@/components/knowlegdebox';

import hammereditorimg from "@/media/images/hammereditor.png";
import unrealimg from "@/media/images/unreal.png";
import lunarmagicimg from "@/media/images/lunarmagic.png";

export const Route = createFileRoute('/knowledge/game-dev')({
  component: Gamedev,
})

function Gamedev() {
  return (
    <PageWrapper>
      <p className="text-white text-center text-[1.5rem] font-[540] cursor-default">GAME-DEV<br /><br /></p>
      <KnowledgeBox image={hammereditorimg} text="Valve Hammer Editor" description="Criação, edição, manipulação de texturas, compilação e exportação de mapas e assets utilizando as engines Source e GoldSource."></KnowledgeBox>
      <KnowledgeBox image={unrealimg} text="Unreal Editor 3" description="Criação de mapas, terrenos e utilização de assets do Unreal Editor 3."></KnowledgeBox>
      <KnowledgeBox image={lunarmagicimg} text="Lunar Magic" description="Criação de mapas, edição de fases e caminhos e recriação completa do mapa do Super Mario World do Super Nintendo utilizando o Lunar Magic criado por FuSoYa."></KnowledgeBox>
    </PageWrapper>
  )
}
