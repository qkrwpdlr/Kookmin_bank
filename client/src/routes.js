import Main from './routes/Main/Main.svelte'
import Market from "./routes/Market/Market.svelte"
import Seller from "./routes/Seller/Seller.svelte"
const routes = {
    '/': Main,
    "/market/:id": Market,
    "/market/:id/:sid": Seller
}

export default routes
