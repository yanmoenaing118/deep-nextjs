import Link from "next/link";
import Layout from "../../components/Layout";

export default function New({ products }) {
  return (
    <Layout>
      <div>
        <ul>
          {products &&
            products.map((p) => (
              <li key={p.id}>
                <Link href={`/products/${p.id}`}>
                  <a>{p.Name}</a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await fetch("http://localhost:3000/products").then((res) =>
    res.json()
  );

  return {
    props: {
      products: data,
    },
  };
}
