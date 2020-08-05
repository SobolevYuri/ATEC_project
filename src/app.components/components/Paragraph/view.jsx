import React from 'react';
import injectSheet from 'react-jss';
import styles from "./style";

class Paragraph extends React.Component {
    render() {
        return <p className={this.props.className}></p>;
    }
}

export default injectSheet(styles)(Paragraph);