import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qr - Code</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>MIC QR Attendance</h1>

        <div className={styles.grid}>
          <a href="/scan" className={styles.card}>
            <h2>Scan a qr code&rarr;</h2>
            <p>Scan a qr code with your camera</p>
          </a>

          <a href="/generate" className={styles.card}>
            <h2> Generate a qr code&rarr;</h2>
            <p> Generate a qr code with text or a link</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
