export const API_URL = "https://rickandmortyapi.com/api/";

export const API = {
  characters: `${API_URL}character`,
  locations: `${API_URL}location`,
  character: (id: number) => `${API_URL}character/${id}`,
};
