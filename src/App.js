import React, { Component } from 'react';

import Page from './components/Page';
import home from './data/HomeData.json';
import about from './data/AboutData.json';
import webDesign from './data/WebDesignData.json';
import graphicDesign from './data/GraphicDesignData.json';
import machineLearning from './data/MachineLearningData.json';

const pages = {};
pages[home.name] = home;
pages[about.name] = about;
pages[webDesign.name] = webDesign;
pages[graphicDesign.name] = graphicDesign;
pages[machineLearning.name] = machineLearning;

console.log(pages);

class App extends Component {
  constructor() {
    super();

    this.state = {
      page: home.name
    };

    this.setPage = this.setPage.bind(this);
  }

  componentDidMount() {
    if (window.location.hash)
      this.setPage(window.location.hash.replace('#', '').replace('%20', ' '));
  }

  setPage(page) {
    this.setState({ page });
    window.location.hash = page;
    window.scrollTo(0, 0);
  }

  // render() {
  //   let currentPage;
  //   const { page } = this.state;
  //   switch (page) {
  //     case 'about':
  //       currentPage = <About setPage={this.setPage} />;
  //       break;
  //     case 'web design':
  //       currentPage = <WebDesign setPage={this.setPage} />;
  //       break;
  //     case 'graphic design':
  //       currentPage = <GraphicDesign setPage={this.setPage} />;
  //       break;
  //     case 'photography':
  //       currentPage = <Photography setPage={this.setPage} />;
  //       break;
  //     case 'machine learning':
  //       currentPage = <MachineLearning setPage={this.setPage} />;
  //       break;
  //     default:
  //       currentPage = <Home setPage={this.setPage} />;
  //       break;
  //   }
  //   return currentPage;
  // }
  render() {
    const { page } = this.state;
    console.log(page);
    const pageData = pages[page];

    return (
      <Page
        carousel={pageData.carousel}
        name={pageData.name}
        sections={pageData.sections}
        setPage={this.setPage}
      />
    );
  }
}

export default App;
