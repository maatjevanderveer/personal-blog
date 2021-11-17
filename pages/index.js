import Head from "next/head";
import ArticleCard from "../components/article-card";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import Button from "../components/button";
import ButtonGroup from "../components/button-group";
import { getSortedPostsData } from "../lib/posts";

// getStaticProps can only be exported from a page
// because React needs to have all the data before te page gets rendered
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.editorialText}>
          Welcome at my personal blog. I'm a front-end developer for Cineville.
          You can contact me via{" "}
          <a href="mailto:mjvanderveer@gmail.com">e-mail</a>
        </p>
        <h1>Blog</h1>
        <ArticleCard
          imageSource="https://cineville-media.imgix.net/magazine/cineville-cuisine-an/Dorayaki-a-la-An_artikel-header.jpg?w=1200"
          editorialSection="Cineville Cuisine"
          title="This is a delicious pancake recipe"
        />
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

      <ButtonGroup>
        <Button
          variant="primary"
          label="+ Lees meer"
          size="md"
          onClick={() => {
            alert("hello");
          }}
        />
        <Button
          variant="secondary"
          label="+ Lees meer"
          size="md"
          onClick={() => {
            alert("hello");
          }}
        />
      </ButtonGroup>
    </Layout>
  );
}
