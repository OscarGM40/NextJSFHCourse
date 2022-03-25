import Head from "next/head"
import { Navbar } from "../Navbar";
import styles from './MainLayout.module.css';

export const MainLayout = ({ children, page }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{page} - Next Rocks</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
        <meta name="keywords" content="next, rocks, home" />
      </Head>

      <Navbar />
      <h1>{page}</h1>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}