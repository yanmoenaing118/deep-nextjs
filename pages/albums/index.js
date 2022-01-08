import AlbumnsLayout from "../../layout/AlbumsLayout";

export default function AlbumsPage({ data }) {
  console.log(data);
  return (
    <AlbumnsLayout>
      <h1>Albums pages</h1>
    </AlbumnsLayout>
  );
}

export async function getServerSideProps({query}) {
  console.log(query);
  console.log("main is albums")

  return {
    props: {
      data: {
        albums: [],
        total: 0
      }
    }
  }
}
