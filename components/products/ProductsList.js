import Link from "next/link";

export default function ProductsList({ list }) {
  return (
    <ul>
      {list?.map((item) => {
        return (
          <li>
            <Link href={`/products/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
