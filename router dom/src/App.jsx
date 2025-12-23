import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Blog from './pages/Blog'
import Text from './pages/Text'
import {Routes , Route, useNavigate} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import A1 from './pages/A1'
function App() {
  const value = false;
  const navigate = useNavigate()
  console.dir(navigate)
  return (
    <>
     <Navbar/>
     <button onClick={()=>navigate('/contact')}>click me</button>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}> 
      <Route path='a1'   element={<A1/>}/>
      </Route>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/text' element={value?<Text/>:<Navigate to={'/'} replace/>}/>
     </Routes>
    
    </>
  )
}

export default App
