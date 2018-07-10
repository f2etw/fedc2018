import Head from 'next/head';
import React from 'react';

export default () => (
  <div>
    <Head>
      <meta httpEquiv="refresh" content="0;url=/" />
    </Head>
    <p>redirect to /</p>
  </div>
);
