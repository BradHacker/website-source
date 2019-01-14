import React, { Component } from "react";
import "./App.css";
import "./styles/colors.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import WebDesign from "./pages/WebDesign/WebDesign";
import GraphicDesign from "./pages/GraphicDesign/GraphicDesign";
import Photography from "./pages/Photography/Photography";
import MachineLearning from "./pages/MachineLearning/MachineLearning";

class App extends Component {
  constructor() {
    super();

    this.state = {
      page: "home"
    };

    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    this.setState({ page });
  }

  render() {
    let currentPage;
    const { page } = this.state;
    switch (page) {
      case "about":
        currentPage = <About setPage={this.setPage} />;
        break;
      case "webDesign":
        currentPage = <WebDesign setPage={this.setPage} />;
        break;
      case "graphicDesign":
        currentPage = <GraphicDesign setPage={this.setPage} />;
        break;
      case "photography":
        currentPage = <Photography setPage={this.setPage} />;
        break;
      case "machineLearning":
        currentPage = <MachineLearning setPage={this.setPage} />;
        break;
      default:
        currentPage = <Home setPage={this.setPage} />;
        break;
    }
    return currentPage;
  }
}

export default App;
