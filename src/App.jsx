import {Routes,Route, NavLink} from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
      </Routes>
     
      <NavLink to='/home'>home</NavLink>
      <br/>
      <NavLink to='/about'>about</NavLink>
    </>
  )
}

export default App
