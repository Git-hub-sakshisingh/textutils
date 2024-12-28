import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{ useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [dmode, setDmode] = useState('darkgreen');

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
          setAlert(null);
    },1500);
  }

  const toggleMode = () =>{
    if(mode==='light')
    {
      setMode('dark');
      // if(mode==='dark' && dmode==='darkgreen')
      // {
      //   setDmode('purple');
      //   document.body.style.backgroundColor ="#800080";
      //   showAlert(" Dark mode with purple color has been enabled","success");

      // }
      // else if(mode==='dark' && dmode==='purple'){
      //   setDmode('green');
      //   document.body.style.backgroundColor ="#2E8B57";
      //   showAlert(" Dark mode with green color has been enabled","success");
      // }
      // else{
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled","success");
      document.title ='TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils Now';
      // },1500);
      // }
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled","success");
       document.title ='TextUtils - Light Mode';
    }
  }

  return (
   <>
   <Router>
   <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
    {/* /users -->Component1                                            /users/home--> Component 2 */}
           <Route exact path="/about" element={<About />} /> 
           <Route exact path="/" element=
          {<TextForm heading="Enter the text to analyze below"  mode={mode} showAlert={showAlert} dmode={dmode} />}
          />
      </Routes>
    </div>
    </Router>
   </>
  );
}

export default App;
