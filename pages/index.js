import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

// Require Imports
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
// End of Requirement

export default function Home(props) {

    // Require for bi-language
    const router = useRouter();
    const { locale, locales, defaultLocale } = router;
    const { formatMessage } = useIntl();
    const f = (id) => formatMessage({ id });
    // End of Requirement

    return (
        <div className={styles.container}>
            <Head>
                <title>Locale {locale}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={styles.main}>
                <h1>{f("hello")}</h1>
                <h1>{f("welcomeMessage")}</h1>
                <h1 className={styles.title}>
                    Read{" "}
                    <Link href="/">
                        <a>Default Locale : {defaultLocale}</a>
                    </Link>
                </h1>

                <p className={styles.description}>
                    Get started by editing <code className={styles.code}>pages/index.js</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h3>Documentation &rarr;</h3>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Learn &rarr;</h3>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
                        <h3>Examples &rarr;</h3>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    );
}
