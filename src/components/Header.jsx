import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className="header flex flex-col container">
      <NavBar />

      <div className="header-data">
        <div className="left-header flex flex-col">
          <h1 className="common-h1">Bring everyone together to build better products.</h1>
          <p className="common-para">
            Manage makes it simple for software teams to plan day-to-day
            tasks while keeping the larger team goals in view.</p>
          <button className="btn header-btn"> Get Started</button>
        </div>

        <div className="right-header">

        </div>


       
      </div>
    </div>

  )
}

export default Header