import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Challenge1 from './Components/Challenge1'
import Challenge2 from './Components/Challenge2';
import { Link } from 'react-router-dom';



function App(){

  return(
    <BrowserRouter>
    <nav>
      <Link to="/challenge1">
      <a>Challenge1</a>
      </Link>      
      <Link to="/challenge2">
      <a>Challenge2</a>
      </Link>
    </nav>
    <Routes>
      <Route path='/challenge1' element={<Challenge1/>} />
      <Route path='/challenge2' element={<Challenge2/>} />
    </Routes>    
    </BrowserRouter>
  )

}

export default App;