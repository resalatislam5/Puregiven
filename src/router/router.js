import CausesDetails from "../pages/CausesDetails/CausesDetails";
import CausesMain from "../pages/CausesList/CausesMain";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/causes-list',
                element: <CausesMain />
            },
            {
                path: '/causes-details',
                element: <CausesDetails />
            },
        ]
    }
])