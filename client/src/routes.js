import Admin from "./pages/Admin";
import {ADMIN_ROUTE, FAVOURITES_ROUTE, SUPERHERO_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Favourites from "./pages/Favourites";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import SuperheroPage from "./pages/SuperheroPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: FAVOURITES_ROUTE,
        Component: Favourites
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: SUPERHERO_ROUTE + '/:id',
        Component: SuperheroPage
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: FAVOURITES_ROUTE,
        Component: Favourites
    }
]
