import styled from "styled-components"

import type { HTMLAttributes } from "react"

export type YouTubeProps = {
  height?: string
  width?: string
} & HTMLAttributes<SVGSVGElement>

export const YouTube = (props: YouTubeProps) => {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 300 300"
      enableBackground="new 0 0 400 400"
      {...props}
    >
      <metadata id="metadata17"></metadata>
      <defs id="defs15">
        <pattern
          y="0"
          x="0"
          height="6"
          width="6"
          patternUnits="userSpaceOnUse"
          id="EMFhbasepattern"
        />
      </defs>
      <g id="g5355">
        <Red width="300" height="300" x="0" y="0" ry="150" />
        <g
          transform="matrix(5.9026317,0,0,5.9026317,521.39665,-711.31763)"
          id="g4167"
        >
          <White
            d="m 149.9375,79.222656 c 0,0 -63.218849,5.9e-5 -79.085938,4.123047 -8.495787,2.373802 -15.491408,9.3695 -17.865234,17.990237 -4.122953,15.8671 -4.123047,48.72656 -4.123047,48.72656 0,0 9.4e-5,32.9842 4.123047,48.60156 2.373826,8.62062 9.244506,15.49138 17.865234,17.86524 15.99203,4.24788 79.085938,4.24804 79.085938,4.24804 0,0 63.34418,-5e-5 79.21094,-4.12304 8.62079,-2.37381 15.49133,-9.11966 17.74023,-17.86524 4.24793,-15.74232 4.24805,-48.60156 4.24805,-48.60156 0,0 0.12484,-32.98446 -4.24805,-48.85156 -2.2489,-8.620737 -9.11944,-15.491334 -17.74023,-17.740237 -15.86676,-4.372847 -79.21094,-4.373047 -79.21094,-4.373047 z m -20.11523,40.480464 52.59961,30.35938 -52.59961,30.23438 0,-60.59376 z"
            transform="matrix(0.16941596,0,0,0.16941596,-88.332912,120.50856)"
            id="path4156"
          />
        </g>
      </g>
    </svg>
  )
}

const Red = styled.rect`
  fill: #ff0000;
  fill-opacity: 1;
`

const White = styled.path`
  fill: #ffffff;
  fill-opacity: 1;
  fill-rule: nonzero;
  stroke: none;
`
