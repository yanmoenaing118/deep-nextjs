import Link from "next/link";
import Layout from "../../components/Layout";

export default function UsersPage({ users }) {
  return (
    <Layout title="Users">
      {users.map((user) => {
        return (
          <div className="user">
            <Link href={`/users/${user.id}`}>
              <a>
                <h3>{user.name}</h3>
              </a>
            </Link>
          </div>
        );
      })}
      <style jsx>{`
        .user {
          padding: 1em;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
        }

        .user h1 {
          text-transform: capitalize;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
