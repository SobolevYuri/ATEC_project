import React from "react";
import injectSheet from "react-jss";

import styles from "./style";
// import classNames from "classnames";

class SectionWrapper extends React.Component {
  render() {
    return (
      <div className={this.props.classes.bgrWrapper}>
        <div className={this.props.classes.contentWrapper}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(SectionWrapper);
