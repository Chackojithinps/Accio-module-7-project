import './App.css';
import Banner from './Components/Banner/Banner';
import Cart5 from './Components/Context/CartContext';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';

function App() {
  return (
     <Cart5>
       
       <Header/>
       <Banner/>
       <Products/>
       <Footer/>
     </Cart5>
  );
}

export default App;
