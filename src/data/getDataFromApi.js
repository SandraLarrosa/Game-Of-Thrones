
const ENDPOINT = 'http://api.tvmaze.com/search/shows?q=girls';

const getDataFromApi = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data.map((shows) => {
        
        if (!shows.show.image) {
          shows.show.image = {}
        }
        return {
          id: shows.show.id,
          name: shows.show.name,
          image: shows.show.image.medium,
          rating: shows.show.rating.average,
          status: shows.show.status
        }
      })
    });
}

export default getDataFromApi;
