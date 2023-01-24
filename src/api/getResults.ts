import axios from "./axios";

export const getResults = async ({
  link,
  lang,
  twitter,
  blog,
}: {
  link: string;
  lang: string;
  twitter: boolean;
  blog: boolean;
}): Promise<string> => {
  console.log(lang);
  let finalLink = `/audio?ytLink=${link}&lang=${lang}&twitter=${twitter}&blog=${blog}`;
  const res = await axios.get(finalLink);
  return res.data.data;
};

export const getOnly = async (): Promise<Array<string>> => {
  return [];
};
