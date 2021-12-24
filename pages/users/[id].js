import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import useSWR from "swr";
import usePosts from "../../hooks/usePosts";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UserPage() {
  const router = useRouter();
  const { query } = router;

  const { data: user, error: userError } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${query.id}`,
    (url) => fetcher(url)
  );

  const { data: posts } = useSWR(() => {
    if (!user) return null;
    return `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`;
  }, fetcher);

  const renderPosts = () => {
    if (!posts) {
      return <div>Loading ....</div>;
    }

    return posts.map((post) => (
      <Link key={post.id} href={`/posts/${post.id}`}>
        <a>
          <h4>{post.title}</h4>
          <style jsx>{`
            h4 {
              margin-top: 1em;
              padding: 1em;
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
              transition: color 0.3s ease;
            }

            h4:hover {
              color: mediumaquamarine;
            }
          `}</style>
        </a>
      </Link>
    ));
  };

  const renderUser = () => {
    let _user = null;

    if (userError) {
      return (_user = <h1>{error.message}</h1>);
    }

    if (!user) {
      return (_user = <h1>Loading...</h1>);
    }

    _user = (
      <div className="user">
        <h3 className="user_name">{user.name}</h3>
        <div>
          <h2>Posts</h2>
          {renderPosts()}
        </div>
      </div>
    );

    return _user;
  };

  return <Layout>{renderUser()}</Layout>;
}
