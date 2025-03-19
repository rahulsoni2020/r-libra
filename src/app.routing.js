import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Accordion from "./components/Accordion/Accordion";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import Carousel from "./components/Carousel/Carousel";
import CountDownTimer from "./components/CountDownTimer/CountDownTimer";
import Counter from "./components/Counter/Counter";
import DragListItem from "./components/DragListItem/DragListItem";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";
import UserListing from "./components/TripJack/TripJack";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";

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
    },
    {
        path: 'countdown-timer',
        element: <CountDownTimer/>
    },
    {
        path: 'counter',
        element: <Counter/>
    },
    {
        path: 'drag-list-item',
        element: <DragListItem/>
    },
    {
        path: 'drag-and-drop',
        element: <DragAndDrop/>
    },
    {
        path: 'trip-jack-users',
        element: <UserListing/>
    },
    {
        path: 'infinite-scroll',
        element: <InfiniteScroll/>
    }
];

const appRouter = createBrowserRouter(routerList);

export default appRouter;