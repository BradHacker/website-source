import React from 'react'

export default class Section extends React.Component {
  render() {
    let heroClass = this.props.isHero ? ' p-5 hero-img' : ''
    let titleClass = this.props.isHero ? 'main-title' : ('h1 font-weight-semi-bold')
    let bgImage = this.props.bgImage ? (' ' + this.props.bgImage + '-img') : ''
    let padding = this.props.padding ? ' ' + this.props.padding : ' p-2'
    let textJustify = ' text-' + (this.props.textJustify ? this.props.textJustify : 'center')
    let color = this.props.color ? ' text-' + this.props.color : ' text-dark'
    return (
      <div className={'container-fluid' + padding + heroClass + bgImage + textJustify + color}>
        <div className="row">
          <div className="col-12">
            <p className={titleClass}>{this.props.title}</p>
          </div>
        </div>
        { this.props.content ? <br/> : ''}
        <div className="row">
          <div className={this.props.image ? 'col-md-8' : 'col-md-12'}>
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}
