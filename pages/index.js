import { useRouter } from "next/router";
import { useEffect, useState } from "react/cjs/react.development";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then((res) => {
    return res.json();
  });

const PAGE_SIZE = 6;

export default function Home({ query, respositories }) {
  // const [repo, setRepo] = useState("reactjs/react-a11y");
  const [pageIndex, setPageIndex] = useState(2);
  // const [list, setList] = useState([]);
  // const [sortBy, setSortBy] = useState("");

  // const { data } = useSWR(
  //   `https://api.github.com/users/yanmoenaing118/repos?per_page=${PAGE_SIZE}&page=${pageIndex}&sort=${sortBy}`,
  //   fetcher
  // );

  const router = useRouter();

  function handlePageChange(dir) {
    dir === "next"
      ? setPageIndex(pageIndex + 1)
      : setPageIndex(pageIndex - 1);

    router.push(`/?page=${pageIndex}`);
  }

  function handleSort(sortBy) {}
  return (
    <>
      <div>
        <h1>Repositories</h1>

        <div>
          {query?.page}
          {respositories?.map((res) => (
            <div key={res.name} className="repo">
              <p>
                <strong>RepoName</strong>
                {res.name}
              </p>
              <p>
                <strong>Created at</strong>
                {res.created_at}
              </p>
            </div>
          ))}
        </div>

        <button onClick={() => handlePageChange("next")}>Next Page</button>
        <button onClick={() => handlePageChange("prev")}>Previous Page</button>

        <button onClick={() => handleSort("created")}>Sort By created</button>
        <button onClick={() => handleSort("updated")}>Sort By Updated</button>
        <button onClick={() => handleSort("pushed")}>Sort By Pushed</button>
        <button onClick={() => handleSort("full_name")}>Sort By Name</button>
        <style jsx>{`
          button {
            padding: 0.3em;
          }
          .repo {
            margin: 1em;
          }
        `}</style>
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const queryString = _getQueryString(query);
  const res = await fetch(`https://deep-nextjs.vercel.app/api/repo${queryString}`);
  const data = await res.json();

  console.log(data);
  
  return {
    props: {
      query,
      respositories: data
    },
  };
}

function _getQueryString(queryObject) {

  let queryString = "";
  
  if(queryObject.page) {
    queryString += `?page=${queryObject.page}`
  }

  return queryString;

}