//import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

// import {
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const changeMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor =  '#28334d';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light') 
      document.body.style.backgroundColor = '#f0f8ff';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  return (
    <>

      <Navbar title="TextUtils" second="About" mode={mode} toggleMode={changeMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
        <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
            {/* <Routes> */}
              {/* <Route path="/about" element={<About/>} />
              <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />
            </Routes> */}
          
      </div>
    </>
  );
}

export default App;


