import {Routes, Route, Link} from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import EditPage from "./pages/EditPage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <nav className="bg-gray-950">
        <div className="mx-auto p-6">
          <Link to="/"><h2 className="text-white text-center text-4xl font-bold">The Odyssey Museum</h2></Link>
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