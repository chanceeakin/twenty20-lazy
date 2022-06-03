import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"

import Layout from "../components/Layout"
import { PAGES } from "../constants"
import Avatar from "../images/avatar.jpg"

const Container = tw.div`
  w-screen h-screen flex flex-col justify-center items-center
`

const Heading = tw.h1`
  text-6xl text-white z-10
`

const TextContainer = styled.div`
  ${tw`p-4 h-48 lg:h-64 max-h-full overflow-y-auto max-w-xl md:p-0 flex flex-col`}
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`

const AvatarImg = tw.img`
rounded-full w-32 xl:w-48 self-center m-4
`

const Body = tw.p`
  text-xl text-white z-10 mb-4
`

export default ({ location }) => (
  <Layout title={PAGES.ABOUT} location={location}>
    <Container>
      <Heading>About</Heading>
      <TextContainer>
        <Body>
          Over the past several years, I've built a reputation for delivering
          quality cloud products through simple code solutions. In addition full
          stack web development, I've engineered IoT, AI/ML, and computer vision
          projects. Likewise, I've mentored engineeers and former bootcampers
          (fellow bootcamp grad here!) through career transitions, technical
          growth, and professionl development.
        </Body>
        <Body>
          Code isn't all that I do, though. Living in Austin, Texas, I'm also an
          avid volunteer and community member, empowering and educating the next
          generation through technology, civics, and the fine arts.
        </Body>
        <Body>
          My passions are STEAM education, initiatives in technology and
          software engineering, and water conservation efforts. Through
          education and the fostering of opportunities, we can build a stronger
          future for ourselves and those who come afterward.
        </Body>
        <Body>
          Likewise, the fine arts will always hold a place in my heart, and I
          volunteer my advisory time on a number of committees in that world.
        </Body>
        <Body>Day job? Senior Software Engineer @ Procore.</Body>
        <AvatarImg src={Avatar} alt="Portrait of Chance Eakin" />
      </TextContainer>
    </Container>
  </Layout>
)
