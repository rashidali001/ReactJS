import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Challenge1 from './Components/Challenge1'
import { Link } from 'react-router-dom';



function App(){

  return(
    <BrowserRouter>
    <nav>
      <Link to="/challenge1">
      <a>Challenge1</a>
      </Link>      
    </nav>
    <Routes>
      <Route path='/Challenge1' element={<Challenge1/>} />
    </Routes>    
    </BrowserRouter>
  )

}

export default App;