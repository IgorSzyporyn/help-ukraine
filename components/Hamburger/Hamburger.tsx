import styled, { css } from "styled-components"

import type { HTMLAttributes } from "react"

export type HamburgerProps = {
  open?: boolean
} & HTMLAttributes<SVGSVGElement>

export const Hamburger = ({ open, ...rest }: HamburgerProps) => {
  return (
    <Svg viewBox="0 0 100 100" {...rest}>
      <Line1 $open={open} d="M0 40h62c13 0 6 28-4 18L35 35" />
      <Line1 $open={open} d="M0 40h62c13 0 6 28-4 18L35 35" />
      <Line2 $open={open} d="M0 50h70" />
      <Line2 $open={open} d="M0 50h70" />
      <Line3 $open={open} d="M0 60h62c13 0 6-28-4-18L35 65" />
      <Line3 $open={open} d="M0 60h62c13 0 6-28-4-18L35 65" />
    </Svg>
  )
}

type StyledProps = {
  $open?: boolean
}

const Svg = styled.svg`
  cursor: pointer;
`

const Path = styled.path`
  fill: none;
  stroke: #000000;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  --length: 24;
  --offset: -38;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
  transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
`

const BaseLine = styled(Path)<StyledProps>`
  --total-length: 126.64183044433594;

  ${({ $open }) =>
    $open
      ? css`
          --length: 22.627416998;
          --offset: -94.1149185097;
        `
      : ""};
`

const Line1 = styled(BaseLine)<StyledProps>``

const Line2 = styled(Path)<StyledProps>`
  --total-length: 70;

  ${({ $open }) =>
    $open
      ? css`
          --length: 0;
          --offset: -50;
        `
      : ""}
`

const Line3 = styled(BaseLine)<StyledProps>``
