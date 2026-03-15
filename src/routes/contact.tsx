import ContactBox from '#/components/contactbox'
import PageWrapper from '#/components/pagewrapper'
import { createFileRoute } from '@tanstack/react-router'

import telefoneimg from "@/media/images/phone-call.png";
import emailimg from "@/media/images/gmail.png";
import githubimg from "@/media/images/github.png";
import linkedinimg from "@/media/images/linkedin.png";

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <PageWrapper>
        <ContactBox text="Telefone" image={telefoneimg} content='https://wa.me/+05527999053721' itemtext='(27) 99905-3721'></ContactBox>
        <ContactBox text="E-Mail" image={emailimg} content='https://mail.google.com/mail/u/0/?fs=1&to=felippefms3@gmail.com&tf=cm' itemtext='felippefms3@gmail.com'></ContactBox>
        <ContactBox text="GitHub" image={githubimg} content='https://github.com/felippefms' itemtext='github.com/felippefms' target="_blank"></ContactBox>
        <ContactBox text="LinkedIn" image={linkedinimg} content='https://linkedin.com/in/felippefms' itemtext='linkedin.com/in/felippefms'></ContactBox>
    </PageWrapper>
  )
}
