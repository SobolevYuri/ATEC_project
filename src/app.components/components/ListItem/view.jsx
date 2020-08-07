import React from "react";
// import { Link } from "react-router-dom";
import injectSheet from "react-jss";
import classNames from "classnames";
import styles from "./style";

class ListItem extends React.Component {
  render() {
    const classes = classNames({
      [this.props.classes.horizontal]: this.props.isHorizontal,
      [this.props.classes.vertical]: this.props.isVertical,
    });

    return (
      <li className={classes}>
        {/* <Link to={this.props.routeValue}>{this.props.children}</Link> */}
        {this.props.itemText}
      </li>
    );
  }
}

export default injectSheet(styles)(ListItem);
