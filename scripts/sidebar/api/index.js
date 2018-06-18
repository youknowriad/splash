const SPLASH_API_KEY =
  "37fb1728bc4d17ee3bd799a37941e9dd031e8889e0ae316a4ffc461c13b78265";

// TODO: production key ?
const GIPHY_API_KEY = "eZzJ2ixv8CTOOE9yvR0L4x9P0IUuG8gq";

const toJson = response => response.json();


/**
 * UNSPLASH
 */
export const getPhotos = (page = 1) =>
  window
    .fetch(
      `https://api.unsplash.com/photos/?client_id=${SPLASH_API_KEY}&per_page=20&page=${page}&order_by=latest`
    )
    .then(toJson);

export const searchPhotos = (search, page = 1) =>
  window
    .fetch(
      `https://api.unsplash.com/search/photos/?client_id=${SPLASH_API_KEY}&per_page=20&page=${page}&query=${search}`
    )
    .then(toJson);

export const downloadPhoto = (url, name, options) =>
  window
    .fetch(`${url}?client_id=${clientId}`)
    .then(toJson)
    .then(({ url }) => {
      return new Promise(resolve => {
        const img = new window.Image();
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        img.onload = function() {
          const maxWidthHeight = 2000;
          const ratio = this.naturalWidth / this.naturalHeight;
          const width = ratio > 1 ? maxWidthHeight : maxWidthHeight * ratio;
          const height = ratio < 1 ? maxWidthHeight : maxWidthHeight / ratio;
          c.width = width;
          c.height = height;
          ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
          c.toBlob(resolve, "image/jpeg", 0.75);
        };
        img.crossOrigin = "";
        img.src = url;
      });
    })
    .then(blob => new window.File([blob], name + ".jpg", options));

/**
 * GIPHY.com
 */
export const getJifs = (offset = 0) =>
 window
  .fetch(
   `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&offset=${offset}&limit=5&rating=G&sort=relevant`
  )
  .then(toJson);


export const searchJifs = (search, offset = 0) =>
 window
  .fetch(
   `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${search}&offset=${offset}&limit=5&rating=G&sort=relevant`
  )
  .then(toJson);