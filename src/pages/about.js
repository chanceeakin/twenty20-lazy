import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"

import Layout from "../components/Layout"
import { PAGES } from "../constants"

const Container = tw.div`
  w-screen h-screen flex flex-col justify-center items-center
`

const Heading = tw.h1`
  text-6xl text-white z-10
`

const TextContainer = styled.div`
  ${tw`p-4 h-48 max-h-full overflow-y-auto max-w-lg md:p-0`}
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`

const Body = tw.p`
  text-xl text-white z-10 mb-2
`

export default () => (
  <Layout title={PAGES.ABOUT}>
    <Container>
      <Heading>About</Heading>
      <TextContainer>
        <Body>
          Over the past several years, I've built a reputation for delivering
          quality products and simple code. I spend most of my time writing
          client side code, but I've also engineered IoT, AI/ML, and computer
          vision projects.
        </Body>
        <Body>
          Code isn't all that I do, though. Living in Austin, Texas, I'm also an
          avid volunteer and community member, empowering and educating the next
          generation through technology and civics.
        </Body>
        <Body>
          My passions are STEAM education and affordable housing in the greater
          central Texas area. Through education and the fostering of
          opportunities, we can build a stronger future for ourselves and those
          who come afterward.
        </Body>
        <Body>Day job? Senior Engineer at Red Ventures.</Body>
      </TextContainer>
    </Container>
  </Layout>
)
