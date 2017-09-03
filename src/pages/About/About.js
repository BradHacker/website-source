import React from 'react'
import Nav from '../../components/Nav'
import Section from '../../components/Section'

export default class About extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav active={1}/>
        <Section isHero={true} title={'About'} textJustify={'left'}/>
      </div>
    )
  }
}
