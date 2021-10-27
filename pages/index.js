import Head from "next/head";
import ArticleCard from "../components/article-card";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import Button from "../components/button";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.editorialText}>
          Welcome at my personal blog. I'm a front-end developer for Cineville. You can
          contact me via <a href="mailto:mjvanderveer@gmail.com">e-mail</a>
        </p>
        <h1>Blog</h1>
        <ArticleCard
          imageSource="https://cineville-media.imgix.net/magazine/cineville-cuisine-an/Dorayaki-a-la-An_artikel-header.jpg?w=1200"
          editorialSection="Cineville Cuisine"
          title="This is a delicious pancake recipe"
        />
      </section>
      <Button
        variant="primary"
        label="Lees meer"
        size="md"
        onClick={() => {
          alert("hello");
        }}
      />
      <Button
        variant="secondary"
        label="Lees meer"
        size="md"
        onClick={() => {
          alert("hello");
        }}
      />
    </Layout>
  );
}
