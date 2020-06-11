import React from "react"
import tw from "twin.macro"
import Particles from "react-particles-js"
import { TransitionState } from "gatsby-plugin-transition-link"

import { useTransition, useSpring, useChain, config } from "react-spring"
import { animated, Transition } from "react-spring/renderprops"

const Container = tw(animated.div)`
  relative w-screen h-screen
`

const TWParticles = tw(Particles)`
  absolute top-0 left-0 w-screen h-screen
`

const TransitionWrapper = React.memo(({ children }) => {
  return (
    <TransitionState>
      {({ transitionStatus }) => {
        const mount = ["entering", "entered"].includes(transitionStatus)

        return (
          <>
            <TWParticles
              params={{
                fps_limit: 28,
                particles: {
                  number: {
                    value: 300,
                    density: {
                      enable: false,
                    },
                  },
                  size: {
                    value: 2,
                  },
                  line_linked: {
                    enable: true,
                    distance: 50,
                    opacity: 0.4,
                  },
                  move: {
                    speed: 1,
                  },
                  opacity: {
                    anim: {
                      enable: true,
                      opacity_min: 0.05,
                      speed: 2,
                      sync: false,
                    },
                    value: 0.4,
                  },
                },
                retina_detect: false,
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "bubble",
                    },
                  },
                  modes: {
                    bubble: {
                      size: 8,
                      distance: 50,
                    },
                  },
                },
              }}
            />
            <Transition
              items={mount}
              from={{
                opacity: 0,
              }}
              enter={{
                opacity: 1,
              }}
              leave={{
                opacity: 0,
              }}
            >
              {(show) =>
                show &&
                ((props) => <Container style={props}>{children}</Container>)
              }
            </Transition>
          </>
        )
      }}
    </TransitionState>
  )
})

export default TransitionWrapper
