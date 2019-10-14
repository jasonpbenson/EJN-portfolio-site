import React from "react"
import styled from "styled-components"

import Header from "../components/Header"
import RorschachIcon from "../components/RorschachIcon"

const Layout = ({ children }) => {
  const LayoutStyles = styled.div`
    background-color: #d9d8d8;
    height: 100vh;
    overflow: hidden;
    width: 100vw;
  `
  return (
    <LayoutStyles>
      <Header />
      <RorschachIcon />
      {children}
    </LayoutStyles>
  )
}

export default Layout
