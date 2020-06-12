import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"

import TransitionWrapper from "../components/TransitionWrapper"

import SEO from "../components/seo"

const Wrapper = styled.div`
  ${({ title }) => title === "About" && tw`bg-teal-900`}
  ${({ title }) => title === "Home" && tw`bg-gray-900`}
  ${tw`relative`}
`

export default ({ title, children }) => (
  <>
    <SEO title={title} />
    <Wrapper title={title}>
      <TransitionWrapper>{children}</TransitionWrapper>
    </Wrapper>
  </>
)
