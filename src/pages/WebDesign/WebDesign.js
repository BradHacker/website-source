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
        <Nav active={2}/>
        <Section
          isHero={true}
          title={'Web Design'}
          textJustify={'left'}
        />
        <Section
          title={'Examples'}
          content={<ExamplesSection />}
        />
        <Section
          title={'Resources'}
          content={<ResourcesSection />}
          bgImage={'webResources'}
          color={'light'}
        />
        <Footer/>
      </div>
    )
  }
}
