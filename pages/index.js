import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
// import Button from  'next/button';

export default function Home() {
  return (
    <Layout home>
    <main>
      <Head>
        <title>Video Hosting</title>
      </Head>
      <Link href="/" passHref>
        <button className="btn">
          Home
        </button>
      </Link>
      <Link href="/about" passHref>
        <button className="btn">
          About
        </button>
      </Link>
      <Link href="/gallery" passHref>
        <button className="btn">
          Gallery
        </button>
      </Link>
      <section className={utilStyles.headingMd}>
        <h2>A FOSS Video Hosting Platform</h2>
      </section>        
    </main>
    <footer>
    <p>
      <a href="/contact">
        <button>
          Contact Us
        </button>
      </a>
      <a href="/collaboratopia">
        <button>
          Collaboratopia Portal
        </button>
      </a>
        Website made with ❤ by CJ  |  Copyright ©️ 2022 CJ (LinuxGamer) <Link href="https://github.com/LinuxGamer/linuxgamer.github.io" target="_blank" rel="noreferrer" passHref><span class="emoji" data-emoji="f09b"></span></Link></p>
      </footer>
    </Layout>
  );
}
