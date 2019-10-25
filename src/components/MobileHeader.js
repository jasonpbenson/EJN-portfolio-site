import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { globalHistory } from "@reach/router"

import burgerIcon from "../assets/images/svg-icons/hamburger-1.svg"

const MobileHeader = props => {
  const [location, newLocation] = useState("/")

  useEffect(() => {
    globalHistory.listen(({ location }) => {
      return newLocation(location.pathname)
    })
  })

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const PageLocation = () => {
    if (location === "/information/" && !props.displayMobileMenu) {
      return <h2>information</h2>
    }
    if (location === "/exhibition-list" && !props.displayMobileMenu) {
      return <h2>exhibitions</h2>
    }
    if (location.match(/^\/\d{4}(-)\w/) && !props.displayMobileMenu) {
      return (
        <h2>
          <Link to="/exhibition-list">exhibitions</Link>
        </h2>
      )
    } else {
      return null
    }
  }

  const MobileHeaderContainer = styled.div`
    display: none;
    @media screen and (max-width: 679px) {
      a {
        text-decoration: none;
        color: inherit;
      }
      header {
        text-align: justify;
        width: 100%;
      }
      h1 {
        color: ${props.displayMobileMenu ? "#D9D8D8" : "#2f2c5d"};
        font-size: 8vw;
        margin-bottom: 1rem;
      }
      h2 {
        color: #ff5912;
        fontsize: 5vw;
        position: fixed;
        right: 8%;
        top: 12vw;
      }
      img {
        width: 14vw;
      }
      img: hover {
        cursor: pointer;
      }
      align-items: flex-start;
      background-image: ${props.displayMobileMenu
        ? "none"
        : "linear-gradient(#d9d8d8 90%, #d9d8d850, #d9d8d800)"};
      color: #2f2c5d;
      display: flex;
      flex-flow: column;
      height: 18vw;
      justify-content: flex-start;
      padding: 0 5%;
      position: fixed;
      width: 100vw;
      z-index: 300;
    }
    @media screen and (max-width: 414px) {
      h2 {
        top: 15%;
      }
      height: 24%;
      padding-top: 15%;
    }
  `

  return (
    <MobileHeaderContainer>
      <header>
        <h1>
          <Link
            to="/"
            onClick={props.displayMobileMenu ? props.toggleMenu : null}
          >
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </header>
      <nav>
        <img
          src={burgerIcon}
          alt="hamburger menu icon"
          onClick={props.toggleMenu}
        />

        <PageLocation />
      </nav>
    </MobileHeaderContainer>
  )
}

export default MobileHeader
