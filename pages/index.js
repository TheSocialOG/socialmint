import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Social Mint | La crypto des créateurs</title>
        <meta name="description" content="Social Mint ($SMNT) transforme ton influence en monnaie. Tu crées, tu gagnes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img src="/logo-socialmint.png" alt="Social Mint logo" className={styles.logo} />
        <h1 className={styles.title}>🚀 Social Mint ($SMNT)</h1>
        <p className={styles.description}>La crypto qui paie tes posts. Crée du contenu. Gagne des tokens. Rejoins la révolution sociale.</p>
        <a href="https://discord.gg/tonlien" className={styles.button}>🔗 Rejoindre la communauté</a>
      </main>
    </>
  );
}
