export const getSearch = async (query) => {
  const response = await fetch(
    `${process.env.REACT_APP_DEEZER_BASE_URL_DEV}/search?search=${query}`
  );
  const result = await response.json();
  // console.log(result);
  return result;
};

export const getAlbum = async (albumId) => {
  const response = await fetch(
    `${process.env.REACT_APP_DEEZER_BASE_URL_DEV}/album?albumId=${albumId}`
  );
  const result = await response.json();
  // console.log(result);
  return result;
};

export const getArtist = async (artistId) => {
  const response = await fetch(
    `${process.env.REACT_APP_DEEZER_BASE_URL_DEV}/artist?artistId=${artistId}`
  );
  const result = await response.json();
  // console.log(result);
  return result;
};
