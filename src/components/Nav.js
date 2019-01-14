import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a
          onClick={() => this.props.setPage("home")}
          className="navbar-brand font-weight-light"
        >
          <img
            src="/img/logo.svg"
            width="30"
            height="30"
            alt="BH"
            className="mr-2"
          />
          bradley harker
        </a>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                onClick={() => this.props.setPage("home")}
                className={
                  this.props.active === 0
                    ? "nav-link accent-text"
                    : "nav-link secondary-text"
                }
              >
                home
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => this.props.setPage("about")}
                className={
                  this.props.active === 1
                    ? "nav-link accent-text"
                    : "nav-link secondary-text"
                }
              >
                about
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => this.props.setPage("webDesign")}
                className={
                  this.props.active === 2
                    ? "nav-link accent-text"
                    : "nav-link secondary-text"
                }
              >
                webDesign
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => this.props.setPage("graphicDesign")}
                className={
                  this.props.active === 3
                    ? "nav-link accent-text"
                    : "nav-link secondary-text"
                }
              >
                graphic design
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => this.props.setPage("photography")}
                className={
                  this.props.active === 4
                    ? "nav-link accent-text"
                    : "nav-link secondary-text"
                }
              >
                photography
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => this.props.setPage("machineLearning")}
                className={
                  this.props.active === 5
                    ? "nav-link accent-text"
                    : "nav-link secondary-text"
                }
              >
                machine learning
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
