import React from 'react'
import meteorImg from '../../res/meteor.svg'
import reactImg from '../../res/react.svg'

export default class ResourcesSection extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 pl-5 pr-5">
            <img src={meteorImg} className="meteor round-image" width="100" height="100" alt="Meteor Logo"/>
            <p className="h3 mt-4 font-weight-medium">Meteor</p>
            <div className="row mb-3 mb-md-0">
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="https://www.meteor.com/"><i className="fa fa-globe fa-2x text-light hover-lightgray"></i></a></p>
              </div>
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="https://www.facebook.com/meteorjs/"><i className="fa fa-facebook fa-2x text-light hover-lightgray"></i></a></p>
              </div>
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="https://twitter.com/meteorjs?lang=en"><i className="fa fa-twitter fa-2x text-light hover-lightgray"></i></a></p>
              </div>
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="https://www.youtube.com/user/MeteorVideos"><i className="fa fa-youtube fa-2x text-light hover-lightgray"></i></a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5 pr-5">
            <img src={reactImg} className="random round-image" width="100" height="100" alt="React Logo"/>
            <p className="h3 mt-4 font-weight-medium">React</p>
            <div className="row mb-3 mb-md-0">
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="https://facebook.github.io/react/ "><i className="fa fa-globe fa-2x text-light hover-lightgray"></i></a></p>
              </div>
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="https://www.facebook.com/react"><i className="fa fa-facebook fa-2x text-light hover-lightgray"></i></a></p>
              </div>
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="https://twitter.com/reactjs"><i className="fa fa-twitter fa-2x text-light hover-lightgray"></i></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
