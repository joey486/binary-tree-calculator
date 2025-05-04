// pages/index.tsx
import React from 'react';
import BinaryTreeVisualizer from '../components/BinaryTreeVisualizer';
import Head from 'next/head';

const Home: React.FC = () => {
return (
  <div style={{ width: '100%', maxWidth: '100vw' }}>
    <Head>
      <title>Binary Tree Visualizer</title>
      <meta name="description" content="Interactive Binary Tree Visualization" />
      <link rel="icon" href="/favicon.png" type='image/x-icon'/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <main style={{ width: '100%', padding: '0' }}>
      <BinaryTreeVisualizer />
    </main>
  </div>
);
};

export default Home;