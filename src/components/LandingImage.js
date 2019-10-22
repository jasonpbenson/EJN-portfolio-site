import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import flowerSvg from "../assets/images/svg-icons/flower-with-four-petals.svg"

const LandingImage = props => {
  console.log(props)
  const ImageContainer = styled.div`
    margin: 12% auto;
    max-width: 512px;
    min-width: 425px;
    position: relative;
    width: 35%;
  `
  const Svg = styled.img`
    left: 0;
    position: absolute;
    top: -1%;
    width: 100%;
  `

  const DisplayRandomLandingImage = () => {
    const imageData = props.imageSet
    if (imageData.edges.length > 0) {
      let index = Math.floor(Math.random() * Math.floor(imageData.edges.length))
      return (
        <Img
          fluid={imageData.edges[index].node.childImageSharp.fluid}
          src={imageData.edges[index].node.childImageSharp.fluid.src}
          placeholderStyle={{ display: "none" }}
          alt="artwork detail"
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
