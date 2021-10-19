import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Maatje. I'm a front-end developer for Cineville. You can contact me via <a href="mailto:mjvanderveer@gmail.com">e-mail</a></p>
        <h1>Blog</h1>
        <Link href="/posts/first-post">How to set up a new project with Next.js, Storybook and Figma</Link>
      </section>
    </Layout>
  )
}
