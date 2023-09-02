import {Routes, Route, Link} from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import EditPage from "./pages/EditPage"

const App = () => {
  return (
    <div>
      <nav className="bg-gray-950">
        <div className="container p-6">
          <Link to="/"><h2 className="text-white text-4xl font-bold">The Odyssey Museum</h2></Link>
        </div>

      </nav>

      <div className="mx-3">
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="/create" element={<CreatePage/>}></Route>
          <Route path="/edit" element={<EditPage/>}></Route>
        </Routes>
      </div>
    
    </div>
  );
}

export default App;