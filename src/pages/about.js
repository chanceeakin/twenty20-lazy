import tw from "twin.macro"
import { Link } from "gatsby"
import React from "react"

import Layout from "../components/Layout"

const Container = tw.div`
  w-screen h-screen flex flex-col justify-center items-center
`

const Heading = tw.h1`
  text-6xl text-white hover:cursor-pointer z-10
`

export default () => {
  return (
    <Layout title="About">
      <Container>
        <Heading>
          <Link to="/">About</Link>
        </Heading>
      </Container>
    </Layout>
  )
}
