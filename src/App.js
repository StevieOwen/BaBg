import Chemises from'./pages/chemises'
import Home from'./pages/Home'
import Culottes from'./pages/culottes'
import Pantalons from'./pages/pantalon'
import Tshirt from './pages/t-shirt'
import Pull from'./pages/pull'
import NotFound from './pages/NotFound'; 
import {HashRouter as Router, Routes, Route}from 'react-router-dom'

function App() {
  return (
    <Router>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/chemises" element={<Chemises/>}/>
      <Route path="/pantalon" element={<Pantalons/>}/>
      <Route path="/pull" element={<Pull/>}/>
      <Route path="/t-shirt" element={<Tshirt/>}/>
      <Route path="/culottes" element={<Culottes/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    </Router> 

  );
}

export default App;
