import axios from "./Axios";

export const getResults = async (link: string): Promise<string> => {
  if (link === "") return "Hello word";
  if (link === "hola k ase") return "hola k ase";
  const res = await axios.get(`/audio?ytLink=${link}`);
  return res.data.data;
};

export const getOnly = async (): Promise<Array<string>> => {
  return [];
};
