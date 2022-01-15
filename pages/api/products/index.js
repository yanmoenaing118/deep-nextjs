import { products } from "../../../data";
const fetcher = (url) =>
  fetch(url).then((res) => {
    return res.json();
  });
export default async function handler(req, res) {
  const { query } = req.query;

  res.status(200).json({
    query,
  });
}
