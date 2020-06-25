import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled"
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
  ${tw`rounded px-10 py-2`}
  border: 1px solid white;
  background: transparent;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Title = styled.span`
  ${tw`flex text-white`}
`

const Content = styled.div`
  ${tw`text-white rounded`}
  background: transparent;
  border-left: 1px solid white;
  border-right: 1px solid white;
  border-bottom: ${(props) =>
    console.log(props) || (props.isActive && `1px solid white;`)}
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease;
`

const StyledLink = styled(Link)`
  ${tw`block px-4 py-2`}
`

export default function Drawer() {
  const [isActive, setActive] = React.useState(false)
  const [contentHeight, setHeight] = React.useState(0)
  const contentRef = React.useRef()

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
        <Title>Menu</Title>
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
