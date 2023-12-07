/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { ReactNode } from "react"

interface ColBoxProps{
  children:ReactNode
  gap: number
}

const ColBox = ({children, gap}:ColBoxProps) => {
  const boxStyle = css({
    display: "flex",
    flexDirection: "column",
    gap:`${gap}px`
  })
  return (
    <div css={boxStyle}>{children}</div>
  )
}

export default ColBox
