import Head from "next/head";
import PageTransitionEffect from "../components/PageTransitionEffect";
import User from "../components/user/User";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react/cjs/react.development";

export default function Layout({ children }) {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("Client Session ", session);
  }, [session])
  return (
    <>
      <PageTransitionEffect />
      <Head>
        <title>My Playlist</title>
      </Head>
      <header>
        <h1>Next JS In depth</h1>
        {session ? (
          <div>
            <User email={session.user.email} profile={session.user.image} name={session.user.name} />
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        ) : (
          <button onClick={() => signIn()}>Sign In</button>
        )}
      </header>

      <main>{children}</main>

      <footer></footer>

      <style jsx>{`
        header {
          height: 66px;
          display: flex;
          align-items: center;
          justify-content: space-between;
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
