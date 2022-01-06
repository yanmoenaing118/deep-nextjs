async function getFetch(url) {
  return fetch(`${process.env.API_URL}${url}`).then((res) => res.json());
}

export default async function handler(req, res) {
  const data = await getFetch("/albums");

  if (data) {
    return res.status(200).json(data);
  }

  return res.status(505).json({
    error: true,
    msg: "Internal server ERROR :(",
  });
}
