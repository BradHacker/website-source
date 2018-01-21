import React from 'react'
import Nav from '../../components/Nav'
import Section from '../../components/Section'
import SchoolSection from './SchoolSection'
import Footer from '../../components/Footer'

export default class About extends React.Component {
  render() {
    return (
      <div className="App">
        <Section
          isHero={true}
          nav={<Nav active={1}/>}
          title={'About'}
          textJustify={'left'}
        />
        <Section
          content={<SchoolSection/>}
          title={'School'}
          textJustify={'center'}
        />
        <Footer/>
      </div>
    )
  }
}
