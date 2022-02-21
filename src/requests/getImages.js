import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((res) => {
        const imageResults = res.data.collection.items;
        const parsedImages = imageResults.filter((image) => {
          return image.data[0].media_type === "image";
        });

        return parsedImages.map((image) => {
          return image.links[0].href;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
