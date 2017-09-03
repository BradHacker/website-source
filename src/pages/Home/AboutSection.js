import React from 'react'

export default class AboutSection extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row text-dark text-center">
          <div className="col-md-6 pl-5 pr-5">
            <i className="fa fa-file-code-o fa-5x text-success"></i>
            <p className="h3 mt-4 font-weight-medium">Web Design</p>
            <p className="h4 mt-4 font-weight-light">I make flexible layout sites using the latest tools such as <a href="https://facebook.github.io/react/">React</a> and <a href="https://www.meteor.com/">Meteor</a>.</p>
          </div>
          <div className="col-md-6 pl-5 pr-5">
            <i className="fa fa-image fa-5x text-info"></i>
            <p className="h3 mt-4 font-weight-medium">Graphic Design</p>
            <p className="h4 mt-4 font-weight-light">This is a paragraph that needs to be replaced before sending out the update. This is just filler information.</p>
          </div>
        </div>
      </div>
    )
  }
}
