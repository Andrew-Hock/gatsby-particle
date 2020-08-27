import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import appdbanner from '../../images/appd-banner.jpg';

const FirstLeftText = () => <p>What is Particle?</p>;

const FirstRightText = () => (
  <p>
    Welcome to the home of AppDynamic's design system. You'll find style guides, specifications and resources to help you get working with components quickly and easily. To know more about what guides the decisions behind the design system 
    and the values that drive us, click the link below.
    <a
      className={calloutLink}
      href="https://particle.appdynamics.com">
      Read more →
    </a>
  </p>
);

const SecondLeftText = () => <p>Callout component</p>;

const SecondRightText = () => (
  <p>
    You can also not use these components at all by not providing the callout
    props to the template or writing your own template.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Homepage source →
    </a>
  </p>
);

const BannerText = () => <h1>Particle Gatsby theme</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={appdbanner} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
