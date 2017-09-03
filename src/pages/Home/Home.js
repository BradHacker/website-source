import React from 'react'
import Nav from '../../components/Nav'
import Section from '../../components/Section'
import AboutSection from './AboutSection'

export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav active={0}/>
        <Section isHero={true} title={'Welcome'} textJustify={'left'}/>
        <Section content={<AboutSection />} title={'Services'}/>
        <Section title={'Home'} bgImage={'about'} textJustify={'center'} padding={'p-4'} color={'dark'}/>
      </div>
    )
  }
}
