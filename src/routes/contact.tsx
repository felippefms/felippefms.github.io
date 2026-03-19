import ContactBox from '#/components/contactbox'
import PageWrapper from '#/components/pagewrapper'
import { createFileRoute } from '@tanstack/react-router'

import telefoneimg from "@/media/images/phone-call.png";
import emailimg from "@/media/images/gmail.png";
import githubimg from "@/media/images/github.png";
import linkedinimg from "@/media/images/linkedin.png";
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <ContactBox text={t('contact_phone')} image={telefoneimg} content='https://wa.me/+05527999053721' itemtext={t('contact_phone_number')} />
      <ContactBox text={t('contact_email')} image={emailimg} content='https://mail.google.com/mail/u/0/?fs=1&to=felippefms3@gmail.com&tf=cm' itemtext='felippefms3@gmail.com' />
      <ContactBox text={t('contact_github')} image={githubimg} content='https://github.com/felippefms' itemtext='github.com/felippefms' target="_blank" />
      <ContactBox text={t('contact_linkedin')} image={linkedinimg} content='https://linkedin.com/in/felippefms' itemtext='linkedin.com/in/felippefms' />
    </PageWrapper>
  )
}
