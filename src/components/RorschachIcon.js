import React from "react"
import styled from "styled-components"
import anime from "animejs"

const RorschachIconContainer = styled.div`
  bottom: 1%;
  left: 3%;
  position: fixed;
  width: fit-content;
  @media screen and (max-width: 679px) {
    display: none;
  }
`

const SvgStyles = styled.svg`
  margin-right: -86px;
  overflow: visible;
  transform: scale(0.5);
  @media screen and (max-width: 900px) {
    margin-right: -68px;
    transform: scale(0.6);
  }
  @media screen and (max-width: 679px;) {
    display: none;
  }
`
const iconAnimations = () => {
  if (window.location.pathname === "/information/") {
    anime({
      targets: "#Path1_1",
      duration: 1000,
      easing: "easeInOutElastic",
      d:
        "M-1162.825,2601.395l-15.183,40.273s-2.7,3.051-15.106,0-24.123-16.282-24.123-16.282,17.612,20.877,17.612,33.561-5.361,12.882-17.612,17.176-31.391,0-31.391,0l22.809,14.348s1.839,13.106-3.864,22.793-18.946,15.953-18.946,15.953l31.391,7.312-31.391,39.449,47.009-14.6s3.466,13.505-9.685,31.647c17.936-18.451,17.128-23.706,29.261-20.364s19.273,33.732,19.273,33.732Z",
      fill: "#ff5912",
    })
    anime({
      targets: "#Path1_2",
      duration: 1000,
      easing: "easeInOutElastic",
      d:
        "M-1248.572,2601.395l15.183,40.273s2.7,3.051,15.106,0,24.123-16.282,24.123-16.282-17.612,20.877-17.612,33.561,5.361,12.882,17.612,17.176,31.391,0,31.391,0l-22.809,14.348s-1.839,13.106,3.864,22.793,18.946,15.953,18.946,15.953l-31.391,7.312,31.391,39.449-47.009-14.6s-3.466,13.505,9.684,31.647c-17.935-18.451-17.127-23.706-29.261-20.364s-19.273,33.732-19.273,33.732Z",
      fill: "#ff5912",
    })
    anime({
      targets: "#Path2_1",
      duration: 1000,
      easing: "easeInOutElastic",
      d:
        "M-1307.375,2803.412V2640.875s6.488,29.444,18.613,25.134,23.42-21.677,30.054-26.772,23.51,7.977,20.724,10.884c-2.1,2.219-21.8,6.1-20.724,13.22s22.024,6.7,25.045,15.242c2.409,8.806-9.11,18.228-8.308,34.321s13.454,22.413,11.516,30.052c-7.435,5.772-19.9,6.661-19.9,6.661s35.39,27.088,27.107,44.426c-6.24,10.479-17.516,7.265-19.781,14.592s10.872,8.212,10.721,14.717c-4.993,8.158-10.249,1.308-18.486,5.093s-7.39,11.221-14.459,10.047-10.365,16.245-11.117-10.047S-1307.375,2803.412-1307.375,2803.412Z",
      fill: "#C1C9DF",
    })
    anime({
      targets: "#Path2_2",
      duration: 1000,
      easing: "easeInOutElastic",
      d:
        "M-1221.995,2803.412V2640.875s-6.488,29.444-18.613,25.134-23.42-21.677-30.054-26.772-23.51,7.977-20.724,10.884c2.1,2.219,21.8,6.1,20.724,13.22s-22.024,6.7-25.045,15.242c-2.409,8.806,9.11,18.228,8.308,34.321s-13.454,22.413-11.516,30.052c7.435,5.772,19.9,6.661,19.9,6.661s-35.39,27.088-27.107,44.426c6.24,10.479,17.516,7.265,19.781,14.592s-10.872,8.212-10.721,14.717c4.993,8.158,10.249,1.308,18.486,5.093s7.39,11.221,14.459,10.047,10.365,16.245,11.117-10.047S-1221.995,2803.412-1221.995,2803.412Z",
      fill: "#C1C9DF",
    })
  }
  if (window.location.pathname === "/exhibition-list") {
    anime({
      targets: "#Path1_1",
      duration: 1000,
      easing: "easeInOutElastic",
      d:
        "M-1248.572,2601.395l15.183,40.273s2.7,3.051,15.106,0,24.123-16.282,24.123-16.282-17.612,20.877-17.612,33.561,5.361,12.882,17.612,17.176,31.391,0,31.391,0l-22.809,14.348s-1.839,13.106,3.864,22.793,18.946,15.953,18.946,15.953l-31.391,7.312,31.391,39.449-47.009-14.6s-3.466,13.505,9.685,31.647c-17.936-18.451-17.128-23.706-29.261-20.364s-19.273,33.732-19.273,33.732Z",
      fill: "#C1C9DF",
    })
    anime({
      targets: "#Path1_2",
      duration: 1000,
      easing: "easeInOutElastic",
      d:
        "M-1162.825,2601.395l-15.183,40.273s-2.7,3.051-15.106,0-24.123-16.282-24.123-16.282,17.612,20.877,17.612,33.561-5.361,12.882-17.612,17.176-31.391,0-31.391,0l22.809,14.348s1.839,13.106-3.864,22.793-18.946,15.953-18.946,15.953l31.391,7.312-31.391,39.449,47.009-14.6s3.466,13.505-9.684,31.647c17.935-18.451,17.127-23.706,29.261-20.364s19.273,33.732,19.273,33.732Z",
      fill: "#C1C9DF",
    })
    anime({
      targets: "#Path2_1",
      duration: 1000,
      easing: "easeInOutElastic",
      d:
        "M-1221.995,2803.412V2640.875s-6.488,29.444-18.613,25.134-23.42-21.677-30.054-26.772-23.51,7.977-20.724,10.884c2.1,2.219,21.8,6.1,20.724,13.22s-22.024,6.7-25.045,15.242c-2.409,8.806,9.11,18.228,8.308,34.321s-13.454,22.413-11.516,30.052c7.435,5.772,19.9,6.661,19.9,6.661s-35.39,27.088-27.107,44.426c6.24,10.479,17.516,7.265,19.781,14.592s-10.872,8.212-10.721,14.717c4.993,8.158,10.249,1.308,18.486,5.093s7.39,11.221,14.459,10.047,10.365,16.245,11.117-10.047S-1221.995,2803.412-1221.995,2803.412Z",
      fill: "#ff5912",
    })
    anime({
      targets: "#Path2_2",
      duration: 1000,
      easing: "easeInOutElastic",
      d:
        "M-1307.375,2803.412V2640.875s6.488,29.444,18.613,25.134,23.42-21.677,30.054-26.772,23.51,7.977,20.724,10.884c-2.1,2.219-21.8,6.1-20.724,13.22s22.024,6.7,25.045,15.242c2.409,8.806-9.11,18.228-8.308,34.321s13.454,22.413,11.516,30.052c-7.435,5.772-19.9,6.661-19.9,6.661s35.39,27.088,27.107,44.426c-6.24,10.479-17.516,7.265-19.781,14.592s10.872,8.212,10.721,14.717c-4.993,8.158-10.249,1.308-18.486,5.093s-7.39,11.221-14.459,10.047-10.365,16.245-11.117-10.047S-1307.375,2803.412-1307.375,2803.412Z",
      fill: "#ff5912",
    })
  }
  if (window.location.pathname === "/") {
    anime({
      targets: "#Path1_1",
      duration: 1000,
      easing: "easeInOutElastic",
      d:
        "M-1248.572,2601.395l15.183,40.273s2.7,3.051,15.106,0,24.123-16.282,24.123-16.282-17.612,20.877-17.612,33.561,5.361,12.882,17.612,17.176,31.391,0,31.391,0l-22.809,14.348s-1.839,13.106,3.864,22.793,18.946,15.953,18.946,15.953l-31.391,7.312,31.391,39.449-47.009-14.6s-3.466,13.505,9.685,31.647c-17.936-18.451-17.128-23.706-29.261-20.364s-19.273,33.732-19.273,33.732Z",
      fill: "#C1C9DF",
    })
    anime({
      targets: "#Path1_2",
      duration: 1000,
      easing: "easeInOutElastic",
      d:
        "M-1162.825,2601.395l-15.183,40.273s-2.7,3.051-15.106,0-24.123-16.282-24.123-16.282,17.612,20.877,17.612,33.561-5.361,12.882-17.612,17.176-31.391,0-31.391,0l22.809,14.348s1.839,13.106-3.864,22.793-18.946,15.953-18.946,15.953l31.391,7.312-31.391,39.449,47.009-14.6s3.466,13.505-9.684,31.647c17.935-18.451,17.127-23.706,29.261-20.364s19.273,33.732,19.273,33.732Z",
      fill: "#ff5912",
    })
    anime({
      targets: "#Path2_1",
      duration: 1000,
      easing: "easeInOutElastic",
      d:
        "M-1307.375,2803.412V2640.875s6.488,29.444,18.613,25.134,23.42-21.677,30.054-26.772,23.51,7.977,20.724,10.884c-2.1,2.219-21.8,6.1-20.724,13.22s22.024,6.7,25.045,15.242c2.409,8.806-9.11,18.228-8.308,34.321s13.454,22.413,11.516,30.052c-7.435,5.772-19.9,6.661-19.9,6.661s35.39,27.088,27.107,44.426c-6.24,10.479-17.516,7.265-19.781,14.592s10.872,8.212,10.721,14.717c-4.993,8.158-10.249,1.308-18.486,5.093s-7.39,11.221-14.459,10.047-10.365,16.245-11.117-10.047S-1307.375,2803.412-1307.375,2803.412Z",
      fill: "#ff5912",
    })
    anime({
      targets: "#Path2_2",
      duration: 1000,
      easing: "easeInOutElastic",
      d:
        "M-1221.995,2803.412V2640.875s-6.488,29.444-18.613,25.134-23.42-21.677-30.054-26.772-23.51,7.977-20.724,10.884c2.1,2.219,21.8,6.1,20.724,13.22s-22.024,6.7-25.045,15.242c-2.409,8.806,9.11,18.228,8.308,34.321s-13.454,22.413-11.516,30.052c7.435,5.772,19.9,6.661,19.9,6.661s-35.39,27.088-27.107,44.426c6.24,10.479,17.516,7.265,19.781,14.592s-10.872,8.212-10.721,14.717c4.993,8.158,10.249,1.308,18.486,5.093s7.39,11.221,14.459,10.047,10.365,16.245,11.117-10.047S-1221.995,2803.412-1221.995,2803.412Z",
      fill: "#C1C9DF",
    })
  }
}

class RorschachIcon extends React.Component {
  componentDidUpdate() {
    iconAnimations()
  }

  render() {
    return (
      <RorschachIconContainer>
        <SvgStyles
          xmlns="http://www.w3.org/2000/svg"
          width="170"
          height="205"
          viewBox="0 0 170 205"
        >
          <g id="Group_1" data-name="Group 1" transform="translate(-1)">
            <path
              id="Path1_1"
              data-name="Path 46"
              d="M-1248.572,2601.395l15.183,40.273s2.7,3.051,15.106,0,24.123-16.282,24.123-16.282-17.612,20.877-17.612,33.561,5.361,12.882,17.612,17.176,31.391,0,31.391,0l-22.809,14.348s-1.839,13.106,3.864,22.793,18.946,15.953,18.946,15.953l-31.391,7.312,31.391,39.449-47.009-14.6s-3.466,13.505,9.685,31.647c-17.936-18.451-17.128-23.706-29.261-20.364s-19.273,33.732-19.273,33.732Z"
              transform="translate(1249.628 -2601.395)"
              fill="#C1C9DF"
            />
            <path
              id="Path1_2"
              data-name="Path 51"
              d="M-1162.825,2601.395l-15.183,40.273s-2.7,3.051-15.106,0-24.123-16.282-24.123-16.282,17.612,20.877,17.612,33.561-5.361,12.882-17.612,17.176-31.391,0-31.391,0l22.809,14.348s1.839,13.106-3.864,22.793-18.946,15.953-18.946,15.953l31.391,7.312-31.391,39.449,47.009-14.6s3.466,13.505-9.684,31.647c17.935-18.451,17.127-23.706,29.261-20.364s19.273,33.732,19.273,33.732Z"
              transform="translate(1333.769 -2601.395)"
              fill="#ff5912"
            />
          </g>
        </SvgStyles>
        <SvgStyles
          xmlns="http://www.w3.org/2000/svg"
          width="170"
          height="205"
          viewBox="0 0 170 205"
        >
          <g
            id="Group_2"
            data-name="Group 2"
            transform="translate(-202 -3.613)"
          >
            <path
              id="Path2_1"
              data-name="Path 45"
              d="M-1307.375,2803.412V2640.875s6.488,29.444,18.613,25.134,23.42-21.677,30.054-26.772,23.51,7.977,20.724,10.884c-2.1,2.219-21.8,6.1-20.724,13.22s22.024,6.7,25.045,15.242c2.409,8.806-9.11,18.228-8.308,34.321s13.454,22.413,11.516,30.052c-7.435,5.772-19.9,6.661-19.9,6.661s35.39,27.088,27.107,44.426c-6.24,10.479-17.516,7.265-19.781,14.592s10.872,8.212,10.721,14.717c-4.993,8.158-10.249,1.308-18.486,5.093s-7.39,11.221-14.459,10.047-10.365,16.245-11.117-10.047S-1307.375,2803.412-1307.375,2803.412Z"
              transform="translate(1509.375 -2634.458)"
              fill="#ff5912"
            />
            <path
              id="Path2_2"
              data-name="Path 49"
              d="M-1221.995,2803.412V2640.875s-6.488,29.444-18.613,25.134-23.42-21.677-30.054-26.772-23.51,7.977-20.724,10.884c2.1,2.219,21.8,6.1,20.724,13.22s-22.024,6.7-25.045,15.242c-2.409,8.806,9.11,18.228,8.308,34.321s-13.454,22.413-11.516,30.052c7.435,5.772,19.9,6.661,19.9,6.661s-35.39,27.088-27.107,44.426c6.24,10.479,17.516,7.265,19.781,14.592s-10.872,8.212-10.721,14.717c4.993,8.158,10.249,1.308,18.486,5.093s7.39,11.221,14.459,10.047,10.365,16.245,11.117-10.047S-1221.995,2803.412-1221.995,2803.412Z"
              transform="translate(1593.995 -2634.458)"
              fill="#C1C9DF"
            />
          </g>
        </SvgStyles>
      </RorschachIconContainer>
    )
  }
}

export default RorschachIcon
