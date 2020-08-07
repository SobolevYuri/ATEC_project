import React from "react";
import injectSheet from "react-jss";

import { headingLvlOneTitles } from "../../../../contentStore";
import { Heading, Paragraph, Icon } from "../../../components";
import styles from "./style";
import classNames from "classnames";

class WelcomeSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <section className={classes.welcomeSection}>
        <Icon
          imgSrc="./images/icons/logo.png"
          imgAlt="logo icon"
          isLogo={true}
        />
        <div className={classes.welcomeSection}>
          <Heading headingLvl="1" title={headingLvlOneTitles.welcomeHeading} />
          <Paragraph text="Техническая экспертиза" />
        </div>
        <div className={classNames(classes.welcomeSection)}>
          <Paragraph text="Подробнее" isDetailsText={true} />
          <Icon
            imgSrc="./images/icons/arrow-down.svg"
            imgAlt="arrow down icon"
            isArrow={true}
          />
        </div>
      </section>
    );
  }
}

export default injectSheet(styles)(WelcomeSection);
