import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "./../../styles/Post.module.css";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Post({ post }) {
  const router = useRouter();

  const { data } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`,
    fetcher
  );

  const renderPost = () => {
    if (router.isFallback) {
      return (
        <Layout title="Loading Post">
          <h3>Loading...please wait</h3>
        </Layout>
      );
    }

    return (
      <Layout title={post.title}>
        <div className={styles.post}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <p>
            <strong>Posted by {data ? data.name : "Loading..."}</strong>
          </p>

          <button onClick={() => router.back()}>Back</button>
          <style jsx>{`
            button {
              cursor: pointer;
              background: none;
              border: none;
              color: #333;
            }
          `}</style>
        </div>
      </Layout>
    );
  };

  return renderPost();
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  posts.splice(10, 90);

  const paths = posts.map((post) => {
    return {
      params: {
        id: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${encodeURIComponent(
      params.id
    )}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
