import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Social Mint | Tu crées. Tu gagnes.</title>
        <meta name="description" content="Social Mint ($SMNT) transforme ton contenu en monnaie." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>🚀 Social Mint ($SMNT)</h1>
        <p className={styles.description}>Tu crées. Tu gagnes. Tu deviens ta propre banque.</p>
        <a href="https://discord.gg/tonlien" className={styles.button}>Rejoindre la communauté</a>
      </main>
    </>
  );
}
