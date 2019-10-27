import React from "react"
import styled from "styled-components"

import scroll from "../assets/images/svg-icons/squirrelelfscroll.svg"

const Styled404 = styled.div`
  img {
    left: 12vw;
    position: absolute;
    top: 13vw;
    width: 75%;
  }
  h1 {
    font-size: 3vw;
    left: 35vw;
    position: absolute;
    top: 32vw;
  }
  color: #ff5912;
  height: 100%;
  position: relative;
  width: 100%;
  @media screen and (max-width: 679px) {
    img {
      top: 20vw;
    }
    h1 {
      top: 40vw;
    }
  }
  @media screen and (max-width: 414px) {
    img {
      left: 0;
      top: 46vw;
      width: 100%;
    }
    h1 {
      left: 28vw;
      font-size: 4.5vw;
      top: 70vw;
    }
  }
`

const PageNotFound = () => (
  <Styled404>
    <img
      src={scroll}
      alt="illustration of woodland creatures holding an open blank scroll"
    />
    <h1>nonexistent route</h1>
  </Styled404>
)

export default PageNotFound
