const getDataFromApi = () => {
  const url = "https://rickandmortyapi.com/api/character";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const eachPersonData = data.results.map((info) => {
        return {
          id: info.id,
          name: info.name,
          species: info.species,
          status: info.status,
          gender:info.gender,
          image: info.image,
          origin: info.origin.name,
          origin2:info.origin.url,
          episode: info.episode.length,
        };
      });
     
      return eachPersonData
    });

 
};

export default getDataFromApi;
