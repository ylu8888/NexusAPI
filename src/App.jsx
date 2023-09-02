import {Routes, Route, Link} from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import EditPage from "./pages/EditPage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import odymuseum from './odymuseum.jpg'

const App = () => {
  return (
    <div>

    <nav className="bg-gray-900 ">

    
      <div className="container w-3/5 mx-auto flex justify-between items-center h-10">
       
          <Link to="/"><h2 className="text-white text-sm ">Home</h2></Link>
          <Link to="/"><h2 className="text-white text-sm ">About</h2></Link>
          <Link to="/"><h2 className="text-white text-sm ">Artifacts</h2></Link>
          <Link to="/create"><h2 className="text-white text-sm ">Contribute</h2></Link>

      </div>
      </nav>


      <div className="mx-3">
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="/create" element={<CreatePage/>}></Route>
          <Route path="/edit/:id" element={<EditPage/>}></Route>
        </Routes>
      </div>

      <ToastContainer />
    
    </div>
  );
}

export default App;