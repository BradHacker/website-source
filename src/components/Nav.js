import React from 'react'
import '../styles/palette.css'

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark dark-primary-color">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
         <img src="/img/logo.svg" width="30" height="30" alt=""/>
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className={this.props.active == 0 ? 'nave-item active' : 'nav-item'}>
              <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className={this.props.active == 1 ? 'nave-item active' : 'nav-item'}>
              <a className="nav-link about" href="/about">About<span className="sr-only"></span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tech Expo 2017
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="techexpo/tyingofkyle/index.html">Tying of Kyle</a>
                <a className="dropdown-item" href="techexpo/dotdoodle/index.html">Dot Doodle</a>
                <a className="dropdown-item" href="techexpo/colortriangle/index.html">Color Triangle</a>
                <a className="dropdown-item" href="techexpo/rain/index.html">Rain</a>
                <a className="dropdown-item" href="techexpo/circles/index.html">Circles</a>
                <a className="dropdown-item" href="techexpo/wave/index.html">Wave</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
