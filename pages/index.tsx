import styled from "styled-components"
import Image from "next/image"
import logo from "../assets/images/logo.png"
import mobilepay from "../assets/images/mobilepay.png"
import { Button } from "../components/Button/Button"
import { motion } from "framer-motion"
import { NextSeo } from "next-seo"

export const config = { amp: true }

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const header = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const item = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
}

export default function Home() {
  return (
    <>
      <NextSeo />
      <Wrapper variants={container} initial="hidden" animate="show">
        <Logo variants={header}>
          <Image alt="Help Ukraine Denmark" src={logo} />
          <Title>Help Ukraine</Title>
          <Subtitle>Denmark</Subtitle>
          <Hashtag>#hUdk</Hashtag>
        </Logo>
        <FacebookButton
          variants={item}
          href="https://www.facebook.com/groups/helpukrainedenmark/?ref=share"
        >
          støt os på facebook
        </FacebookButton>
        <GoFundMeButton variants={item} href="https://gofund.me/2a40c33a">
          doner på gofundme
        </GoFundMeButton>
        <SamlindButton
          variants={item}
          href="https://samlind.dk/indsamling/hjaelp-til-flygtninge-fra-ukraine/"
        >
          doner på samlind
        </SamlindButton>
        <MailButton variants={item} href="mailto:mail@helpukrainedenmark.dk">
          skriv os en email
        </MailButton>
        <Mobilepay variants={item}>
          <Image alt="MobilePay" objectFit="contain" src={mobilepay} />
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

const Logo = styled(motion.div)`
  display: flex;
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
  color: #ccc;
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
