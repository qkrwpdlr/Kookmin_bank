import Main from "./routes/Main/Main.svelte";
import Market from "./routes/Market/Market.svelte";
import Seller from "./routes/Seller/Seller.svelte";
import Admin from "./routes/Admin/Admin.svelte";
const routes = {
  "/": Main,
  "/market/:id": Market,
  "/market/:id/:sid": Seller,
  "/admin": Admin,
};

export default routes;
