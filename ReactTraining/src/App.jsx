import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Challenge1 from './Components/Challenge1'
import Challenge2 from './Components/Challenge2'
import Challenge3 from './Components/Challenge3'
import Challenge4 from './Components/Challenge4'
import Challenge5 from './Components/Challenge5'
import Challenge6 from './Components/Challenge6'
import Test from './Components/Test'
import { Link } from 'react-router-dom';



function App(){

  return(
   
    <BrowserRouter>    
    <nav>
      <Link to="/test">
      <a>Test</a>
      </Link>
      <Link to="/challenge1">
      <a>Challenge1</a>
      </Link>      
      <Link to="/challenge2">
      <a>Challenge2</a>
      </Link>
      <Link to="/challenge3">
      <a>Challenge3</a>
      </Link>
      <Link to="/challenge4">
      <a>Challenge4</a>
      </Link>
      <Link to="/challenge5">
      <a>Challenge5</a>
      </Link>
      <Link to="/challenge6">
      <a>Challenge6</a>
      </Link>

    </nav>
    <Routes>
      <Route path='/challenge1' element={<Challenge1/>} />
      <Route path='/challenge2' element={<Challenge2/>} />
      <Route path='/challenge3' element={<Challenge3/>} />
      <Route path='/challenge4' element={<Challenge4/>} />
      <Route path='/challenge5' element={<Challenge5/>} />
      <Route path='/challenge6' element={<Challenge6/>} />
      <Route path='/test' element={<Test/>} />
    </Routes>    
    </BrowserRouter>
   
  )

}

export default App;