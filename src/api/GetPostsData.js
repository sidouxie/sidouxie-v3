import axios from "axios";

const getPostsData = async () => {
  const result = await axios
    .get(`${process.env.REACT_APP_API_URL}/api/post`, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => response.data);
  return result;
};

export default getPostsData;
