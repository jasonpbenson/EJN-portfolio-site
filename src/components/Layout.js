import React, { useState } from "react"
import styled from "styled-components"

import Header from "./Header"
import MobileHeader from "./MobileHeader"
import MobileMenu from "./MobileMenu"
import RorschachIcon from "./RorschachIcon"

const LayoutStyles = styled.div`
  background-color: #d9d8d8;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`

const Layout = ({ children }) => {
  const [displayMobileMenu, updateDisplayMobileMenu] = useState(false)

  const toggleMenu = () => {
    return updateDisplayMobileMenu(!displayMobileMenu)
  }

  return (
    <LayoutStyles>
      <Header />
      <MobileHeader
        toggleMenu={toggleMenu}
        displayMobileMenu={displayMobileMenu}
      />
      <MobileMenu
        toggleMenu={toggleMenu}
        displayMobileMenu={displayMobileMenu}
      />
      <RorschachIcon />
      {children}
    </LayoutStyles>
  )
}

export default Layout
