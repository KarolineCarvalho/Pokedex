export const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const multiFetcher = (...urls: string[]) => {
  return Promise.all(urls.map((url) => fetcher(url)));
};
