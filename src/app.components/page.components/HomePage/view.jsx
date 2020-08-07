import React from "react";
import injectSheet from "react-jss";

import { SectionWrapper } from "../../components";
import { WelcomeSection } from "./index.js";
import styles from "./style";
// import classNames from "classnames";

class HomePage extends React.Component {
  render() {
    return (
        <SectionWrapper>
          <WelcomeSection />
        </SectionWrapper>
    );
  }
}

export default injectSheet(styles)(HomePage);
