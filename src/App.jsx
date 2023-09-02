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

    <nav className="bg-gray-900">

    
      <div className="container w-3/5 mx-auto flex justify-between items-center h-10">
       
          <Link to="/"><h2 className="text-white text-sm ">Home</h2></Link>
          <Link to="/"><h2 className="text-white text-sm ">About</h2></Link>
          <Link to="/"><h2 className="text-white text-sm ">Artifacts</h2></Link>
          <Link to="/create"><h2 className="text-white text-sm ">Contribute</h2></Link>

      </div>
      </nav>


      <nav className="bg-gray-950">
        <div className="mx-auto p-8 pt-7 pb-7">
          <Link to="/"><h2 className="text-white text-center text-4xl font-bold">The Odyssey Museum</h2></Link>
        </div>

        <div className="p-1">
        <h2 className="text-white text-center text-sm font-bold">Powered by NexusAPI</h2> 
        <p className="text-white text-center text-sm">All antiquities are acquired from the NexusAPI and displayed for public viewing. Visitors may create, edit, or delete any artifacts and their descriptions </p>
        </div>

        <div className="text-center mx-auto pl-14 pr-14 pt-2">
        <img src="https://www.metmuseum.org/-/media/images/about-the-met/collection-areas/greek-and-roman/greek_roman_marquee_2320x940.jpg?sc_lang=en&h=940&w=2320&la=en&hash=72F4B1C70CA737CE59B046E6737D2DA9" alt="odymuseum" />
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