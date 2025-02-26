import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Accordion from "./components/Accordion/Accordion";
import AnalogClock from "./components/AnalogClock/AnalogClock";

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
    }
]

const appRouter = createBrowserRouter(routerList);

export default appRouter;