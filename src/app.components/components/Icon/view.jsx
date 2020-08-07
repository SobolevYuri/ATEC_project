import React from "react";
import injectSheet from "react-jss";

import styles from "./style";
import classNames from "classnames";

class Icon extends React.Component {
  render() {
    const { imgSrc, imgAlt, classes, ...props } = this.props;
    const calClasses = classNames({
        [classes.appLogoIcon]: this.props.isLogo,
        [classes.arrowIcon]: this.props.isArrow,
    });

    return <img src={imgSrc} alt={imgAlt} {...props} className={calClasses}/>;
  }
}

export default injectSheet(styles)(Icon);

