import tw from "twin.macro"
import React from "react"

import TransitionWrapper from "../components/TransitionWrapper"

import SEO from "../components/seo"

const Wrapper = tw.div`
  bg-gray-900 relative 
`

export default ({ title, children }) => (
  <>
    <SEO title={title} />
    <Wrapper>
      <TransitionWrapper>{children}</TransitionWrapper>
    </Wrapper>
  </>
)
