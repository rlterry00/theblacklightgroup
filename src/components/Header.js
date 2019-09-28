import React from 'react'
import PropTypes from 'prop-types'
import blacklight from '../images/blacklight.png'
import logo from '../images/blacklightwhite.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span>
        <img className="icon" src={blacklight} alt="blacklight" />
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <img className="logo_image" src={logo} alt="logo" />
        <h1>The Solutions are right in front of us</h1>
        <p>
          We go beyond technology and service to fix the problems in plain
          sight. <br />
          Press the light switches below to learn about our services,
          products and more. <br />
          <span className="warning">
            Wait, the light switches are not labeled?
          </span>{' '}
          each switch represents turning on a blacklight. have fun exploring!
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li className="lightswitch">
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('services')
            }}
          ></a>
          <br></br>
        </li>
        <li className="lightswitch">
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('pennybank')
            }}
          ></a>
          <br></br>
        </li>
        <li className="lightswitch">
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('thinktank')
            }}
          ></a>
          <br></br>
        </li>
        <li className="lightswitch">
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          ></a>
          <br></br>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
