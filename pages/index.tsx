import { GetStaticProps } from "next";
import Head from "next/head";
import Entry from "../components/Entry";
import Header from "../components/Header";
import { notion } from "../db";

export default function Home({ data }) {
  const { results } = data;

  return (
    <>
      <Head>
        <title>Relance - Track job applications</title>
        <meta
          name="description"
          content="Apply again to jobs you care with Relance."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h3 className="text-lg mb-4">Applications({results.length})</h3>

        {results.map((item) => (
          <Entry key={item.id} {...item} />
        ))}
      </main>

      <footer></footer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const resp = await notion.databases.query({
    database_id: process.env.NOTION_DB_RELANCE,
  });

  return {
    props: {
      data: resp,
    },
  };
};
