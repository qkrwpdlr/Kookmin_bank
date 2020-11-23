import { store } from "./../store/index";
export const getQRUrl = async (price) => {
  return new Promise((resolve) => {
    const { account } = store;
    const targetURL = "http://localhost:3000/api/create";
    account.subscribe(async (key) => {
      const res = await fetch(`${targetURL}?key=${key}&price=${price}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      resolve(await res.json());
    });
  });
};
