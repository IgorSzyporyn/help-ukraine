import styled from "styled-components"
import { motion } from "framer-motion"

import type { HTMLAttributes } from "react"
import type { HTMLMotionProps } from "framer-motion"

type ButtonProps = {
  href?: string
} & HTMLAttributes<HTMLAnchorElement> &
  HTMLMotionProps<"a">

export const Button = (props: ButtonProps) => {
  return <Wrapper {...props} />
}

const Wrapper = styled(motion.a)`
  border: 0 none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  color: #000000;
  text-decoration: none;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 500;
`
