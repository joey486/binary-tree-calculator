import React from "react";
import Head from "next/head";
import BinaryTreeVisualizer from "../components/BinaryTreeVisualizer";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Binary Tree Visualizer</title>
        <meta
          name="description"
          content="Create, visualize and interact with binary trees. An educational tool for computer science students and developers."
        />
        <meta
          name="keywords"
          content="binary tree, tree visualization, data structures, algorithms"
        />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Binary Tree Visualizer" />
        <meta
          property="og:description"
          content="Interactive tool for visualizing binary trees"
        />
        <meta property="og:type" content="website" />
      </Head>

      <header className={styles.header}>
        <h2 className={styles.title}>Binary Tree Visualizer</h2>
        <p className={styles.description}>
          Create and visualize binary tree structures with an interactive
          builder
        </p>
      </header>

      <main className={styles.main}>
        <BinaryTreeVisualizer />
      </main>

      <footer className={styles.footer}>
        <p>
          Built with <span className={styles.heart}>♥</span> by{" "}
          <a
            href="https://github.com/joey486"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joey Heifetz
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
