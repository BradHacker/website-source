import React from 'react'
import Nav from '../../components/Nav'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import ResourcesSection from './ResourcesSection'
import ExamplesSection from './ExamplesSection'

export default class WebDesign extends React.Component {
  render() {
    return (
      <div className="App">
        <Section
          isHero={true}
          nav={<Nav active={2}/>}
          title={'web design'}
          textJustify={'center'}
        />
        <Section
          title={'examples'}
          content={<ExamplesSection />}
        />
        <Section
          title={'resources'}
          content={<ResourcesSection />}
          bgImage={'webResources'}
          color={'light'}
        />
        <Footer/>
      </div>
    )
  }
}
