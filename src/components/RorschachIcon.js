import React from "react"
import styled from "styled-components"
import anime from "animejs"

const RorschachIconContainer = styled.div`
  position: fixed;
  bottom: 1%;
  left: 1%;
`

const SvgStyles = styled.svg`
  margin: 0 -18px;
  transform: scale(0.6);
`

class RorschachIcon extends React.Component {
  componentDidMount() {
    anime({
      targets: "#Soft_1",
      duration: 3000,
      easing: "easeInOutCubic",
      keyframes: [
        {
          d:
            "M-1221.995,2678.356v165.1s-6.488-29.908-18.613-25.531-23.42,22.019-30.054,27.194-23.51-8.1-20.724-11.055c2.1-2.254,21.8-6.2,20.724-13.429s-22.024-6.8-25.045-15.482c-2.409-8.945,9.11-18.515,8.308-34.862s-13.454-22.766-11.516-30.526c7.435-5.863,19.9-6.766,19.9-6.766s-35.39-27.515-27.107-45.127c6.24-10.644,17.516-7.379,19.781-14.823s-10.872-8.342-10.721-14.95c4.993-8.287,10.249-1.329,18.486-5.173s7.39-11.4,14.459-10.205,10.365-16.5,11.117,10.205S-1221.995,2678.356-1221.995,2678.356Z",
          fill: "#2f2c5d",
          stroke: "#2f2c5d",
        },
        {
          d:
            "M-1307.375,2678.356v165.1s6.488-29.908,18.613-25.531,23.42,22.019,30.054,27.194,23.51-8.1,20.724-11.055c-2.1-2.254-21.8-6.2-20.724-13.429s22.024-6.8,25.045-15.482c2.409-8.945-9.11-18.515-8.308-34.862s13.454-22.766,11.516-30.526c-7.435-5.863-19.9-6.766-19.9-6.766s35.39-27.515,27.107-45.127c-6.24-10.644-17.516-7.379-19.781-14.823s10.872-8.342,10.721-14.95c-4.993-8.287-10.249-1.329-18.486-5.173s-7.39-11.4-14.459-10.205-10.365-16.5-11.117,10.205S-1307.375,2678.356-1307.375,2678.356Z",
          fill: "#ff5912",
          stroke: "#ff5912",
        },
      ],
      // loop: true,
      direction: "alternate",
      fill: "#2f2c5d",
    })
    anime({
      targets: "#Soft_2",
      duration: 3000,
      delay: 200,
      easing: "easeInOutCubic",
      keyframes: [
        {
          d:
            "M-1307.375,2678.356v165.1s6.488-29.908,18.613-25.531,23.42,22.019,30.054,27.194,23.51-8.1,20.724-11.055c-2.1-2.254-21.8-6.2-20.724-13.429s22.024-6.8,25.045-15.482c2.409-8.945-9.11-18.515-8.308-34.862s13.454-22.766,11.516-30.526c-7.435-5.863-19.9-6.766-19.9-6.766s35.39-27.515,27.107-45.127c-6.24-10.644-17.516-7.379-19.781-14.823s10.872-8.342,10.721-14.95c-4.993-8.287-10.249-1.329-18.486-5.173s-7.39-11.4-14.459-10.205-10.365-16.5-11.117,10.205S-1307.375,2678.356-1307.375,2678.356Z",
          fill: "#2f2c5d",
        },
        {
          d:
            "M-1221.995,2678.356v165.1s-6.488-29.908-18.613-25.531-23.42,22.019-30.054,27.194-23.51-8.1-20.724-11.055c2.1-2.254,21.8-6.2,20.724-13.429s-22.024-6.8-25.045-15.482c-2.409-8.945,9.11-18.515,8.308-34.862s-13.454-22.766-11.516-30.526c7.435-5.863,19.9-6.766,19.9-6.766s-35.39-27.515-27.107-45.127c6.24-10.644,17.516-7.379,19.781-14.823s-10.872-8.342-10.721-14.95c4.993-8.287,10.249-1.329,18.486-5.173s7.39-11.4,14.459-10.205,10.365-16.5,11.117,10.205S-1221.995,2678.356-1221.995,2678.356Z",
        },
      ],
      // loop: true,
      direction: "alternate",
      fill: "#2f2c5d",
    })
    anime({
      targets: "#Sharp_1",
      duration: 3000,
      delay: 200,
      easing: "easeInOutCubic",
      keyframes: [
        {
          d:
            "M-1165.246,2601.395l-14.754,40.36s-2.627,3.057-14.679,0-23.443-16.317-23.443-16.317,17.115,20.922,17.115,33.634-5.21,12.91-17.115,17.213-30.505,0-30.505,0l22.166,14.378s1.787,13.135-3.755,22.842-18.411,15.988-18.411,15.988l30.505,7.328-30.505,39.534,45.682-14.63s3.368,13.534-9.411,31.715c17.429-18.491,16.644-23.757,28.435-20.408s18.729,33.8,18.729,33.8Z",
          fill: "#2f2c5d",
        },
        {
          d:
            "M-1248.573,2601.395l14.754,40.36s2.627,3.057,14.679,0,23.443-16.317,23.443-16.317-17.115,20.922-17.115,33.634,5.21,12.91,17.115,17.213,30.505,0,30.505,0l-22.166,14.378s-1.787,13.135,3.755,22.842,18.411,15.988,18.411,15.988l-30.505,7.328,30.505,39.534-45.682-14.63s-3.368,13.534,9.411,31.715c-17.429-18.491-16.644-23.757-28.435-20.408s-18.729,33.8-18.729,33.8Z",
        },
      ],

      // loop: true,
      direction: "alternate",
      fill: "#2f2c5d",
    })
    anime({
      targets: "#Sharp_2",
      duration: 3000,
      easing: "easeInOutCubic",
      keyframes: [
        {
          d:
            "M-1248.573,2601.395l14.754,40.36s2.627,3.057,14.679,0,23.443-16.317,23.443-16.317-17.115,20.922-17.115,33.634,5.21,12.91,17.115,17.213,30.505,0,30.505,0l-22.166,14.378s-1.787,13.135,3.755,22.842,18.411,15.988,18.411,15.988l-30.505,7.328,30.505,39.534-45.682-14.63s-3.368,13.534,9.411,31.715c-17.429-18.491-16.644-23.757-28.435-20.408s-18.729,33.8-18.729,33.8Z",
          fill: "#2f2c5d",
          stroke: "#2f2c5d",
        },
        {
          d:
            "M-1165.246,2601.395l-14.754,40.36s-2.627,3.057-14.679,0-23.443-16.317-23.443-16.317,17.115,20.922,17.115,33.634-5.21,12.91-17.115,17.213-30.505,0-30.505,0l22.166,14.378s1.787,13.135-3.755,22.842-18.411,15.988-18.411,15.988l30.505,7.328-30.505,39.534,45.682-14.63s3.368,13.534-9.411,31.715c17.429-18.491,16.644-23.757,28.435-20.408s18.729,33.8,18.729,33.8Z",
          fill: "#ff5012",
          stroke: "#ff5912",
        },
      ],

      // loop: true,
      direction: "alternate",
    })
  }

  render() {
    return (
      <RorschachIconContainer>
        <SvgStyles
          xmlns="http://www.w3.org/2000/svg"
          width="91.316"
          height="206.573"
          viewBox="0 0 91.316 206.573"
        >
          <path
            id="Sharp_1"
            data-name="Path 48"
            d="M-1248.573,2601.395l14.754,40.36s2.627,3.057,14.679,0,23.443-16.317,23.443-16.317-17.115,20.922-17.115,33.634,5.21,12.91,17.115,17.213,30.505,0,30.505,0l-22.166,14.378s-1.787,13.135,3.755,22.842,18.411,15.988,18.411,15.988l-30.505,7.328,30.505,39.534-45.682-14.63s-3.368,13.534,9.411,31.715c-17.429-18.491-16.644-23.757-28.435-20.408s-18.729,33.8-18.729,33.8Z"
            transform="translate(1250.627 -2600.708)"
            fill="none"
            stroke="none"
            stroke-width="2"
          />
        </SvgStyles>
        <SvgStyles
          xmlns="http://www.w3.org/2000/svg"
          width="91.317"
          height="206.573"
          viewBox="0 0 91.317 206.573"
        >
          <path
            id="Sharp_2"
            data-name="Path 46"
            d="M-1165.246,2601.395l-14.754,40.36s-2.627,3.057-14.679,0-23.443-16.317-23.443-16.317,17.115,20.922,17.115,33.634-5.21,12.91-17.115,17.213-30.505,0-30.505,0l22.166,14.378s1.787,13.135-3.755,22.842-18.411,15.988-18.411,15.988l30.505,7.328-30.505,39.534,45.682-14.63s3.368,13.534-9.411,31.715c17.429-18.491,16.644-23.757,28.435-20.408s18.729,33.8,18.729,33.8Z"
            transform="translate(1254.508 -2600.708)"
            fill="none"
            stroke="#ff5912"
            stroke-width="2"
          />
        </SvgStyles>

        <SvgStyles
          xmlns="http://www.w3.org/2000/svg"
          width="89.413"
          height="212.432"
          viewBox="0 0 89.413 212.432"
        >
          <path
            id="Soft_1"
            data-name="Path 45"
            d="M-1307.375,2678.356v165.1s6.488-29.908,18.613-25.531,23.42,22.019,30.054,27.194,23.51-8.1,20.724-11.055c-2.1-2.254-21.8-6.2-20.724-13.429s22.024-6.8,25.045-15.482c2.409-8.945-9.11-18.515-8.308-34.862s13.454-22.766,11.516-30.526c-7.435-5.863-19.9-6.766-19.9-6.766s35.39-27.515,27.107-45.127c-6.24-10.644-17.516-7.379-19.781-14.823s10.872-8.342,10.721-14.95c-4.993-8.287-10.249-1.329-18.486-5.173s-7.39-11.4-14.459-10.205-10.365-16.5-11.117,10.205S-1307.375,2678.356-1307.375,2678.356Z"
            transform="translate(1309.375 -2636.015)"
            fill="none"
            stroke="#ff5912"
            stroke-width="2"
          />
        </SvgStyles>
        <SvgStyles
          xmlns="http://www.w3.org/2000/svg"
          width="89.412"
          height="212.432"
          viewBox="0 0 89.412 212.432"
        >
          <path
            id="Soft_2"
            data-name="Path 49"
            d="M-1221.995,2678.356v165.1s-6.488-29.908-18.613-25.531-23.42,22.019-30.054,27.194-23.51-8.1-20.724-11.055c2.1-2.254,21.8-6.2,20.724-13.429s-22.024-6.8-25.045-15.482c-2.409-8.945,9.11-18.515,8.308-34.862s-13.454-22.766-11.516-30.526c7.435-5.863,19.9-6.766,19.9-6.766s-35.39-27.515-27.107-45.127c6.24-10.644,17.516-7.379,19.781-14.823s-10.872-8.342-10.721-14.95c4.993-8.287,10.249-1.329,18.486-5.173s7.39-11.4,14.459-10.205,10.365-16.5,11.117,10.205S-1221.995,2678.356-1221.995,2678.356Z"
            transform="translate(1309.407 -2636.015)"
            fill="none"
            stroke="none"
            stroke-width="2"
          />
        </SvgStyles>
      </RorschachIconContainer>
    )
  }
}

export default RorschachIcon
