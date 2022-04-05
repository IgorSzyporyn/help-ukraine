import { motion, useCycle, useViewportScroll } from "framer-motion"
import { Sling as Hamburger } from "hamburger-react"
import { DefaultSeo } from "next-seo"
import type { AppProps } from "next/app"
import Link from "next/link"
import { useEffect } from "react"
import styled from "styled-components"
import { Button } from "../components/Button/Button"
import { Logo } from "../components/Logo/Logo"
import { AppContext } from "../context/App"

import { useWindowSize } from "../hooks/useWindowSize"
import SEO from "../seo/config"

import "../styles/global.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  // const { scrollYProgress } = useViewportScroll()
  const { width = 0 } = useWindowSize()
  const [menuOpen, cycleMenuOpen] = useCycle(false, true)

  const isDesktop = width > 1140
  const isMobile = width < 800

  const activeLink: string = "forening"

  useEffect(() => {
    if (document) {
      const body = document.getElementsByTagName("body")[0]
      if (menuOpen) {
        body.style.overflowY = "hidden"
      } else {
        body.style.overflowY = "auto"
      }
    }
  }, [menuOpen])

  return (
    <AppContext.Provider value={{ isDesktop, isMobile }}>
      <DefaultSeo title="Help Ukraine | Denmark" description="#hUdk" {...SEO} />
      <Wrapper $isDesktop={isDesktop}>
        <PageHeader>
          <PageHeaderInner $isDesktop={isDesktop}>
            <Brand>
              <BrandLogo />
              <BrandText>
                <Title>Help Ukraine</Title>
                <Subtitle>#hUdk</Subtitle>
              </BrandText>
            </Brand>
            {!isDesktop && (
              <MobileMenu
                variants={{ open: { x: 0 }, closed: { x: "100%" } }}
                animate={menuOpen ? "open" : "closed"}
                initial="closed"
              >
                <MobileLink $active={activeLink === "forening"}>
                  <Link href="forening">Forening</Link>
                </MobileLink>
                <MobileLink $active={activeLink === "koeb"}>
                  <Link href="koeb">Køb</Link>
                </MobileLink>
                <MobileLink $active={activeLink === "kontakt"}>
                  <Link href="kontakt">Kontakt</Link>
                </MobileLink>
                <MobileLink $active={activeLink === "partnere"}>
                  <Link href="partnere">Partnere</Link>
                </MobileLink>
              </MobileMenu>
            )}
            {isDesktop && (
              <>
                <DesktopMenu>
                  <DesktopLink $active={activeLink === "forening"}>
                    <Link href="forening">Forening</Link>
                  </DesktopLink>
                  <DesktopLink $active={activeLink === "koeb"}>
                    <Link href="koeb">Køb</Link>
                  </DesktopLink>
                  <DesktopLink $active={activeLink === "kontakt"}>
                    <Link href="kontakt">Kontakt</Link>
                  </DesktopLink>
                  <DesktopLink $active={activeLink === "partnere"}>
                    <Link href="partnere">Partnere</Link>
                  </DesktopLink>
                </DesktopMenu>
                <Utility>
                  <DonateButton small>Doner</DonateButton>
                </Utility>
              </>
            )}
            {!isDesktop && (
              <BurgerMenu>
                <Hamburger
                  size={32}
                  toggled={menuOpen}
                  onToggle={() => cycleMenuOpen()}
                />
              </BurgerMenu>
            )}
          </PageHeaderInner>
        </PageHeader>
        <PageContent $isDesktop={isDesktop}>
          <PageContentInner>
            <Component {...pageProps} />
          </PageContentInner>
        </PageContent>
      </Wrapper>
    </AppContext.Provider>
  )
}

type WrapperProps = {
  $isDesktop: boolean
}

const Wrapper = styled.div<WrapperProps>`
  height: 100%;

  & > header {
    padding: ${({ $isDesktop }) => ($isDesktop ? "16px 32px" : "8px 16px")};
  }

  & > main {
    padding: ${({ $isDesktop }) => ($isDesktop ? "16px 32px" : "8px 16px")};
  }
`

const PageHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #ebebeb;
  z-index: 200;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

type PageContentProps = {
  $isDesktop: boolean
}

const PageContent = styled.main<PageContentProps>`
  margin: 16px auto 0 auto;
  background-color: #f8f8f8;
  z-index: 100;
`

const PageInner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`

type PageHeaderInnerProps = {
  $isDesktop: boolean
}

const PageHeaderInner = styled(PageInner)<PageHeaderInnerProps>`
  display: grid;
  grid-template-columns: ${({ $isDesktop }) =>
    $isDesktop ? "1fr 1fr 1fr" : "1fr 1fr"};
`

const PageContentInner = styled(PageInner)``

const Brand = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
`

const BrandLogo = styled(Logo)`
  height: 64px;
`

const BrandText = styled.div``

const Title = styled.h1`
  margin: 0 0 4px;
  font-size: 17px;
  font-weight: 400;
  line-height: 14px;
`

const Subtitle = styled.h2`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
`

const DesktopMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

type LinkWrapperProps = {
  $active?: boolean
}

const LinkWrapper = styled.div<LinkWrapperProps>`
  padding: 0 16px;
  display: flex;
  border-bottom: 2px solid
    ${({ $active }) => ($active ? "#000000" : "transparent")};

  & > a {
    color: #000000;
    text-decoration: none;
    font-weight: 500;
    line-height: 42px;
  }
`

const DesktopLink = styled(LinkWrapper)<LinkWrapperProps>`
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`

const MobileLink = styled(LinkWrapper)<LinkWrapperProps>``

const Utility = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  z-index: 200;

  & > * {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`

const DonateButton = styled(Button)`
  background-color: #d3641a;
  color: #ffffff;
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  z-index: 100;
`

const BurgerMenu = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  z-index: 300;
`
