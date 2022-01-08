import Head from "next/head";
import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Yan Moe Naing</title>
      </Head>
      <Header />
      {children}
    </>
  );
}
