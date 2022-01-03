import Link from "next/link";

import styled from "styled-components";
import ActiveLink from "./ActiveLink";

const NavEl = styled.nav`
  padding: 1.3em 0;
`;

const UlEl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const LiEl = styled.li`
  margin-right: 1em;

  a {
    font-weight: bold;
    font-size: large;
  }
`;

export default function Nav() {
  return (
    <NavEl>
      <UlEl>
        <LiEl>
          <Link href="/">
            <a>Home</a>
          </Link>
        </LiEl>
        <LiEl>
          <Link href="/about">
            <a>About</a>
          </Link>
        </LiEl>
        {/* <LiEl>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </LiEl>

        <LiEl>
          <Link href="/users">
            <a>Authors</a>
          </Link>
        </LiEl>

        <LiEl>
          <Link href="/recoi">
            <a>Learn Recoil</a>
          </Link>
        </LiEl> */}
        <LiEl>
          <Link href="/new">
            <a>New Arrivals</a>
          </Link>
        </LiEl>
      </UlEl>
    </NavEl>
  );
}
