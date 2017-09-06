import React from 'react'
import Nav from '../../components/Nav'
import Section from '../../components/Section'
import AboutSection from './AboutSection'
import Footer from '../../components/Footer'

export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav active={0}/>
        <Section
          isHero={true}
          title={'Welcome'}
          textJustify={'left'}
        />
        <Section
          content={<AboutSection />}
          title={'Services'}
        />
        <Section
          title={'Contact'}
          bgImage={'contact'}
          textJustify={'right'}
          padding={'p-4'}
          color={'light'} content={
            <div>
              <p className="h5">Email - <a href="mailto:harkerbd@gmail.com">harkerbd@gmail.com</a></p>
              <p className="h5">LinkedIn - <a href="https://www.linkedin.com/in/bradley-harker-60604262/"><i className="fa fa-linkedin-square"></i></a></p>
            </div>
          }/>
        <Footer/>
      </div>
    )
  }
}
