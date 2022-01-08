import HomeLayout from "../layout/HomeLayout";

export default function Home({ home }) {
  console.log(home);
  return (
    <HomeLayout>
      <h1>Welcome to Next JS.</h1>
    </HomeLayout>
  );
}

export async function getServerSideProps({ query }) {
 

  const res = await fetch(process.env.APP_URL + "/api/home");

  const data = await res.json();

  return {
    props: {
      home: data,
    },
  };
}
