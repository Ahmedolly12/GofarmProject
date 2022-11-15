import logo from './logo.svg';
import './App.css';
import Header from "././Components/Header"
import ProductPage from './Components/Pages/ProductPage'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
       <Header/>
       <ProductPage/>
    </div>
  );
}

export default App;
