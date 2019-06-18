/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

import navData from '../data/NavData.json';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <div className="container">
          <a
            className="navbar-brand"
            href="#"
            onClick={() => this.props.setPage('home')}
          >
            <img src="/img/logo.svg" height="30" alt="BH" className="mr-2" />
            <strong>bradley harker</strong>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {navData.pages.map(page => (
                <li
                  className={`nav-item${
                    this.props.active === page ? ' active' : ''
                  }`}
                  key={page}
                >
                  <a
                    className="nav-link"
                    href={`#${page}`}
                    onClick={() => this.props.setPage(page)}
                  >
                    {page}
                    {this.props.active === page ? (
                      <span className="sr-only">(current)</span>
                    ) : (
                      <div />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="navbar-nav nav-flex-icons">
              {navData.socialLinks.map(social => (
                <li className="nav-item" key={social.icon}>
                  <a
                    href={social.link}
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`fab fa-${social.icon}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
