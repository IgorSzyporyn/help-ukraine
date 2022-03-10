import type { AppProps } from "next/app"
import styled from "styled-components"
import "../styles/global.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80vw;
  min-width: 300px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
`
