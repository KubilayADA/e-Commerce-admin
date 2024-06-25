import './App.css'
import Navbar from "./components/Navbar" 
import Footer from "./components/Footer" 
import Sidebar from "./components/Sidebar" 

function App() {

  return (
    <div>
      <div>
      <Navbar/>
      </div>

      <div>
        <Sidebar/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}
export default App