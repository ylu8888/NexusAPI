import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify";

const CreatePage = () => {

    const [name, setName] = useState("");
    const [description, setDescript] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const saveProduct = async(e) => {
        e.preventDefault(); //prevents page from refreshing
        if(name === "" || description === "" || date === "" || image === ""){
            toast.warn('Please fill out every input')
            return;
        }
        try {
            setIsLoading(true);
            //sending data to backend
            const response = await axios.post
            ("https://nexusapi.onrender.com/api/products",{
                name: name,
                description: description,
                date: date,
                image: image
            })

            toast.success(`Saved ${response.data.name} successfully`)
            setIsLoading(false);
            navigate("/")


        } catch (error){
            
            toast.error(error.message)
            setIsLoading(false);
        }
    }   


    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                Add an Artifact
            </h2>

            <form onSubmit={saveProduct}>
                <div className="space-y-2">
                    <div>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus: shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Name"/>
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" value={description} onChange={(e) => setDescript(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus: shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Description"/>
                    </div>
                    <div>
                        <label>Year</label>
                        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus: shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Year"/>
                    </div>
                    <div>
                        <label>Image</label>
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus: shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Image URL"/>
                    </div>

                    <div>
                        
                        {!isLoading && (<button className="block w-full mt-6 bg-gray-800 text-white rounded-sm px-4 py-2 font-bold hover:bg-gray-400 hover:cursor-pointer"> Save</button>)}
                       
                    </div>

                </div>
            </form>


        </div>

    )
}

export default CreatePage;