import { store } from "./../store/index";
export const getQRUrl = async () => {
  return new Promise((resolve) => {
    const { account } = store;
    const targetURL = "http://localhost:3000/api/create";
    account.subscribe(async (key) => {
      const res = await fetch(`${targetURL}?key=${key}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      resolve(await res.json())
    });
  });
};
