import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function usePosts(userId) {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    fetcher
  );

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
}
