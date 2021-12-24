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
          <ActiveLink href="/">Home</ActiveLink>
        </LiEl>
        <LiEl>
          <ActiveLink href="/about">About</ActiveLink>
        </LiEl>
        <LiEl>
          <ActiveLink href="/posts">Posts</ActiveLink>
        </LiEl>

        <LiEl>
          <ActiveLink href="/users">Authors</ActiveLink>
        </LiEl>
      </UlEl>
    </NavEl>
  );
}
