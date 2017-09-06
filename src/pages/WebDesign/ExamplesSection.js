import React from 'react'
import siteImg from '../../res/bradhackerSite.png'

export default class ExamplesSection extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row text-dark text-center">
          <div className="col-md-6 pl-5 pr-5">
            <img src={siteImg} style={{ maxWidth: 300 }} alt="Site Screenshot"/>
            <p className="h3 mt-4 font-weight-medium">BRADHACKER.GITHUB.IO</p>
            <p className="h4 mt-4 font-weight-light">This site was built purely using react and was originally scaffolded using Facebook's <code className="h5 text-danger">create-react-app</code></p>
          </div>
        </div>
      </div>
    )
  }
}
