
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import OrderReview from './components/OrderReview/OrderReview';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderReview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/granda' element={<Grandpa></Grandpa>}></Route>
        
      </Routes>
     
    </div>
  );
}

export default App;
