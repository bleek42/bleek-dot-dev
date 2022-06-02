import type { NextPage } from 'next';
import { Fragment, useRef } from 'react';

import { FcAbout } from 'react-icons/fc/index';

import Meta from '../components/Meta';
import Header from '../components/Header';
import Section from '../components/Section';
import NavMenu from '../components/NavMenu';

const About: NextPage = (): JSX.Element => {
  return (
    <Fragment>
      <Meta title="about bleek" description="bleek.tech about me section" keywords={[]} />
      <Header name="about me" info="some about info" icon={undefined} />
      <NavMenu />
      <Header name="About" info="this is the about me page" />
      <Section title="about" />
    </Fragment>
  );
};

export default About;
