
import './App.scss';
import {RouterProvider} from 'react-router-dom'
import { Routes } from './routes/routes';


function App() {
  const routes = Routes()
  return (
  <RouterProvider router={routes} fallbackElement={<h1>Loading...</h1>}/>
  );
}

export default App;
