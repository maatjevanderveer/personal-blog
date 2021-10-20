import Head from "next/head";
import Link from "next/link";
import ArticleCard from "../components/article-card/article-card";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Maatje. I'm a front-end developer for Cineville. You can
          contact me via <a href="mailto:mjvanderveer@gmail.com">e-mail</a>
        </p>
        <h1>Blog</h1>
        <ArticleCard
          imageSource="https://cineville-media.imgix.net/magazine/cineville-cuisine-an/Dorayaki-a-la-An_artikel-header.jpg?w=1200"
          editorialSection="Cineville Cuisine"
          title="This is a delicious pancake recipe"
        />
      </section>
    </Layout>
  );
}
