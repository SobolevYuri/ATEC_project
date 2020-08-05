import React from "react";
import injectSheet from "react-jss";
import classNames from "classnames";

import styles from "./style";
import { List } from "../index";

class HeaderContacts extends React.Component {
  render() {
    return (
      <div className={this.props.classes.defaultHeaderContactsStyles}>
        <List
          itemsArray={Object.keys(this.props.contactsArray)}
          isVertical={true}
        />
        <List
          itemsArray={Object.values(this.props.contactsArray)}
          isVertical={true}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(HeaderContacts);
