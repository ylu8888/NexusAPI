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
 
      <nav className="bg-gray-950 ">
        <div className="mx-auto p-8 pt-6 pb-6">
          <Link to="/"><h2 className="font-bold text-sky-500 text-center text-4xl font-serif">The Odyssey Museum</h2></Link>
        </div>

        <div className="p-1">
        <h2 className="text-cyan-500 text-center text-sm font-bold">Powered by NexusAPI</h2> 
        <p className="text-white text-center text-sm ">All antiquities are acquired from NexusAPI and displayed for public viewing. Visitors may create, edit, or delete any artifacts and their descriptions </p>
        </div>

        <div className="text-center mx-auto pl-4 pr-4 pt-2">
        <img src="https://www.metmuseum.org/-/media/images/about-the-met/collection-areas/greek-and-roman/greek_roman_marquee_2320x940.jpg?sc_lang=en&h=940&w=2320&la=en&hash=72F4B1C70CA737CE59B046E6737D2DA9" alt="odymuseum" />
        </div>

      </nav>

            <div>
                <Link to="/create" className="inline-block mt-4 shadow-md bg-gray-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-gray-600 hover:cursor-pointer">
                    Add Artifact
                </Link>
            </div>

        <section id="artifacts">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                {isLoading ? ( //first check if products are loading
                    <div className="text-white text-4x1 mx-auto"> Loading all the artifacts from the NexusAPI... this may take ~30 seconds, sorry!
                        </div> 
                ) : (
                    <>
                    {products.length > 0 ? ( 
                        //if there are products, map all of them in loop
                        <>
                            {
                                products.map((product, index) => {
                                    return (
                                        <Product key={index} product={product} getProducts={getProducts}/>
                                    )
                                })
                            }
                        </>
                    ) : ( 
                        <div>
                            There are no artifacts currently. Feel free to add some!
                        </div>
                    )}
                    </>
                )}
            </div>
            </section>

            <section id="about">
                <div className="mt-16 mb-16 p-12 bg-gray-800 mx-auto text-white w-4/5">
                <h2 className="text-sky-500 text-center text-2xl font-bold pb-7">About</h2> 
                <p className='text-center'>Welcome to the Odyssey Museum, a virtual treasure trove of human history and culture. Step into a world where the echoes of ancient and modern civilizations resonate through time. 

At the Odyssey, we offer a diverse collection of relics, sculptures, and archaeological finds from civilizations spanning the globe. From the weaponry of the ancient Greeks to the intricate craftsmanship of the Mayans.

Our mission is to bridge the gap between the modern world and the distant past, allowing you to explore human history, culture, and heritage. Immerse yourself in the beauty of ancient artifacts and gain a deeper understanding of the people who came before us.

Whether you're a history enthusiast, a student of archaeology, or simply curious about the wonders of the past, The Odyssey Museum offers a captivating and educational experience for all.
                </p>

                <br></br>

                <p className='text-center'> The Odyssey Museum began collecting antiquities in 2023 and built an important collection concentrating on ancient artifacts as well as modern. All artifacts are displayed online and visitors have the ability to add their own artifacts, or edit and delete existing ones. The Museum retrieves artifact data and executes CRUD Operations from the NexusAPI. </p>

                <br></br>

                <p className='text-center'>© 2023 Thanks for checking out the Odyssey Museum!</p>
                <p className='text-center'>Contact: yanglu91603@gmail.com</p>

                </div>

            </section>
            

        </div>
       
    )
}

export default HomePage;