import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product"
import {Routes, Route, Link} from "react-router-dom"

const HomePage = () => {

    const [products, setProducts] = useState([]) //the product list is stored in an array
    const [isLoading, setIsLoading] = useState(false) // to check if products are loading properly

    //method for loading products from backend
    const getProducts = async () => {
        try{ 
            setIsLoading(true);
            //we use await axios b/c we want to wait until the data is loaded before skipping to the next step
            const response = await axios.get("https://nexusapi.onrender.com/api/products");
            //when we get response back from server, set the products to data from backend
            console.log(response.data);
            setProducts(response.data);
            setIsLoading(false);

        } catch (error){
            console.log(error);
        }
    }

    //useEffect is called when application is first loaded and getProducts method is called
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <div>
                <Link to="/create" className="inline-block mt-4 shadow-md bg-gray-900 text-white rounded-sm px-4 py-2 font-bold hover:bg-gray-600 hover:cursor-pointer">
                    Add Artifact
                </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                {isLoading ? ( //first check if products are loading
                    <div className="text-white text-3xl mx-auto"> Loading the artifacts... 
                        </div> 
                ) : (
                    <>
                    {products.length > 0 ? ( 
                        //if there are products, map all of them in loop
                        <>
                            {
                                products.map((product, index) => {
                                    return (
                                        <Product key={index} product={product}/>
                                    )
                                })
                            }
                        </>
                    ) : ( 
                        <div>
                            There are no products!
                        </div>
                    )}
                    </>
                )}
            </div>
        </div>
    )
}

export default HomePage;