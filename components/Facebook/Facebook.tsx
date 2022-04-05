import styled from "styled-components"

import type { HTMLAttributes } from "react"

export type FacebookProps = {} & HTMLAttributes<SVGSVGElement>

export const Facebook = (props: FacebookProps) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1024 1024"
      enableBackground="new 0 0 1024 1024"
      {...props}
    >
      <g>
        <Blue
          d="M1024,512C1024,229.2,794.8,0,512,0S0,229.2,0,512c0,255.6,187.2,467.4,432,505.8V660H302V512h130V399.2
   C432,270.9,508.4,200,625.4,200c56,0,114.6,10,114.6,10v126h-64.6c-63.6,0-83.4,39.5-83.4,80v96h142l-22.7,148H592v357.8
   C836.8,979.4,1024,767.6,1024,512z"
        />
        <White
          d="M711.3,660L734,512H592v-96c0-40.5,19.8-80,83.4-80H740V210c0,0-58.6-10-114.6-10
   c-117,0-193.4,70.9-193.4,199.2V512H302v148h130v357.8c26.1,4.1,52.8,6.2,80,6.2s53.9-2.1,80-6.2V660H711.3z"
        />
      </g>
    </svg>
  )
}

const Blue = styled.path`
  fill: #1877f2;
`

const White = styled.path`
  fill: #ffffff;
`
