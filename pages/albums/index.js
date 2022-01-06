import Layout from "../../components/Layout";

export default function Albums({ data }) {
  console.log(data.slice(0, 10));
  return (
    <Layout title="Albums">
      <h1>Albums</h1>
    </Layout>
  );
}

async function get(url) {
  return fetch(url).then((res) => res.json());
}

export async function getServerSideProps({ req, query }) {
  // fetch /api directory
  const res = await get(process.env.APP_URL + "/api/albums");

  return {
    props: {
      title: "Albums",
      data: res,
    },
  };
}
