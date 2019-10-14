import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import flowerSvg from "../assets/images/svg-icons/flower-with-four-petals.svg"

const LandingImage = props => {
  const ImageContainer = styled.div`
    margin: 0 auto;
    min-width: 425px;
    position: relative;
    width: 40%;
  `
  const Svg = styled.img`
    left: -2%;
    position: absolute;
    top: -2%;
    width: 100%;
  `

  const DisplayRandomLandingImage = () => {
    const imageData = props.imageSet
    if (imageData.edges.length > 0) {
      let index = Math.floor(Math.random() * Math.floor(imageData.edges.length))
      return (
        <Img
          fluid={imageData.edges[index].node.childImageSharp.fluid}
          placeholderStyle={{ display: "none" }}
          alt="artwork detail cutout"
          imgStyle={{ zIndex: "100" }}
        />
      )
    } else {
      return <h1>ERIN JANE NELSON</h1>
    }
  }

  return (
    <ImageContainer>
      <DisplayRandomLandingImage />
      <Svg
        src={flowerSvg}
        alt="flower shape placed behind artwork detail cutout to create greater contrast with background"
      />
    </ImageContainer>
  )
}

export default LandingImage
