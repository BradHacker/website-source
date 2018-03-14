import React from 'react'
import Nav from '../../components/Nav'
import Section from '../../components/Section'
import AboutSection from './AboutSection'
import Footer from '../../components/Footer'

export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Section
          isHero={true}
          nav={<Nav active={0}/>}
          title={'welcome'}
          textJustify={'center'}
        />
        <Section
          content={<AboutSection accentColor='red'/>}
          title={'services'}
        />
        <Footer/>
      </div>
    )
  }
}
