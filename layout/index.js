import Head from "next/head";
import PageTransitionEffect from "../components/PageTransitionEffect";
export default function Layout({ children }) {
  return (
    <>
    <PageTransitionEffect />
      <Head>
        <title>Next JS in depth</title>
      </Head>
      <header>
        <h1>Next JS In depth</h1>
      </header>

      <main>{children}</main>

      <footer></footer>

      <style jsx>{`
          
        header {
          height: 66px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #ccc;
          padding: 0 1em;
        }
        main {
          margin: 16px 0;
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
