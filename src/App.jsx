
import { Routes,Route } from 'react-router-dom';

import {Home, Tasks,Header} from './Components';

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element =    {<Home/>} />
        <Route path="/tasks" element={<Tasks/>}/>
      </Routes>
      
    </>
    
 )
}

export default App
