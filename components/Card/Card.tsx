import type { HTMLAttributes } from "react"
import styled from "styled-components"

type DirectionType = "row" | "column"

type CardProps = {
  direction?: DirectionType
} & HTMLAttributes<HTMLDivElement>

export const Card = ({ direction = "row", children, ...rest }: CardProps) => {
  return (
    <Wrapper $direction={direction} {...rest}>
      {children}
    </Wrapper>
  )
}

type WrapperProps = {
  $direction: DirectionType
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === "row" ? "row" : "column"};
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

export const CardImage = styled.div`
  background-size: cover;
  border-right: 1px solid #f0f0f0;
`

export const CardContent = styled.div`
  padding: 24px 32px;
`
