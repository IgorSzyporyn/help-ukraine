import styled from "styled-components"
import Image from "next/image"
import logo from "../assets/images/logo.png"
import mobilepay from "../assets/images/mobilepay.png"
import { Button } from "../components/Button/Button"
import { motion } from "framer-motion"

const container = {
  hidden: { y: -20, scale: 0.5 },
  show: {
    y: 0,
    scale: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const header = {
  hidden: { y: -20 },
  show: { y: 0 },
}

const item = {
  hidden: { y: -20, scale: 0.5 },
  show: { y: 0, scale: 1 },
}

export default function Home() {
  return (
    <Wrapper variants={container} initial="hidden" animate="show">
      <Logo variants={header}>
        <Image src={logo} />
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
      <Mobilepay variants={item}>
        <Image objectFit="contain" src={mobilepay} />
      </Mobilepay>
    </Wrapper>
  )
}

const Logo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Wrapper = styled(motion.div)`
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

const Mobilepay = styled(motion.div)`
  width: 400px;
  border-radius: 7px;
  overflow: hidden;
  border: 1px solid #ccc;
`

const FacebookButton = styled(Button)`
  background-color: #0084ff;
  width: 400px;
  color: #ffffff;
  margin-bottom: 24px;
`

const GoFundMeButton = styled(Button)`
  background-color: #00a85c;
  width: 400px;
  color: #ffffff;
  margin-bottom: 24px;
`

const SamlindButton = styled(Button)`
  background-color: #004b24;
  width: 400px;
  color: #ffffff;
  margin-bottom: 24px;
`
