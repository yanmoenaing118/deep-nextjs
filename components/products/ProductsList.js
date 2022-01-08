import Link from "next/link";
export default function ProductsList({ list }) {
  return (
    <ul>
      {list?.map((item, idx) => {
        return (
          <li key={idx}>
            <Link href={`/products`}>
              <a>{item.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
