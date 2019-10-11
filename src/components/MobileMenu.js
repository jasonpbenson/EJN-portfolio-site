import React from "react"
import { Link } from "gatsby"

import MobileHeader from "./MobileHeader"

const MobileMenu = () => {
  return (
    <div>
      <MobileHeader />
      <nav>
        <h3>
          <Link to="/information/">information</Link>
        </h3>
        <h1>
          <Link to="/exhibition-list">exhibitions</Link>
        </h1>
      </nav>
    </div>
  )
}

export default MobileMenu
