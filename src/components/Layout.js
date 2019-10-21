import React from "react"
import styled from "styled-components"

import Header from "./Header"
import RorschachIcon from "./RorschachIcon"

const LayoutStyles = styled.div`
  background-color: #d9d8d8;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`

const Layout = ({ children }) => {
  return (
    <LayoutStyles>
      <Header />
      <RorschachIcon />
      {children}
    </LayoutStyles>
  )
}

export default Layout
