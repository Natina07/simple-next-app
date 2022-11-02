import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
       Actions-based deployments <br/> are here! ✨
        </h1>
        <h3>Use GitHub Actions to deploy your app to GitHub Pages using ANY Static Site Generator</h3>
        <h3>Rosy my superstar. Give it a try today!</h3>
        <img className={styles.img} src="https://octodex.github.com/images/femalecodertocat.png" alt="female coder octocat" />
        </main>
    </div>
  )
}
