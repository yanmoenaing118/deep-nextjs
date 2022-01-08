import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import ProductsLayout from "../../components/products/ProductsLayout";
import ProductsList from "../../components/products/ProductsList";
import AlbumnsLayout from "../../layout/AlbumsLayout";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AlbumsPage() {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR(process.env.API_URL + "products", fetcher);
  const [product, setProduct] = useState();

  


  async function onSubmit(e) {
    e.preventDefault();
    const body = {
      title: product,
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };

    mutate(process.env.API_URL + "products", [...data, body], false);

    console.log(body);

    const res = await fetch(process.env.API_URL + "products", {
      method: "POST",
      body: JSON.stringify(body)
    });
    const newProduct = await res.json();


    console.log("NEW PRODUCT", newProduct);


    console.log(data);


  }

  return (
    <AlbumnsLayout>
      {error ? (
        <div>Error loading products</div>
      ) : !data ? (
        <div>Loading products....</div>
      ) : (
        <ProductsList list={data} />
      )}

      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="product" id="product" onChange={e => setProduct(e.target.value)} />
        </form>
      </div>
    </AlbumnsLayout>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: {},
  };
}
