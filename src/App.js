import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutPage from './components/AboutPage';
import React, { useState } from 'react'
import Alert from './components/Alert';



function App() {
  const aboutPage=()=>{
    document.getElementsByClassName('colorContainer')[0].style.display='none';
    document.getElementsByClassName('textFormContainer')[0].style.display='none';
    document.getElementsByClassName('textFormContainer')[1].style.display='none';
    document.getElementsByClassName('btnContainer')[0].style.display='none';
    document.getElementsByClassName('aboutPageContainer')[0].style.display='block';
   
   
  }
  const homePage =()=>{
   document.getElementsByClassName('colorContainer')[0].style.display='flex';
   document.getElementsByClassName('textFormContainer')[0].style.display='block';
   document.getElementsByClassName('textFormContainer')[1].style.display='block';
   document.getElementsByClassName('btnContainer')[0].style.display='flex';
   document.getElementsByClassName('aboutPageContainer')[0].style.display='none';
   
  }

  const [mode, setMode]= useState('light');
  const [theme, setTheme]= useState('white');
  const back_black =()=>{
     setMode('dark')
     setTheme('black')
     document.body.style.backgroundColor='#171616';
     document.getElementsByClassName('navbar')[0].style.backgroundColor='black';
     document.getElementById('myBox').style.backgroundColor='#171616';
     document.getElementById('myBox').style.border='2px solid white';
     for(let i=0;i<12;i++){
      document.getElementsByClassName('btn')[i].style.backgroundColor='black';
      document.getElementsByClassName('btn')[i].style.borderColor='white';
      }
  }
  const back_blue =()=>{
     setMode('dark')
     setTheme('blue')
     document.body.style.backgroundColor='#140c53';
     document.getElementsByClassName('navbar')[0].style.backgroundColor='#09042f';
     document.getElementById('myBox').style.backgroundColor='#140c53';
     document.getElementById('myBox').style.border='2px solid white';
     for(let i=0;i<12;i++){
      document.getElementsByClassName('btn')[i].style.backgroundColor='#09042f';
      document.getElementsByClassName('btn')[i].style.borderColor='white';
      }
  }
  const back_red =()=>{
    setMode('dark')
    setTheme('red')
    document.body.style.backgroundColor='#550404';
    document.getElementsByClassName('navbar')[0].style.backgroundColor='#390505';
    document.getElementById('myBox').style.backgroundColor='#550404';
    document.getElementById('myBox').style.border='2px solid white';
    for(let i=0;i<12;i++){
      document.getElementsByClassName('btn')[i].style.backgroundColor='#390505';
      document.getElementsByClassName('btn')[i].style.borderColor='white';
      }
  }
  const back_green =()=>{
    setMode('dark')
    setTheme('green')
    document.body.style.backgroundColor='green';
    document.getElementsByClassName('navbar')[0].style.backgroundColor='#023c0b';
    document.getElementById('myBox').style.backgroundColor='green';
    document.getElementById('myBox').style.border='2px solid white';
    for(let i=0;i<12;i++){
      document.getElementsByClassName('btn')[i].style.backgroundColor='#023c0b';
      document.getElementsByClassName('btn')[i].style.borderColor='white';
      }
  }
  const back_yellow =()=>{
    setMode('light')
    setTheme('yellow')
    document.body.style.backgroundColor='yellow';
    document.getElementsByClassName('navbar')[0].style.backgroundColor='#b0bf0b';
    document.getElementById('myBox').style.backgroundColor='yellow';
    document.getElementById('myBox').style.border='2px solid black';
    for(let i=0;i<12;i++){
      document.getElementsByClassName('btn')[i].style.backgroundColor='#b0bf0b';
      document.getElementsByClassName('btn')[i].style.borderColor='black';
      }
  }
  const back_white =()=>{
    setMode('light')
    setTheme('white')
    document.body.style.backgroundColor='white';
    document.getElementsByClassName('navbar')[0].style.backgroundColor='grey';
    document.getElementById('myBox').style.backgroundColor='white';
    document.getElementById('myBox').style.border='2px solid black';
    for(let i=0;i<12;i++){
    document.getElementsByClassName('btn')[i].style.backgroundColor='grey';
    document.getElementsByClassName('btn')[i].style.borderColor='black';
    }
  }
  
  const [alert,setAlert]= useState('Light Mode Enabled');
  setTimeout(() => {
    document.getElementById('alertContainer').style.visibility='hidden';
   
  }, 1500);
 const showAlert = (message)=>{
  document.getElementById('alertContainer').style.visibility='visible';
  
   setAlert(message);
   setTimeout(() => {
     hideAlertContainer()
   }, 1500);
 }
 const hideAlertContainer=()=>{
   document.getElementById('alertContainer').style.visibility='hidden';
  
 }

  
  return (
   <>
  
   <Navbar title='Recorrectext' mode={mode} homePage={homePage} aboutPage={aboutPage} back_black={back_black} back_blue={back_blue} back_red={back_red} back_green={back_green} back_yellow={back_yellow} back_white={back_white}  />
   <div className="container my-3">
     <Alert alert={alert}  />
   </div>
    
   <TextForm showAlert={showAlert} mode={mode} heading= 'Recorrectext- Word Counter | Character Counter | Case Converter | UpperCase to LowerCase | LowerCase to UpperCase | Capitalise Words | Capitalise Sentences | Remove Extra Spaces | Download Text File'/>

      <div >
      <AboutPage mode={mode} theme={theme}/>
     </div>
   </>
  );
}

export default App;
