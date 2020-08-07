import React from "react";
import injectSheet from "react-jss";

import { Menu, HeaderContacts } from "../../components";
import { menuItems, headerContactsItems } from "../../../contentStore";
import styles from "./style";
import classNames from "classnames";

class Header extends React.Component {

  render() {
    const headerClasses = classNames(
      this.props.classes.defaultHeaderStyles,
      this.props.classes.headerAlign,
      this.props.classes.lightGrayTheme
    );

    return (
      <header className={headerClasses}>
        <Menu menuItemsArray={menuItems} isHorizontal={true} />
        <HeaderContacts contactsArray={headerContactsItems} />
      </header>
    );
  }
}

export default injectSheet(styles)(Header);
