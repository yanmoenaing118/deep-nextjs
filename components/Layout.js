import Head from "next/head";
import Nav from "./Nav";
import ProgressBar from "../layout/ProgressBar";

export default function Layout({ title, children }) {
  return (
    <>
      <ProgressBar />
      <div className="layout">
        <Head>
          <title>{title}</title>
        </Head>
        <div className="container">
          <Nav />
          <div>{children}</div>
        </div>

        <style jsx>{`
          .layout {
            max-width: 800px;
            margin: auto;
            margin-top: 16px;
          }

          .container {
          }
        `}</style>
      </div>
    </>
  );
}
