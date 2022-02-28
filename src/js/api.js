export const getImagen = async () => {
  const apiKey = "0MpxhevrjliHsZfC5oIDKqRVwD5FjkBp";

  const respuesta = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
  );
  const {
    data
  } = await respuesta.json();

  const {
    url
  } = data.images.original;
  return url;
};