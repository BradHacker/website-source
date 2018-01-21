import React from 'react'
import siteImg from '../../res/cbcLogo.png'

export default class ExamplesSection extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row text-dark text-center">
          <div className="col-md-6 pl-5 pr-5">
            <img src={siteImg} className="example-photo" alt="CBC Logo"/>
            <p className="h3 mt-4 font-weight-medium">CHESTERFIELD BASEBALL CLUB</p>
            <p className="h4 mt-4 font-weight-light">This was designed using Adobe Illustrator CS6.</p>
          </div>
        </div>
      </div>
    )
  }
}
