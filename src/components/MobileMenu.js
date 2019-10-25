import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { globalHistory } from "@reach/router"

import ellipse from "../assets/images/svg-icons/ellipse-1.svg"
import ellipseActive from "../assets/images/svg-icons/ellipse-2.svg"
import mobileRorschach from "../assets/images/svg-icons/rorschach-icon.svg"

const MobileMenu = props => {
  useEffect(() => {
    console.log("clicked", props.displayMobileMenu)
  }, [props.displayMobileMenu])

  const [location, newLocation] = useState("/")

  useEffect(() => {
    globalHistory.listen(({ location }) => {
      return newLocation(location.pathname)
    })
  })

  const MobileMenuContainer = styled.div`
    display: none;
    @media screen and (max-width: 679px) {
      a {
        color: inherit;
        text-decoration: none;
      }
      ul li:nth-child(1) {
        list-style-image: ${location === "/information/"
          ? `url(${ellipseActive})`
          : `url(${ellipse})`};
      }
      ul li:nth-child(2) {
        list-style-image: ${location === "/exhibition-list"
          ? `url(${ellipseActive})`
          : `url(${ellipse})`};
      }
      li {
        width: 85vw;
      }
      h1 {
        color: #8493bf;
        font-size: 6vw;
        margin-left: 54%;
      }
      .info-selector {
        color: ${location === "/information/" ? "#FF5912" : "#8493bf"};
      }
      .exhibition-selector {
        color: ${location === "/exhibition-list" ? "#FF5912" : "#8493bf"};
      }
      img {
        padding-top: 18%;
        width: 40%;
      }
      align-items: center;
      background-color: #2f2c5d;
      color: #d9d8d8;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: 100vh;
      left: 0;
      padding-top: 30vw;
      position: fixed;
      text-align: right;
      top: 0;
      transform: ${props.displayMobileMenu
        ? "translate3d(0vw,0,0)"
        : "translate3d(-100vw, 0, 0)"};
      transition: ${props.displayMobileMenu
        ? "transform 1s cubic-bezier(0, 0.52, 0, 1)"
        : "transform 1s ease-out"};
      width: 100vw;
      z-index: 100;
    }
    @media screen and (max-width: 414px) {
      h1 {
        font-size: 20pt;
        margin-left: 35%;
        margin-bottom: 28px;
      }
      img {
        padding-top: 40%;
      }
      padding-top: 45%;
    }
    @media screen and (max-width: 320px) {
      h1 {
        margin-left: 30%;
      }
    }
  `
  return (
    <MobileMenuContainer>
      <nav>
        <ul>
          <li>
            <h1 className="info-selector">
              <Link to="/information/" onClick={props.toggleMenu}>
                information
              </Link>
            </h1>
          </li>
          <li>
            <h1 className="exhibition-selector">
              <Link to="/exhibition-list" onClick={props.toggleMenu}>
                exhibitions
              </Link>
            </h1>
          </li>
        </ul>
      </nav>
      <img
        src={mobileRorschach}
        alt="decorative rorschach inspired icon for menu page"
      />
    </MobileMenuContainer>
  )
}

export default MobileMenu
