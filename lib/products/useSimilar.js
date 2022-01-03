import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useSimilar(slug) {
  const { data, error } = useSWR(
    `http://localhost:3000/similars/${slug}`,
    fetcher
  );

  return {
    data: data,
    error,
  };
}
