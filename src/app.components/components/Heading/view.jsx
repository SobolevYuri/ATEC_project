import React from "react";
import injectSheet from "react-jss";

import styles from "./style";
// import classNames from "classnames";

class Heading extends React.Component {

    render() {
        const { headingLvl, title, classes } = this.props;
        let headingTag;
        
        switch(headingLvl){
            case '1': headingTag = <h1 className={classes.headingOne}>{title}</h1>; break;
            case '2': headingTag = <h2>{title}</h2>; break;
            case '3': headingTag = <h3>{title}</h3>; break;
            default: console.log("No heading type determined"); break;
        }

        return headingTag;
    }
}

export default injectSheet(styles)(Heading);