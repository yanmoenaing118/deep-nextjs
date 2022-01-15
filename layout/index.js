import Head from "next/head";
import PageTransitionEffect from "../components/PageTransitionEffect";
export default function Layout({ children }) {
  return (
    <>
      <PageTransitionEffect />
      <Head>
        <title>My Playlist</title>
        <meta name="title" content="My Playlist" />
        <meta
          name="description"
          content="A music player which play I listen to daily."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="My Playlist" />
        <meta
          property="og:description"
          content="A music player which play I listen to daily."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="My Playlist" />
        <meta
          property="twitter:description"
          content="A music player which play I listen to daily."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
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
