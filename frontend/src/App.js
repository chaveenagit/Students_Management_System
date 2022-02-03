import './App.css';
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import AllStudents from './components/AllStudents';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  return (
    
      <div>
      <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/add" element={<AddStudent />}/>
          <Route path="/" element={<AllStudents />}/>
        </Routes>
      </div>
    </Router>
        
        
      </div>
    
  );
}

export default App;
