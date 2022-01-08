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
  
  

  return {
    props: {
      data: {
        albums: [],
        total: 0
      }
    }
  }
}
