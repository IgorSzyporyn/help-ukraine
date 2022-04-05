import styled from "styled-components"
import { motion } from "framer-motion"

import type { HTMLAttributes } from "react"
import type { HTMLMotionProps } from "framer-motion"

type ButtonProps = {
  href?: string
  small?: boolean
} & HTMLAttributes<HTMLAnchorElement> &
  HTMLMotionProps<"a">

export const Button = ({ small, ...props }: ButtonProps) => {
  return <Wrapper $small={small} {...props} />
}

type WrapperProps = {
  $small?: boolean
}

const Wrapper = styled(motion.a)<WrapperProps>`
  border: 0 none;
  background-color: transparent;
  padding: ${({ $small }) => ($small ? "0 16px" : "0 32px")};
  margin: 0;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ $small }) => ($small ? "42px" : "56px")};
  font-size: ${({ $small }) => ($small ? "14px" : "15px")};
  color: #000000;
  text-decoration: none;
  border-radius: 7px;
  font-weight: 500;
`
