import styled from "styled-components"
import Image from "next/image"
import { motion } from "framer-motion"
import { NextSeo } from "next-seo"

import { Button } from "../components/Button/Button"
import { Logo } from "../components/Logo/Logo"

const containerAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const buttonAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
}

const headerAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const mobilePayAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export default function Home() {
  return (
    <>
      <NextSeo />
      <Wrapper variants={containerAnimation} initial="hidden" animate="show">
        <Header variants={headerAnimation}>
          <Logo />
          <Title>Help Ukraine</Title>
          <Subtitle>Denmark</Subtitle>
          <Hashtag>#hUdk</Hashtag>
        </Header>
        <FacebookButton
          variants={buttonAnimation}
          href="https://www.facebook.com/groups/helpukrainedenmark/?ref=share"
        >
          støt os på facebook
        </FacebookButton>
        <GoFundMeButton
          variants={buttonAnimation}
          href="https://gofund.me/2a40c33a"
        >
          doner på gofundme
        </GoFundMeButton>
        <SamlindButton
          variants={buttonAnimation}
          href="https://samlind.dk/indsamling/hjaelp-til-flygtninge-fra-ukraine/"
        >
          doner på samlind
        </SamlindButton>
        <MailButton
          variants={buttonAnimation}
          href="mailto:mail@helpukrainedenmark.dk"
        >
          skriv os en email
        </MailButton>
        <Mobilepay variants={mobilePayAnimation}>
          <Image
            alt="MobilePay"
            width="400"
            height="568"
            src="/images/mobilepay.png"
          />
        </Mobilepay>
        <Description>
          <h3>Om denne forening</h3>
          <p>
            Gruppen har til formål at samle økonomiske og materielle midler ind
            til ukrainske flygtninge, koordinere transport og indkvartering i
            Danmark. Alle evt. indsamlede midler går ubeskåret til hjælp - alt
            arbejde i foreningen er ulønnet.
          </p>
          <h3>Gruppens regler</h3>
          <p>
            Vi overholder de danske myndighedernes retningslinjer samt gældende
            love og regler. Vi er ikke en gruppe der hjælper folk i krig, samler
            ind til våben eller appellerer til at omgå myndighedernes regler,
            love eller anbefalinger og vi tager afstand fra omgåelser heraf.
          </p>
          <h3>Transport og indkvarterering</h3>
          <p>
            Al transport og indkvartering af Ukrainske flygtninge til Danmark
            koordineres og godkendes af sidens administration, som dagligt
            rådfører sig med relevante myndigheder. Vi fraråder pt. Privat
            indkvartering og kørsel i privatbiler, som følge af rådgivning af
            myndighederne.
          </p>
          <h3>Hvem er vi</h3>
          <p>
            Vi er en samling af engagerede ildsjæle, der brænder for at gøre en
            forskel for Ukrainere ramt af denne krig. Fælles for os alle er, at
            vi ikke bare har lyst til at følge begivenhederne i TV. Vi er en tæt
            lille kernegruppe og derfor kan vi desværre heller ikke pt. Svare
            alle de mange velmenende mennesker, der meget gerne vil hjælpe, men
            appellerer til, at folk enten er tålmodige eller kan melde sig som
            besøgsven hos Røde Kors, når flygtningene er kommet hertil.
          </p>
        </Description>
      </Wrapper>
    </>
  )
}

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 90vw;
  text-align: center;
`

const Header = styled(motion.div)`
  display: flex;
  width: 320px;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  margin: 16px 0 0 0;
  font-size: 32px;
`

const Subtitle = styled.h2`
  margin: 0 0 16px 0;
  font-size: 22px;
  font-weight: 400;
`

const Hashtag = styled.h3`
  margin: 0 0 32px 0;
  color: #707070;
`

const FacebookButton = styled(Button)`
  background-color: #0084ff;
  width: 100%;
  color: #ffffff;
  margin-bottom: 24px;
`

const GoFundMeButton = styled(Button)`
  background-color: #00a85c;
  width: 100%;
  color: #ffffff;
  margin-bottom: 24px;
`

const SamlindButton = styled(Button)`
  background-color: #004b24;
  width: 100%;
  color: #ffffff;
  margin-bottom: 24px;
`

const MailButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #000000;
  width: 100%;
  color: #000000;
  margin-bottom: 24px;
`

const Mobilepay = styled(motion.div)`
  width: 100%;
  border-radius: 7px;
  overflow: hidden;
  border: 1px solid #ccc;
`

const Description = styled.div`
  display: none;
`
