import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const[mode,setMode]=useState('ligth');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{

    setAlert({
      message:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
      
    },3000);
  }

  const changeMode=()=>{
    if(mode==='ligth'){
      setMode('dark');
      document.body.style.backgroundColor='#2c283c'
      document.body.style.textContent='light';
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode('ligth');
      document.body.style.backgroundColor='white'
      document.body.style.textContent='black';
      showAlert("lighth mode is enabled","success");
    }
  }

  // const changeMade=()=>{
  //   if(mode==='ligth'){
  //     setMode('dark');
  //     document.body.style.backgroundColor="#B5F7F7";
  //     showAlert("Dark mode is enabled","Success")
  //   }
  //   else{
  //     document.body.style.backgroundColor='white'
  //     showAlert("lighth mode is enabled","success");
  //   }

  // }
  return (
    <>
      <Navbar  about="About-Us"  mode={mode} changeMode={changeMode}  />
      <Alert alert={alert} />
      <TextForm mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
