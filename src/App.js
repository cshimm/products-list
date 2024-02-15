import './App.css';
import {ProductsList} from "./components/ProductsList";
import {products} from "./data/products";

function App() {
    return (
        <div className="App">
            <ProductsList products={products}/>
        </div>
    );
}

export default App;
