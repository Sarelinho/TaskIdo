
import { Routes,Route } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';
import {Home, Tasks,Header} from './Components';

function App() {

  return (
    <>
    <ToastContainer theme='colored' position='top-right'/>
    <Header/>
      <Routes>
        <Route path="/" element =    {<Home/>} />
        <Route path="/tasks" element={<Tasks/>}/>
      </Routes>
      
    </>
    
 )
}

export default App
