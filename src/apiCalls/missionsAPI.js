const apiURL = 'https://api.spacexdata.com/v3/missions';
const fetchMissions = async () => {
  const data = await fetch(apiURL)
    .then((responce) => responce.json());
  return data;
};

export default fetchMissions;
