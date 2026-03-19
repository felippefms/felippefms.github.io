import PageWrapper from '#/components/pagewrapper'
import { createFileRoute } from '@tanstack/react-router'

import fotofelipe from "@/media/images/foto_felipe.jpg";
import curriculum from "@/media/files/Felipe_Madureira_de_Souza_CV.pdf"
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <img src={fotofelipe} className="rounded-full" alt="Foto Felipe" />
      <div className=" mt-7 text-white text-left md:text-justify text-[1.2rem] font-[540] leading-snug cursor-default space-y-7">
        <p>{t('about_text_p1')}</p>
        <p>{t('about_text_p2')}</p>
        <p>{t('about_text_p3')}</p>
        <p>{t('about_text_p4')}</p>
      </div>

      <div className="flex flex-col items-center mt-4 space-y-2">
        <p className="text-white text-[1.1rem] font-medium cursor-default">{t('about_cta_text')}</p>
        <a href={curriculum} download className="w-fit p-4 font-semibold text-white rounded-full bg-[#000000b0] hover:bg-white hover:text-hoverpurple">{t('about_download_cv')}</a>
      </div>
    </PageWrapper>
  )
}
