import PageWrapper from "../../components/pagewrapper.js";
import ContactBox from "../../components/contactbox.js";

import telefoneimg from "../../imgs/phone-call.png";
import emailimg from "../../imgs/gmail.png";
import githubimg from "../../imgs/github.png";
import linkedinimg from "../../imgs/linkedin.png";

export default function Contato() {
    return (
      <PageWrapper>
        <ContactBox text="Telefone" image={telefoneimg} content='https://wa.me/+05527999053721' itemtext='(27) 99905-3721'></ContactBox>
        <ContactBox text="E-Mail" image={emailimg} content='https://mail.google.com/mail/u/0/?fs=1&to=felippefms3@gmail.com&tf=cm' itemtext='felippefms3@gmail.com'></ContactBox>
        <ContactBox text="GitHub" image={githubimg} content='https://github.com/felippefms' itemtext='github.com/felippefms' target="_blank"></ContactBox>
        <ContactBox text="LinkedIn" image={linkedinimg} content='https://linkedin.com/in/felippefms' itemtext='linkedin.com/in/felippefms'></ContactBox>
      </PageWrapper>
    )
  }
  