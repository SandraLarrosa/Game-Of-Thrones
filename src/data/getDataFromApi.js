
const ENDPOINT = 'https://thronesapi.com/api/v2/Characters/';

const getDataFromApi = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
/*       return data.map((characters) => {
        return {
          id: characters.character.id,
          name: characters.character.name,
          image: characters.character.image.medium,
          rating: characters.character.rating.average,
          status: characters.character.status
        } */
/*       }) */
    });
}

export default getDataFromApi;
