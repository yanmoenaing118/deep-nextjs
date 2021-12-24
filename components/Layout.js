import Head from "next/head";
import styled from "styled-components";
import Nav from "./Nav";

const LayoutEl = styled.div`
  max-width: 800px;
  margin: auto;
  margin-top: 16px;
`;

const ContainerEl = styled.div``;

export default function Layout({ title, children }) {
  return (
    <LayoutEl>
      <Head>
        <title>{title}</title>
      </Head>
      <ContainerEl>
        <Nav />
        <div>{children}</div>
      </ContainerEl>
    </LayoutEl>
  );
}
