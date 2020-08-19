import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import AppD from '../../images/appd.jpg';

const FirstLeftText = () => <p>Callout component</p>;

const FirstRightText = () => (
  <p>
    This is a callout component. You can edit the contents by updating the{' '}
    <a href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/5fe12de31bb19fbfa2cab7c69cd942f55aa06f79/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      pre-shadowed homepage template
    </a>
    . You can also provide <code>color</code> and <code>backgroundColor</code>{' '}
    props to suit your theme.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Homepage source →
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

const BannerText = () => <svg xmlns="http://www.w3.org/2000/svg" width="175" height="40px"><path d="m64.702 14.107c2.74 0 4.76 1.98 4.76 4.6s-2 4.62-4.76 4.62h-3.24v4.38h-2.7v-13.6zm-.38 6.86c1.24 0 2.46-.66 2.46-2.26s-1.22-2.24-2.46-2.24h-2.86v4.5zm18.866 6.74-1.22-2.86h-6.52l-1.22 2.86h-2.78l6.04-13.6h2.54l6.04 13.6zm-6.76-5.14h4.56l-2.28-5.3zm25.167-4.1c0 1.8-1 3.28-2.56 3.98l2.42 5.26h-2.96l-2.14-4.82h-3.04v4.82h-2.7v-13.6h6.32c2.68 0 4.66 1.88 4.66 4.36zm-8.28-2v4.08h3.22c1.2 0 2.4-.6 2.4-2.04 0-1.46-1.2-2.04-2.4-2.04zm23.987-2.36v2.44h-4.32v11.16h-2.72v-11.16h-4.34v-2.44zm11.326 2.04h-2.02v9.5h2.02v2.06h-6.74v-2.06h2.02v-9.5h-2.02v-2.04h6.74zm11.527 11.84c-3.82 0-7.2-2.78-7.2-7.08s3.38-7.08 7.2-7.08c2.62 0 4.76 1.16 6.04 3.04l-2.5 1.12c-.7-.94-1.88-1.68-3.54-1.68-2.56 0-4.46 2-4.46 4.6s1.9 4.6 4.46 4.6c1.66 0 2.84-.74 3.54-1.68l2.5 1.12c-1.28 1.88-3.42 3.04-6.04 3.04zm13.727-2.72h6.62v2.44h-9.32v-13.6h2.7zm14.486 0h7.06v2.44h-9.76v-13.6h9.64v2.44h-6.94v2.98h5.9v2.42h-5.9zm-156.78-16.485-3.24-7.038c1.8-.539 3.7-.833 5.667-.833 11.32 0 20.497 9.56 20.497 21.355 0 7.212-3.436 13.584-8.69 17.45l-3.239-7.037c2.815-2.516 4.6-6.246 4.6-10.413 0-7.578-5.895-13.72-13.168-13.72-.83 0-1.64.083-2.428.236zm4.326 25.965a12.75 12.75 0 0 1 -2.011.159c-7.273 0-13.169-6.143-13.169-13.72 0-4.009 1.651-7.615 4.282-10.123z" fill="#FFFFFF"/></svg>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={AppD} />,
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
