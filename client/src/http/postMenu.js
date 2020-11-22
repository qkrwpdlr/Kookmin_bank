export const postMenu = async (title, price) => {
  await fetch("http://localhost:3000/api/menu", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, price }),
  });
};
