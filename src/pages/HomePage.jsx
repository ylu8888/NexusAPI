import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {

    const [products, setProducts] = useState([]) //the product list is stored in an array
    const [isLoading, setIsLoading] = useState(false) // to check if products are loading properly

    //method for loading products from backend
    const getProducts = async () => {
        try{ 
            setIsLoading(true);
            //we use await axios b/c we want to wait until the data is loaded before skipping to the next step
            const response = await axios.get("http://localhost:3000/api/products");
            //when we get response back from server, set the products to data from backend
            console.log(response.data);
            setProducts(response.data);

        } catch (error){
            console.log(error);
        }
    }

    //useEffect is called when application is first loaded and getProducts method is called
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>Home Page!</div>
    )
}

export default HomePage;