import logo from './logo.svg';
import './App.css';
import Input from './Components/Input/Index';
import Product from './Pages/Product';

function App() {
  return (
    <div className="App">
<h1>I am learning</h1> 
<Input name="First Name"/>
<Input name="Last name"/>
<Product/>

    </div>
  );
}

export default App;
