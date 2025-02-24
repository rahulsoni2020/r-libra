import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import appRouter from './app.routing';
import {RouterProvider} from "react-router-dom"

function App() {
  return (
    <div>
      <Header/>
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </div>
  );
}

export default App;
