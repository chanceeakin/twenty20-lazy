import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

import Layout from "../components/Layout"
import { PAGES } from "../constants"

const Container = styled.div`
  ${tw`w-screen h-screen flex flex-col justify-center items-center`}
`

const Heading = styled.h1`
  ${tw`text-6xl text-white text-center`}
`

const LinkContainer = styled.div`
  ${tw`flex`}
`

const Link = styled.a`
  ${tw`text-4xl text-white z-10 mb-2 hover:text-gray-400 block p-4`}
`

export default ({ location }) => (
  <Layout title={PAGES.LINKS} location={location}>
    <Container>
      <Heading>Links</Heading>
      <LinkContainer>
        <Link href="https://www.instagram.com/chanceeakin/">
          <FaInstagram />
        </Link>
        <Link href="https://www.linkedin.com/in/chanceeakin/">
          <FaLinkedin />
        </Link>
        <Link href="https://www.github.com/chanceeakin/">
          <FaGithub />
        </Link>
      </LinkContainer>
    </Container>
  </Layout>
)
