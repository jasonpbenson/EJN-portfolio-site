import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ExhibitionNav = props => {
  // props = page context, passed from exhibition template
  const data = props.pageContext

  // swap out 'previous' icon based on current page context
  function PreviousPage() {
    if (
      data.previous.fields === null ||
      data.previous.fields.slug === "/information/"
    ) {
      return (
        <path
          id="Previous"
          data-name="Link to previous page"
          d="M53.48,259.1H14.719a7.681,7.681,0,1,0,0,6.145H53.481a3.072,3.072,0,1,0,0-6.145Z"
          transform="translate(0 -105.592)"
          fill="#8493bf50"
        />
      )
    } else {
      return (
        <Link to={data.previous.fields.slug}>
          {" "}
          <path
            id="Previous"
            data-name="Link to previous page"
            d="M53.48,259.1H14.719a7.681,7.681,0,1,0,0,6.145H53.481a3.072,3.072,0,1,0,0-6.145Z"
            transform="translate(0 -105.592)"
            fill="#ff5912"
          />
        </Link>
      )
    }
  }

  // swap out 'next' icon based on current page context
  function NextPage() {
    if (data.next === null) {
      return (
        <path
          id="Next"
          data-name="Link to next page"
          d="M279.113,254.489a7.681,7.681,0,0,0-7.037,4.608H233.314a3.072,3.072,0,0,0,0,6.145h38.761a7.681,7.681,0,1,0,7.038-10.753Z"
          transform="translate(-105.575 -105.591)"
          fill="#8493bf50"
        />
      )
    } else {
      return (
        <Link to={data.next.fields.slug}>
          {" "}
          <path
            id="Next"
            data-name="Link to next page"
            d="M279.113,254.489a7.681,7.681,0,0,0-7.037,4.608H233.314a3.072,3.072,0,0,0,0,6.145h38.761a7.681,7.681,0,1,0,7.038-10.753Z"
            transform="translate(-105.575 -105.591)"
            fill="#ff5912"
          />
        </Link>
      )
    }
  }

  const SvgContainer = styled.div`
    position: fixed;
    height: fit-content;
    right: 8%;
    top: 15%;
  `

  return (
    <SvgContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 0 181.221 33"
      >
        <g id="NavIcon" data-name="Nav Icon" transform="translate(-1353 -147)">
          <g
            id="Circle"
            data-name="Link to Exhibition List"
            transform="translate(1427.537 147)"
          >
            <Link to="/exhibition-list">
              <circle cx="16.5" cy="16.5" r="16" fill="#ff5712" />
            </Link>
          </g>
          <g id="NavIcon_PrevNext" transform="translate(1353 7.171)">
            <NextPage />
            <PreviousPage />
          </g>
        </g>
      </svg>
    </SvgContainer>
  )
}

export default ExhibitionNav
