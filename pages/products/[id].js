import ProductsLayout from "../../components/products/ProductsLayout";
import AlbumnsLayout from "../../layout/AlbumsLayout";

export default function ProductPage() {
  return (
    <AlbumnsLayout>
      <ProductsLayout
        aside={
          <div>
            <h1>Products </h1>
          </div>
        }
        content={<h1>Product Name</h1>}
      />
    </AlbumnsLayout>
  );
}
