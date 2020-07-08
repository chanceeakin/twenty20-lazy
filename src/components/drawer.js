import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled"
import { useTransition, animated } from "react-spring"
import { MdMenu, MdClose } from "react-icons/md"
import { Link } from "gatsby"
import { PAGES, LINKS } from "../constants"

const Container = styled.div`
  ${tw`fixed`}
  top: 1rem;
  left: 1rem;
  z-index: 1000;
  display: inline-block;
`

const Button = styled.button`
  ${tw`w-1 flex justify-center lg:justify-start lg:w-full pb-4`}
  background: transparent;
  cursor: pointer;
  border: none;
  :focus {
    outline: none;
  }
`

const MenuIcon = styled(MdMenu)`
  ${tw`text-white hover:text-gray-400`}
`

const CloseIcon = styled(MdClose)`
  ${tw`text-white hover:text-gray-400`}
`

const Content = styled.div`
  ${tw`text-white rounded`}
  background: transparent;
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease;
`

const StyledLink = styled(Link)`
  ${tw`block px-4 py-2 hover:text-gray-400 active:text-gray-600`}
`

export default function Drawer() {
  const [isActive, setActive] = React.useState(false)
  const [contentHeight, setHeight] = React.useState(0)
  const contentRef = React.useRef()

  const transitions = useTransition(isActive, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const handleClick = React.useCallback(() => {
    // there's a bug here. something to deo with async/ sync state and content height.
    const contentHeight = contentRef.current.scrollHeight
    setActive((state) => {
      setHeight(!state ? contentHeight : 0)
      return !state
    })
  }, [])

  return (
    <Container isActive={isActive}>
      <Button onClick={handleClick}>
        {transitions.map(({ item, key, props }) =>
          item ? (
            <animated.div key={key} style={props}>
              <CloseIcon />
            </animated.div>
          ) : (
            <animated.div key={key} style={props}>
              <MenuIcon />
            </animated.div>
          )
        )}
      </Button>
      <Content
        ref={contentRef}
        style={{ height: contentHeight }}
        isActive={isActive}
      >
        <StyledLink to={LINKS.HOME}>{PAGES.HOME}</StyledLink>
        <StyledLink to={LINKS.ABOUT}>{PAGES.ABOUT}</StyledLink>
        <StyledLink to={LINKS.LINKS}>{PAGES.LINKS}</StyledLink>
      </Content>
    </Container>
  )
}
