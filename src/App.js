
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ErrorElement from './components/ErrorElement/ErrorElement';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import { addToCartItem } from './components/Loader/Loader';
import Orders from './components/Orders/Orders';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          errorElement:<ErrorElement></ErrorElement>
        },
        {
          path:'home',
          element:<Home></Home>,
         
        },
        {
          path:'/orders',
          loader: ()=> addToCartItem(),
          element:<Orders></Orders>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'*',
          element:<h1 className='text-2xl mt-24 text-center'>Page Not found <br />404 </h1>
        }
      ]
    },
   
  ])
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
