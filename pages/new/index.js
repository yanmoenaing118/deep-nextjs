import Link from "next/link";
import { useEffect } from "react/cjs/react.development";
import Layout from "../../components/Layout";

export default function New({ query, products }) {
  useEffect(() => {
    console.log("Query[pages/new/index.js]", query);
  }, [query]);
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
                <button>add to cart</button>
              </li>
            ))}

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
                display: flex;
                justify-content: space-between;
                align-items: center;
              }

              button {
                background: none;
                color: darkgreen;
                border: 1px solid #444;
                padding: 0.2em 0.4em;
                cursor: pointer;
                transition: all 0.2s ease;
              }

              button:hover {
                background-color: pink;
                color: #000;
                border: 1px solid transparent;
              }
            `}
          </style>
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const data = await fetch("http://localhost:3000/products").then((res) =>
    res.json()
  );

  return {
    props: {
      query,
      products: data,
    },
  };
}
