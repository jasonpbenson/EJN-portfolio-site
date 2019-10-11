import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const LandingImage = props => {
  const ImageContainer = styled.div`
    margin: 0 auto;
    width: 40%;
    min-width: 425px;
  `
  const DisplayRandomLandingImage = () => {
    const imageData = props.imageSet
    if (imageData.edges.length > 0) {
      let index = Math.floor(Math.random() * Math.floor(imageData.edges.length))
      return (
        <Img
          fluid={imageData.edges[index].node.childImageSharp.fluid}
          fadeIn="true"
          placeholderStyle={{ display: "none" }}
          alt="artwork detail cutout"
        />
      )
    } else {
      return <h1>ERIN JANE NELSON</h1>
    }
  }

  return (
    <ImageContainer>
      <DisplayRandomLandingImage />
    </ImageContainer>
  )
}

export default LandingImage
