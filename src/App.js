
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Provider }  from 'react-redux';
import { Home } from './pages/Home';
import { Navbars } from './components/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';

function App() {
  return (
    <>
       <Provider  store={store}>
           <BrowserRouter>
           <Navbars/>
           <Routes>
           <Route  path='/' element={<Home/>}></Route>
           <Route  path='cart' element={<Cart/>}></Route>
           </Routes>
           </BrowserRouter>
       </Provider>
        
    </>
  );
}

export default App;
