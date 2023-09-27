import {useParams, useNavigate} from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from "axios"
import {toast} from "react-toastify"




const EditPage = () => {
    let {id} = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        date: "",
        image: ""
    })

    const getProduct = async() => {
        setIsLoading(true)
        try{
            const response = await axios.get(`https://nexusapi.onrender.com/api/products/${id}`)
            setProduct({ 
                name: response.data.name,
                description: response.data.description,
                date: response.data.date,
                image: response.data.image
             })

             setIsLoading(false);

        } catch(error){
            setIsLoading(false);
            toast.error(error.message);
        }

       
    }

    const updateProduct = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.put(`https://nexusapi.onrender.com/api/products/${id}`, product);
            toast.success("Updated artifact successfully")
            navigate("/");

        } catch (error){
            setIsLoading(false);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getProduct();
    },[])

    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                Update Artifact: {product.name}
            </h2>

            {isLoading ? ("Loading"): (
                <>
                <form onSubmit={updateProduct}>
                <div className="space-y-2">
                    <div>
                        <label>Name</label>
                        <input type="text" value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus: shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Name"/>
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus: shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Description"/>
                    </div>
                    <div>
                        <label>Year</label>
                        <input type="text" value={product.date} onChange={(e) => setProduct({...product, date: e.target.value})} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus: shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Year"/>
                    </div>
                    <div>
                        <label>Image</label>
                        <input type="text" value={product.image} onChange={(e) => setProduct({...product, image: e.target.value})} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus: shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Image URL"/>
                    </div>

                    <div>
                        
                        {!isLoading && (<button className="block w-full mt-6 bg-gray-800 text-white rounded-sm px-4 py-2 font-bold hover:bg-gray-400 hover:cursor-pointer"> Update</button>)}
                       
                    </div>

                </div>
            </form>
                </>
            )}
            


        </div>
    )
}

export default EditPage;