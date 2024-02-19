
import { Routes,Route } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';  
import {Home, Tasks,Header,About} from './components';
import { Task } from './components/Task';

function App() {

  return (

    <>
    <ToastContainer theme='colored' position='top-right'/>
    <Header/>
      <Routes>
        <Route path="/" element =    {<Home/>} />
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Tasks/:id" element={<Task/>}/>

      </Routes>    
    </>  
    
 )
}

export default App
