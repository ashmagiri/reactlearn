import {useState, useEffect} from "react";
import axios from "axios"; 
import { BASE_URL } from "../../Constants";
const tableStyle = {
    border: "1px Solid"
}
function Product(){ 
    const url = BASE_URL + "products/";
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(url).then((response) => {
            setProducts(response.data)
        });
    }, [])
    return (
        <div>
            <h1>Products List</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th>Prodct Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product) => {
                    return <tr><td>{product.name}</td><td>{product.price}</td></tr>
                })}
                </tbody>
            </table>
        </div>
    )
}
export default Product; 