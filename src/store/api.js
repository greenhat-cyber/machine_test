import axios from "axios";

const actionhandler = (payload) => {
  return new Promise((resolve, reject) => {
    axios({
      ...payload,
      baseURL: import.meta.env.VITE_BASE_URL,
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response);
        } else {
          console.log("Failure:", response);
          reject(response);
        }
      })
      .catch((err) => {
        console.log("Failure:", err);
        reject(err);
      });
  });
};

const api = {
  actionhandler,
  //dishes
  dishListURL: "/api/resto-cafe",
};

export default api;
