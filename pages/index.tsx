import { NextSeo } from "next-seo"
import { useContext } from "react"
import styled, { css } from "styled-components"
import { Button } from "../components/Button/Button"
import { Card, CardContent, CardImage } from "../components/Card/Card"
import { Facebook as _Facebook } from "../components/Facebook/Facebook"
import { YouTube as _YouTube } from "../components/YouTube/YouTube"
import { AppContext } from "../context/App"

export default function Home() {
  const { isMobile } = useContext(AppContext)

  return (
    <>
      <NextSeo />
      <IntroCard direction={isMobile ? "column" : "row"}>
        <LoadingUpImage $isMobile={isMobile} />
        <IntroContent $isMobile={isMobile}>
          <h1>Hvem er vi?</h1>
          <p>
            Foreningen Hjælp til flygtninge fra Ukraine (CVR 43085697) blev
            stiftet 15. marts 2022 af ildsjæle i en Facebook gruppe der opstod
            ultimo februar 2002. Foreningens internationale navn er{" "}
            <Emphasize>Help Ukraine Denmark</Emphasize>. Foreningen har til
            formål at samle økonomiske og materielle midler til at bistå
            ukrainske flygtninge. Desuden at hjælpe med transport,
            indkvartering, samt juridisk vejledning og materiel hjælp.
          </p>
          <IntroFooter>
            <div>
              <h4>Find os på sociale medier</h4>
              <div>
                <Facebook />
                <YouTube />
              </div>
            </div>
            <IntroButton small>Læs Mere</IntroButton>
          </IntroFooter>
        </IntroContent>
      </IntroCard>
    </>
  )
}

const IntroCard = styled(Card)``

type LoadingUpImageProps = {
  $isMobile: boolean
}

const LoadingUpImage = styled(CardImage)<LoadingUpImageProps>`
  background-image: url("/images/loading-up.jpg");

  ${({ $isMobile }) =>
    $isMobile
      ? css`
          padding-top: 56.25%;
          background-position: 0 -124px;
        `
      : css`
          flex-basis: 40%;
        `}
`

type IntroContentProps = {
  $isMobile: boolean
}

const IntroContent = styled(CardContent)<IntroContentProps>`
  ${({ $isMobile }) =>
    $isMobile
      ? ""
      : css`
          flex-basis: 60%;
        `}
`

const IntroFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const Facebook = styled(_Facebook)`
  height: 42px;
  margin-right: 8px;
`

const YouTube = styled(_YouTube)`
  height: 42px;
`

const IntroButton = styled(Button)`
  background-color: #0057b6;
  color: #ffffff;
`

const Emphasize = styled.span`
  font-weight: 500;
`
