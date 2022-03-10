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
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: center;
`
