import React from 'react';
import Layout from '../components/layout';
import AboutPage from '../components/PageComponents/About/aboutPage'
import {  Helmet } from 'react-helmet'

const About = () => (
  <Layout>
    <Helmet title={'About Spartan Plumbing & Drain'} />
    <AboutPage />
  </Layout>
);

export default About
