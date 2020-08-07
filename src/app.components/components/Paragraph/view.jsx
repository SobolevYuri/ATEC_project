import React from 'react';
import injectSheet from 'react-jss';
import classNames from "classnames";
import styles from "./style";

class Paragraph extends React.Component {
    render() {
        const {text, classes} = this.props;
        const calClasses=classNames(classes.textField, {
            [classes.detailsText]: this.props.isDetailsText,
        });

        return <p className={calClasses}>
            {text}
        </p>;
    }
}

export default injectSheet(styles)(Paragraph);