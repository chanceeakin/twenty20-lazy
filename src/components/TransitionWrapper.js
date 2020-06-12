import React from "react"
import tw from "twin.macro"
import Particles from "react-particles-js"
import { TransitionState } from "gatsby-plugin-transition-link"

import { animated, Transition, Keyframes } from "react-spring/renderprops"

const Container = tw(animated.div)`
  relative w-screen h-screen
`

const TWParticles = tw(Particles)`
  absolute top-0 left-0 w-screen h-screen
`

const AnimatedContainer = Keyframes.Spring({
  open: {
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  },
  // or async functions with side-effects
  close: {
    opacity: 0,
    from: { opacity: 1 },
    delay: 100,
  },
})

const TransitionWrapper = React.memo(({ children }) => {
  return (
    <TransitionState>
      {({ transitionStatus }) => {
        const mount = ["entering", "entered"].includes(transitionStatus)
        const state = mount ? "open" : "close"
        return (
          <>
            <Transition
              items={mount}
              from={{
                opacity: 0,
              }}
              enter={{
                opacity: 1,
                delay: 200,
              }}
              leave={{
                delay: 200,
                opacity: 0,
              }}
            >
              {(show) =>
                show &&
                ((props) => (
                  <>
                    <AnimatedContainer state={state}>
                      {(o) => (
                        <animated.div style={o}>
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
                              retina_detect: true,
                            }}
                          />
                        </animated.div>
                      )}
                    </AnimatedContainer>
                    <Container style={props}>{children}</Container>
                  </>
                ))
              }
            </Transition>
          </>
        )
      }}
    </TransitionState>
  )
})

export default TransitionWrapper
