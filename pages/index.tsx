import styled from "styled-components"
import Image from "next/image"
import { motion } from "framer-motion"
import { NextSeo } from "next-seo"

import { Button } from "../components/Button/Button"

// export const config = { amp: true }

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

const mobilePayAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export default function Home() {
  return (
    <>
      <NextSeo />
      <Wrapper variants={containerAnimation} initial="hidden" animate="show">
        <Header>
          <Image
            alt="Help Ukraine | Denmark"
            src="/icons/icon-512x512.png"
            width="480"
            height="480"
          />
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

const Header = styled.div`
  display: flex;
  width: 240px;
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
