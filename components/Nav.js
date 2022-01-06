import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>

        <li>
          <Link href="/users">
            <a>Authors</a>
          </Link>
        </li>

        <li>
          <Link href="/recoi">
            <a>Learn Recoil</a>
          </Link>
        </li>
        <li>
          <Link href="/new">
            <a>New Arrivals</a>
          </Link>
        </li>
        <li>
          <Link href="/albums">
            <a>Albums</a>
          </Link>
        </li>
      </ul>
      <div>
        <button>Register</button>
        <button>Login</button>
      </div>
      <style jsx>{`
        nav {
          padding: 1.3em 0;
          display: flex;
          justify-content: space-between;
        }

        ul {
          display: flex;
          list-style: none;
          padding: 0;
        }

        li {
          margin-right: 1em;
        }

        li a {
          font-weight: bold;
          font-size: large;
          color: lightgreen;
        }

        button {
          background: none;
          color: darkgreen;
          padding: 0.2em 0.4em;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-left: 1em;
          border: none;
        }

        button:hover {
          background-color: pink;
          color: #fff;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </nav>
  );
}
