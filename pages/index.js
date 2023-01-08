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
          A FOSS video hosting platform. !Video Testing below!
        </p>



        <video id="my_video_1" class="video-js vjs-theme-city" width="85%" controls preload="none" autoplay="true" poster='http://video-js.zencoder.com/oceans-clip.jpg' data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' />
          <source src="https://vjs.zencdn.net/v/oceans.webm" type='video/webm' />
        </video>

<svg viewBox="0 0 24 24" width="24" height="24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" fill="#1da1f2" /></svg><svg viewBox="0 0 24 24" width="24" height="24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="#ff0000" /></svg><svg viewBox="0 0 24 24" width="24" height="24"><path d="M17.423 16.966c-.396-.372-2.254-.977-3.869-1.684-1.04-.519-1.794-.814-2.568-1.116-.774-.301-1.45-.596-2.028-.596-.578 0-1.254.293-2.028.596-.774.301-1.529.597-2.568 1.116-1.615.707-3.473 1.312-3.869 1.684-.396.371-.596.607-.596 1.089h6.362c0-.482-.2-.718-.596-1.089zM6.939 10.977c1.616-.707 3.474-1.312 3.87-1.684.396-.371.595-.607.595-1.089H6.344c0 .482.199.718.595 1.089.396.372 2.254.977 3.87 1.684zM12 14.007c1.898 0 3.485-1.155 4.532-2.927l-2.063-.662c-.61.846-1.5 1.383-2.539 1.383-1.039 0-1.929-.537-2.54-1.383l-2.063.662c1.047 1.772 2.634 2.927 4.532 2.927zm0-4.007c.964 0 1.796.47 2.352 1.207l2.063-.662c-.805-1.354-2.352-2.207-4.118-2.207s-3.313.853-4.118 2.207l2.063.662c.556-.737 1.388-1.207 2.352-1.207z" fill="#2b90d9" /></svg><svg viewBox="0 0 24 24" width="24" height="24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#0066cc" /></svg>

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
          font-family: "Venera", Calibri, Tahoma, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
