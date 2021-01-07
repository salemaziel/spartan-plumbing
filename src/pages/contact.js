import React from 'react';
import Layout from '../components/layout';

import ContactPage from '../components/PageComponents/Contact/contactpage'
import {  Helmet } from 'react-helmet'

const Contact = () => (
  <Layout>
<Helmet title={'Contact Spartan Plumbing & Drain'} />
      <ContactPage />
  </Layout>
);

export default Contact
