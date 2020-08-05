import React from "react";
import { Header, Main, Footer } from "./app.components/base.components";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}
