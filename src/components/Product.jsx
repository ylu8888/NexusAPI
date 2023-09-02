import {Link} from "react-router-dom"
import axios from "axios"
import {toast} from "react-toastify"
import Swal from "sweetalert2"

const Product = ({product, getProducts}) => {
   
    const deleteProduct = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure you want to delete this artifact?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'lightgreen',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        })
        if(result.isConfirmed){
            try{
                await axios.delete(`https://nexusapi.onrender.com/api/products/${id}`)
                toast.success("Deleted artifact successfully")
                getProducts();
            } catch(error){
                toast.error("Failed to delete artifact")
            }
        }
        
    }

    return (
        <div className="bg-gray-950 rounded shadow-lg overflow-hidden">
            <img src={product.image} className="w-full h-80 object-cover" />
            <div className="px-4 pt-2 pb-4">
                <h2 className="text font-semibold text-white">{product.name}</h2>
                <div className="text-sm text-white">Description: {product.description}</div>
                <div className="text-sm text-white">Year: {product.date}</div>

                <div className="mt-2 flex gap-4">
                <Link to={`/edit/${product._id}`} className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"> Edit</Link>
                <button onClick={()=>deleteProduct(product._id)}className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"> Delete</button>
            </div>

            </div>

           
            
        </div>
    )
}

export default Product;