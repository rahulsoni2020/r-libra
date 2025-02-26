import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Accordion from "./components/Accordion/Accordion";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import Carousel from "./components/Carousel/Carousel";

const routerList = [
    {
        path: '',
        element: <Dashboard/>
    },{
        path: 'accordion',
        element: <Accordion/>
    },{
        path: 'analog-clock',
        element: <AnalogClock/>
    },{
        path: 'image-carousel',
        element: <Carousel/>
    },{
        path: 'r-libra',
        element: <Dashboard/>
    }
]

const appRouter = createBrowserRouter(routerList);

export default appRouter;