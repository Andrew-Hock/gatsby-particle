import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = () => 
  <>
    <p>
Questions, comments or feedback?
    </p>
    <p>
      <a href="emailto:">
        E-mail the team by clicking here
      </a>
    </p>
  </>
    
const links = {
  firstCol: [],
  secondCol: [{ href: 'https://ibm.com/design', linkText: 'Particle #Slack Channel' }],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;
export default CustomFooter;
