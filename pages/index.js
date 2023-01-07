import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VideoCentral</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/video.js@7/dist/video-js.min.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/@videojs/themes@1/dist/city/index.css"
          rel="stylesheet"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {/* <Image src="../assets/panda1.png" alt="mascot placeholder" /> */}
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/LinuxGamer/videocentral" target="_blank" rel="noreferrer">VideoCentral</a>
        </h1>

        <p className={styles.description}>
          A FOSS video hosting platform.
        </p>
        <video class="video-js vjs-theme-city" src="Archive/users/Project/videos/videofiles/videorendertest1.mp4"></video>

  <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
  >
    <source src="Archive/users/Project/videos/videofiles/videorendertest1.mp4" type="video/mp4" />
    <source src="Archive/users/Project/videos/videofiles/videorendertest1.webm" type="video/webm" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video>

  <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
