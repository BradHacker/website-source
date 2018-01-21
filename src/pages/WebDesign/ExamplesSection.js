import React from 'react'
import siteImg from '../../res/bradhackerSite.png'

export default class ExamplesSection extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row text-dark text-center">
          <div className="col-md-6 pl-5 pr-5">
            <a href="https://bradhacker.github.io"><img src={siteImg} className="example-photo" alt="Site Screenshot"/></a>
            <a href="https://bradhacker.github.io"><p className="h3 h4-sm mt-4 font-weight-bold">BRADHACKER.GITHUB.IO</p></a>
            <p className="h4 mt-4 font-weight-light">This site was built purely using react and was originally scaffolded using Facebook's <code className="h5 text-danger">create-react-app</code></p>
          </div>
        </div>
      </div>
    )
  }
}
