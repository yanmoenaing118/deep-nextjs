import Link from "next/link";

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
          <Link href="/about">About </Link>
        </li>
        <li>
          <Link href="/products">New Products </Link>
        </li>
        <li>
          <Link href="/services">Services </Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          display: flex;
        }

        ul li {
          font-family: arial;
          padding-left: 1em;
        }
      `}</style>
    </nav>
  );
}
