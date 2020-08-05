import React from "react";
import injectSheet from "react-jss";
import styles from "./style";
import { List } from "../index";

class Menu extends React.Component {
  render() {
    return (
      <nav className={this.props.classes.defaultMenuStyles}>
        <List itemsArray={this.props.menuItemsArray} {...this.props} />
      </nav>
    );
  }
}

export default injectSheet(styles)(Menu);
