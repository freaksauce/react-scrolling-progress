import React from 'react'

const logo = require('../images/logo.jpg')

const Header = () => (
  <header>
    <div className="logo"><img src={logo} alt="logo" /></div>
  </header>
)

export default Header
