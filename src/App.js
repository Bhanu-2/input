
import { useState } from 'react';
import './App.css';
import InputField from './InputField';
import './InputField.css';

function App() {
  const [input,setInput]= useState('')
  const [errorMsg,setErrorMsg] =useState('')

  const setOnChangeValue=(e,type)=>{
    e.preventDefault();

    if(type=='text'){
      setInput(e?.target?.value)
      if(input.match('^[a-z]*$')){
        setErrorMsg('')
      }else{
        setErrorMsg('please enter valid input')
      }
    }

    if(type=='number'){
      setInput(e?.target?.value)
      if(input.match('^[0-9]*$')){
        setErrorMsg('')
      }else{
        setErrorMsg('please enter valid mobile number')
      }
    }
    

  }

  const getStyle =()=>{
    return 'container'
  }



  //readOnly ==> To make input field immmuatable
  //disabled ==> property to make input field disabled for user,if its is true user will not be able to enter anything
  //pattern ==> property to provide regex to input field
// checked ==> to keep radio field checked bydefault

  return (
    <div className="mainContainer">
      <h1>Input Field Project</h1>

      <InputField type = 'text' label='Text' readOnly={false} disabled={false} name ='text' onChange={(e)=>setOnChangeValue(e,'text')} style={getStyle} placeholder='enter Text' maxLength='6' value={input} errorMsg={errorMsg ||""}/>
      <InputField type = 'radio' label='Radio' checked={true} readOnly={false} disabled={false} name ='myRadio' onChange={(e)=>setOnChangeValue(e)} style={getStyle} /> 
      <InputField type = 'checkbox' label='Checkbox'  disabled={false} name ='checkbox'  onChange={(e)=>setOnChangeValue(e)} style={getStyle} />
      <InputField type = 'number' label='mobile number'  readOnly={false} disabled={false} name ='mobile number' onChange={(e)=>setOnChangeValue(e,'number')} style={getStyle} placeholder='enter number'/>
      <InputField type = 'password' label='Password' readOnly={false} disabled={false} name ='password' onChange={(e)=>setOnChangeValue(e)} style={getStyle} placeholder='enter password'/>

    </div>
  );
}

export default App;
