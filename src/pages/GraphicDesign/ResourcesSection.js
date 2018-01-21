import React from 'react'
import illustratorImg from '../../res/adobe-illustrator-cc.svg'
import affinityImg from '../../res/affinity-designer.png'

export default class ResourcesSection extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 pl-5 pr-5">
            <img src={illustratorImg} className="meteor round-image" width="100" height="100" alt="Meteor Logo"/>
            <p className="h3 mt-4 font-weight-medium">Adobe Illustrator</p>
            <div className="row mb-3 mb-md-0">
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="http://www.adobe.com/products/illustrator.html"><i className="fa fa-globe fa-2x text-light hover-lightgray"></i></a></p>
              </div>
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="https://www.facebook.com/AdobeIllustrator/"><i className="fa fa-facebook fa-2x text-light hover-lightgray"></i></a></p>
              </div>
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="https://twitter.com/Illustrator?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa fa-twitter fa-2x text-light hover-lightgray"></i></a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5 pr-5">
            <img src={affinityImg} className="random round-image" width="100" height="100" alt="React Logo"/>
            <p className="h3 mt-4 font-weight-medium">Affinity Designer</p>
            <div className="row mb-3 mb-md-0">
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="https://affinity.serif.com/en-us/designer/"><i className="fa fa-globe fa-2x text-light hover-lightgray"></i></a></p>
              </div>
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="https://www.facebook.com/MacAffinity/"><i className="fa fa-facebook fa-2x text-light hover-lightgray"></i></a></p>
              </div>
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="https://twitter.com/macaffinity?lang=en"><i className="fa fa-twitter fa-2x text-light hover-lightgray"></i></a></p>
              </div>
              <div className="col">
                <p className="h4 h5-sm mt-4 font-weight-light"><a href="https://affinity.serif.com/blog/"><i className="fa fa-rss fa-2x text-light hover-lightgray"></i></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
