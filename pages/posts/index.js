import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "./../../styles/Posts.module.css";
export default function PostsPage({ posts }) {
  return (
    <Layout title="Posts">
      <h1>Read My Posts</h1>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id} className={styles.postItem}>
              <h4>{post.title}</h4>
              <Link href={`/posts/${post.id}`}>
                <a>Read More</a>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await res.json();

  posts.splice(10, 90);

  return {
    props: {
      posts,
    },
  };
}
