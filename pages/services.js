export default function Services({ b }) {
  return (
    <div>
      <h1>Hello from services</h1>
      <style jsx>{`
        div {
          padding: 2em;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      b: "v0.0.2",
    },
  };
}
