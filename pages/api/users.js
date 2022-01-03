import { getFetch } from "../../lib/fetcher";

export default async function handler(req, res) {
  const users = await getFetch("/users");

  if (users) {
    return res.status(200).json(users);
  }
  res.status(404).json({
    msg: "Not found",
  });
}
