// import axios from "axios";

import { worksPostsData } from "../__mock__/WorkPostsData";

// const getPostsData = async () => {
//   const result = await axios
//     .get(`${process.env.REACT_APP_API_URL}/api/post`, {
//       headers: {
//         "content-type": "application/json",
//       },
//     })
//     .then((response) => response.data);
//   // .catch((err) => err.response.data);
//   return result;
// };

const getPostsData = async () => {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(worksPostsData);
      reject(console.error("There is some errors to get Data!"));
    }, 1000);
  });

  return result;
};

export default getPostsData;
