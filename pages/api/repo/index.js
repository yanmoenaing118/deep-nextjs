const fetcher = (url) =>
  fetch(url).then((res) => {
    return res.json();
  });

export default async function handle(req, res) {

    const { query } = req;
    let page = 1;

    if(query.page) page = query.page;

    console.log("API query", query);
    
  const URL = `https://api.github.com/users/yanmoenaing118/repos?per_page=5&page=${page}`;

  const result = await fetcher(URL);

  res.status(200).json(_mutateData(result))
}


function _mutateData(result) {
    return result.map(data => {
        return {
            name: data.name
        }
    })
}

function _getQueryString(queryObject) {
    let queryString = "?";
  
    if(queryObject.page) {
      queryString += `page=${queryObject.page}`
    }

    return queryString;
}