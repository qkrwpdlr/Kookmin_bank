export const getMenu = async () => {
    const res = await fetch(`http://localhost:3000/api/menu`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json()
};
