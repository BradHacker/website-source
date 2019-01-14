import React from "react";
import { Link } from "react-router-dom";

export default class Section extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-dark text-light footer">
        <br />
        <div className="row">
          <div className="col-md-3">
            <ul className="footer-list h6">
              <li className="footer-list-link">
                <a
                  onClick={() => this.props.setPage("home")}
                  className="footer-list-link"
                >
                  home
                </a>
              </li>
              <li className="footer-list-link">
                <a
                  onClick={() => this.props.setPage("about")}
                  className="footer-list-link"
                >
                  about
                </a>
              </li>
              <li className="footer-list-link">
                <a
                  onClick={() => this.props.setPage("webDesign")}
                  className="footer-list-link"
                >
                  web design
                </a>
              </li>
              <li className="footer-list-link">
                <a
                  onClick={() => this.props.setPage("graphicDesign")}
                  className="footer-list-link"
                >
                  graphic design
                </a>
              </li>
              <li className="footer-list-link">
                <a
                  onClick={() => this.props.setPage("photography")}
                  className="footer-list-link"
                >
                  photography
                </a>
              </li>
            </ul>
          </div>
          <div className="pr-5 pl-5 pt-4 pt-md-0 col-md-3 text-center text-md-right h6 my-auto order-md-2">
            <p className="h4">Contact</p>
            <div className="h6">
              <p>
                Email -{" "}
                <a href="mailto:harkerbd@gmail.com">harkerbd@gmail.com</a>
              </p>
              <p>
                LinkedIn -{" "}
                <a href="https://www.linkedin.com/in/bradley-harker-60604262/">
                  Bradley Harker
                </a>
              </p>
              <p>
                Instagram -{" "}
                <a href="https://www.instagram.com/computer_guy01/">
                  computer_guy01
                </a>
              </p>
              <p>
                Facebook -{" "}
                <a href="https://www.facebook.com/bradley.harker.58">
                  Bradley Harker
                </a>
              </p>
              <p>
                Github - <a href="https://github.com/BradHacker">BradHacker</a>
              </p>
            </div>
          </div>
          <div className="col-md mx-auto my-auto order-md-1">
            <img
              src="/img/logo.svg"
              width="100"
              height="100"
              alt=""
              className="d-block mx-auto"
            />
            <p className="footer-item m-0 text-secondary pt-4 text-center">
              Copyright 2018 - Bradley Harker
            </p>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
