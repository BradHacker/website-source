import React from 'react'
import Nav from '../../components/Nav'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import ResourcesSection from './ResourcesSection'
import ExamplesSection from './ExamplesSection'

export default class GraphicDesign extends React.Component {
  render() {
    return (
      <div className="App">
        <Section
          isHero={true}
          nav={<Nav active={3}/>}
          title={'Graphic Design'}
          textJustify={'left'}
        />
        <Section
          title={'Examples'}
          content={<ExamplesSection />}
        />
        <Section
          title={'Resources'}
          content={<ResourcesSection />}
          bgImage={'graphicResources'}
          color={'light'}
        />
        <Footer/>
      </div>
    )
  }
}
