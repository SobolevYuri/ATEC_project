import React from "react";
import injectSheet from "react-jss";
import classNames from "classnames";

import styles from "./style";
import { ListItem } from "../index";

class List extends React.Component {

  render() {

    const classes = classNames(this.props.classes.defaultListStyles, {
      [this.props.classes.horizontalAlign]: this.props.isHorizontal,
      [this.props.classes.verticalAlign]: this.props.isVertical,
    });

    return (
      <ul className={classes}>
        {this.props.itemsArray.map((item, index) => (
          <ListItem key={index} itemText={item} {...this.props} />
        ))}
      </ul>
    );
  }
}

export default injectSheet(styles)(List);
