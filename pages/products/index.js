import ProductsLayout from "../../components/products/ProductsLayout";
import AlbumnsLayout from "../../layout/AlbumsLayout";

export default function AlbumsPage({ data }) {
  console.log(data);
  return (
    <AlbumnsLayout>
     

    </AlbumnsLayout>
  );
}

export async function getServerSideProps({query}) {
  

  const res = await fetch(process.env.API_URL + "products");
  const data = await res.json();
  

  return {
    props: {
      data: {
        albums: data,
        total: 0
      }
    }
  }
}
