import tw from "twin.macro"
import React from "react"

import Layout from "../components/Layout"
import { PAGES } from "../constants"

const Container = tw.div`
  w-screen h-screen flex flex-col justify-center items-center
`

const Heading = tw.h1`
  text-6xl text-white 
`

export default () => (
  <Layout title={PAGES.LINKS}>
    <Container>
      <Heading>Links</Heading>
    </Container>
  </Layout>
)
