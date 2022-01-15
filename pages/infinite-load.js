import {  useState } from "react";
import useSWRInfinte from "swr/infinite";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function InfiniteLoadPage() {
  const [sort, setSort] = useState("created");
  const { data, error, size, setSize } = useSWRInfinte(
    (index) =>
      `https://api.github.com/users/yanmoenaing118/repos?per_page=5&page=${index}&sort=${sort}`,
    fetcher
  );

  if (!data) return <div>Loading...</div>;
  const isLoadingInitialData = !data && !error;
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 5);
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");

  let totalRepositories = 0;
  for (let i = 0; i < data.length; i++) {
    totalRepositories += data[i].length;
  }
  const sortOptionsArr = ["created", "updated", "pushed", "full_name"];

  const sortOptions = sortOptionsArr.map((opt) => <option key={opt} value={opt}>{opt}</option>);
  return (
    <div className="container">
      <h1>Infinite Load</h1>

      <div className="actions">
        <strong>Total Repositiorie: {totalRepositories}</strong>
        <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
        {sortOptions}
        </select>
      </div>

      {data.map((repos, idx) => {
        return repos.map((repo) => <div key={repo.name}>{repo.name}</div>);
      })}

      <div>
        {isReachingEnd ? (
          ""
        ) : (
          <button
            disabled={isLoadingMore}
            onClick={() => setSize((size) => size + 1)}
          >
            {isLoadingMore ? "loading..." : "load more"}
          </button>
        )}
      </div>

      <style jsx>{`
        .container {
          padding: 3em 0;
        }

        .actions {
            padding: 1em 0;
            display: flex;
            justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
