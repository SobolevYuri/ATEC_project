import React from "react";
import injectSheet from "react-jss";
import styles from "./style";

import { HomePage } from "../../page.components/index";

class Main extends React.Component {
  render() {
    return <HomePage />;
  }
}

export default injectSheet(styles)(Main);
