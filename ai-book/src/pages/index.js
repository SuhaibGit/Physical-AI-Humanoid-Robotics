import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* Optional: Add a button to navigate to the docs */}
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Reading
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="The AI-Native Textbook on Physical AI & Humanoid Robotics"
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>Welcome to the AI-Native Textbook on Physical AI & Humanoid Robotics!</h2>
                <p>This book explores the fascinating intersection of artificial intelligence and physical systems, focusing on the cutting-edge field of humanoid robotics.</p>
                <p>Dive into the core modules:</p>
                <ul>
                  <li><strong>ROS 2</strong> - The Robotic Nervous System</li>
                  <li><strong>Gazebo & Unity</strong> - The Digital Twin</li>
                  <li><strong>NVIDIA Isaac</strong> - The AI Robot Brain</li>
                  <li><strong>Vision-Language-Action</strong> - VLA</li>
                </ul>
                <p>Start your journey into building intelligent robots today!</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
