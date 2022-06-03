import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import GithubCorner from "react-github-corner"

import { PAGES, COLORS } from "../constants"
import TransitionWrapper from "./TransitionWrapper"

import SEO from "../components/seo"
import Drawer from "./drawer"

const Wrapper = styled.div`
  ${({ title }) => title === PAGES.ABOUT && tw`bg-about`}
  ${({ title }) => title === PAGES.HOME && tw`bg-home`}
  ${({ title }) => title === PAGES.LINKS && tw`bg-links`}
  ${tw`relative`}
`

const CornerContainer = styled.div`
  ${tw`hidden lg:inline`}
`

export default ({ title, children, location }) => {
  const [color, setColor] = React.useState(COLORS[title])

  React.useEffect(() => {
    setColor(COLORS[title])
  }, [title])

  return (
    <>
      <SEO title={title} />
      <CornerContainer>
        <GithubCorner
          bannerColor={"#fff"}
          octoColor={color}
          svgStyle={{ zIndex: 3 }}
          href="https://github.com/chanceeakin"
        />
      </CornerContainer>
      <Drawer />
      <Wrapper title={title}>
        <TransitionWrapper>{children}</TransitionWrapper>
      </Wrapper>
    </>
  )
}
