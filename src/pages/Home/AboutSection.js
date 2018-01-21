import React from 'react'

export default class AboutSection extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row text-dark text-center">
          <div className="col-md-6 pl-5 pr-5 mb-3">
            <i className="fa fa-file-code-o fa-5x text-success"></i>
            <p className="h3 mt-4 font-weight-medium">web design</p>
            <p className="h4 mt-4 font-weight-light">I make flexible layout sites using the latest tools such as <a href="https://facebook.github.io/react/">React</a> and <a href="https://www.meteor.com/">Meteor</a>.</p>
          </div>
          <div className="col-md-6 pl-5 pr-5 mb-3">
            <i className="fa fa-image fa-5x text-info"></i>
            <p className="h3 mt-4 font-weight-medium">graphic design</p>
            <p className="h4 mt-4 font-weight-light">I do logo design and other graphic design using tools such as <a href="http://www.adobe.com/products/illustrator.html">Adobe Illustrator</a> and <a href="https://affinity.serif.com/en-us/designer/">Affinity Designer</a>.</p>
          </div>
          <div className="col-md-6 pl-5 pr-5 mb-3 mx-auto">
            <i className="fa fa-camera fa-5x text-warning"></i>
            <p className="h3 mt-4 font-weight-medium">photography</p>
            <p className="h4 mt-4 font-weight-light">I do photography as mainly a hobby, but have never done it professionally.</p>
          </div>
        </div>
      </div>
    )
  }
}
