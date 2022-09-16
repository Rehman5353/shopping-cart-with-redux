
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
           <BrowserRouter>
           <Routes>
            <Route  path='/' element={<Home></Home>}></Route>
            <Route  path='/cart' element={<Cart></Cart>}></Route>
           </Routes>
           </BrowserRouter>
        
    </div>
  );
}

export default App;
