import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react/cjs/react.development";

export default function UserPage({ user }) {
  const [name, setName] = useState(user.username);
  const router = useRouter();

  async function handleUpdateUser(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:9000/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzaWQxMjM0IiwidXNlcm5hbWUiOiJZYW4iLCJpYXQiOjE2NDIzNDQ4NzcsImV4cCI6MTY0MjQzMTI3N30.HRAtPnOkdDy8AuqZpURZA3hQVtggG91UcH8X2_PMC4g",
      },
      body: JSON.stringify({
        username: name,
      }),
    });

    router.reload();
  }

  return (
    <div>
      <h1>{user.username}</h1>
      <div>
        {/* <img src={user.profile_image} alt="" /> */}
        <Image
          src={user.profile_image}
          alt={user.username}
          width={100}
          height={100}
        />
      </div>
      <form onSubmit={handleUpdateUser}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}

export async function getServerSideProps() {
  const { data: user } = await fetch("http://localhost:9000/api/v1/user", {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzaWQxMjM0IiwidXNlcm5hbWUiOiJZYW4iLCJpYXQiOjE2NDIzNDQ4NzcsImV4cCI6MTY0MjQzMTI3N30.HRAtPnOkdDy8AuqZpURZA3hQVtggG91UcH8X2_PMC4g",
    },
  }).then((res) => res.json());

  return {
    props: {
      user,
    },
  };
}
