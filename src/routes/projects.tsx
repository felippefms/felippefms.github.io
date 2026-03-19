import PageWrapper from '#/components/pagewrapper'
import { createFileRoute } from '@tanstack/react-router'
import ProjectBox from '#/components/projectbox'
import { useTranslation } from 'react-i18next'

import paginapersonalizada from "@/media/images/pagina-personalizada.png"
import marvelimg from "@/media/images/marvelimg.png"
import feelsocialimg from "@/media/images/feelsociallogo.png"
import listadecomprasimg from "@/media/images/listadecompras.png"
import galeriadeimagensimg from "@/media/images/galeria.png"
import flappybirdimg from "@/media/images/passaro.png"

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  const { t } = useTranslation();

  return (
      <PageWrapper>
        <p className="text-white text-center text-[1.2rem] font-[540] cursor-default">{t('projects_main_text')}</p>
        <ProjectBox 
        image={paginapersonalizada}
        content="https://github.com/felippefms/pagina-customizada"
        title= {t('landpage_project_title')}
        description= {t('landpage_project_description')}>
        </ProjectBox>
        
        <ProjectBox 
        image={marvelimg}
        content="https://github.com/felippefms/marvel-comic-book-store"
        title= {t('marvel_project_title')}
        description= {t('marvel_project_description')}>
        </ProjectBox>

        <ProjectBox 
        image={feelsocialimg}
        content="https://github.com/felippefms/feelsocial"
        title= {t('feelsocial_project_title')}
        description= {t('feelsocial_project_description')}>
        </ProjectBox>

        <ProjectBox 
        image={galeriadeimagensimg}
        content="https://github.com/felippefms/galeria_animais"
        title= {t('galery_project_title')}
        description= {t('galery_project_description')}>
        </ProjectBox>

        <ProjectBox 
        image={listadecomprasimg}
        content="https://github.com/felippefms"
        title= {t('marketlist_project_title')}
        description= {t('marketlist_project_description')}>
        </ProjectBox>

        <ProjectBox 
        image={flappybirdimg}
        content="https://github.com/felippefms/Flappy-Bird"
        title= {t('flappybird_project_title')}
        description= {t('flappybird_project_description')}>
        </ProjectBox>
      </PageWrapper>
  )
}
