import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";
import Layout from "../../components/Layout";
import useSimilar from "../../lib/products/useSimilar";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Product({ query, product }) {
  const { data } = useSWR(`http://localhost:3000/similars`, fetcher);

  useEffect(() => {
    console.log("Query", query);
  }, [query]);

  function renderSimilars() {
    if (!data) return <div>Loading Similars</div>;

    return (
      <ul>
        {data.map((p) => {
          return (
            <li key={p.id}>
              <Link href={`/products/${p.id}`}>
                <a>{p.Name}</a>
              </Link>
            </li>
          );
        })}
        <style jsx>
          {`
            ul {
              padding: 0;
              list-style: none;
            }

            li {
              margin: 0.3em 0;
              padding: 0.5em;
              box-shadow: 0 2px 2px rgba(0, 0, 0, 0.06);
            }
          `}
        </style>
      </ul>
    );
  }
  return (
    <Layout title={product.Name}>
      <div className="product">
        <h1>{product.Name}</h1>
        <p>
          <strong>PRICE</strong>: &nbsp;&nbsp;{product.Price}{" "}
        </p>
        <p>
          <strong>Location</strong>: &nbsp;&nbsp;{product.Location}{" "}
        </p>
      </div>

      {renderSimilars()}

      <style jsx>{`
        .product {
          margin: 2em 0;
        }
      `}</style>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`http://localhost:3000/products/${query.slug}`);
  const data = await res.json();

  return {
    props: {
      query,
      product: data,
    },
  };
}
