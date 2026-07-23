import MyCounter from './Counter'
//import {Add} from './Math'
import First from './First'
import {Routes,Route} from 'react-router-dom'
// import Navbar from 'Navbar'
function App(){
  return(
    <>
    <Routes>
      <Route path ='/counter' element = {<MyCounter/>}/>
      <Route path ='/first' element = {<First/>}/>
      <Route path ="*" element= {<h1> Incorrect Route</h1>}/>

    </Routes>
    </>
  );
}

export default App;
