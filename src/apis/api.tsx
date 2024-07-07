// To get a list of all the characters use this URL: https://disney_api.nomadcoders.workers.dev/characters

// To get a character detail use this URL: https://disney_api.nomadcoders.workers.dev/characters/:id

const BASE_URL = "https://disney_api.nomadcoders.workers.dev";

export const getCharactersAll = () => {
  return fetch(`${BASE_URL}/characters`).then((response) => response.json());
};

export const getCharacterById = (id: string | undefined) => {
  return fetch(`${BASE_URL}/characters/${id}`).then((response) =>
    response.json()
  );
};
