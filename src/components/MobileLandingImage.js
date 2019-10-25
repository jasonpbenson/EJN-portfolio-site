import React from "react"
import styled from "styled-components"

import mobileLandingImage from "../assets/images/mobile-landing-page-image.png"

const ImageContainer = styled.div`
  display: none;
  @media screen and (max-width: 679px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25%;
    width: 100%;
    img {
      width: 80%;
    }
  }
  @media screen and (max-width: 414px) {
    margin-top: 50%;
  }
`

const MobileLandingImage = () => {
  return (
    <ImageContainer>
      <img src={mobileLandingImage} alt="artwork detail" />
    </ImageContainer>
  )
}

export default MobileLandingImage
