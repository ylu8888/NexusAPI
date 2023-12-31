import {Routes, Route, Link} from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import EditPage from "./pages/EditPage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';


const App = () => {

  const [scrollToAbout, setScrollToAbout] = useState(false);

  useEffect(() => {
    if (scrollToAbout) {
      // When scrollToAbout is true, scroll to the 'about' section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Reset scrollToAbout
      setScrollToAbout(false);
    }
  }, [scrollToAbout]);

  return (
    <div>

    <nav className="bg-neutral-900 ">

    
      <div className="text-white container w-3/5 mx-auto flex justify-between items-center h-10 ">
       
          <Link to="/"><h2 className="text-white text-sm hover:text-orange-400 items-center rounded-2xl font-mono">Home</h2></Link>
          <Link to="/about" onClick={() => setScrollToAbout(true)} className="text-sm rounded-2xl hover:text-orange-400 font-mono">About</Link> 
          <Link to="/create"><h2 className="text-white text-sm rounded-2xl hover:text-orange-400 font-mono">Contribute</h2></Link>
          <a href="mailto:yanglu91603@gmail.com"><h2 className="text-white text-sm rounded-2xl hover:text-orange-400 font-mono">Contact</h2></a>
          

      </div>
      </nav>


      <div className="mx-3">
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="/create" element={<CreatePage/>}></Route>
          <Route path="/edit/:id" element={<EditPage/>}></Route>
          <Route path="/about" element={<HomePage/>}></Route>
         
        </Routes>
      </div>

      <ToastContainer />
    
    </div>
  );
}

export default App;