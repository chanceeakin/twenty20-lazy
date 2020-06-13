import tw from "twin.macro"
import React from "react"
import { Link } from "gatsby"
import { useTransition, animated } from "react-spring"

import Layout from "../components/Layout"
import { PAGES } from "../constants"

const Container = tw.div`
  w-screen h-screen flex flex-col justify-center items-center
`

const Heading = tw.h1`
  text-6xl text-white 
`

const Listener = tw.div`
  w-56 h-5 flex justify-center 
`

const Text = tw(animated.p)`
  text-xl text-white hover:cursor-pointer
`

export default () => {
  const [toggle, set] = React.useState(false)
  const transitions = useTransition(toggle, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const handleEnter = React.useCallback(() => {
    set(true)
  }, [])

  const handleExit = React.useCallback(() => {
    set(false)
  }, [])

  return (
    <Layout title={PAGES.HOME}>
      <Container>
        <Heading>Chance Eakin</Heading>
        <Listener onMouseEnter={handleEnter} onMouseLeave={handleExit}>
          {transitions.map(({ item, key, props }) =>
            item ? (
              <Text key={key} style={props}>
                <Link to="/about/">About Me.</Link>
              </Text>
            ) : (
              <Text key={key} style={props}>
                <Link to="/about/">Software Engineer.</Link>
              </Text>
            )
          )}
        </Listener>
      </Container>
    </Layout>
  )
}
