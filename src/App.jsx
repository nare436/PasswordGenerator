import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState();
  const [char, setChar] = useState();
  const [password,setPassword] = useState("password");
  useEffect(()=>{
    let pass='';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(number) str += "1234567890";
    if(char) str += "!@#$%^&*-_=+?~";
    for(let i = 1; i<=length; i++){
      pass += str.charAt(Math.floor(Math.random()*str.length+1))
    }
    setPassword(pass);
  },[length,number,char,setPassword])
  return (
    <>
      <div class="w-110 h-40 bg-black flex-col items-center pt-3 pl-3 rounded-xl">
        <p class="pb-3 text-2xl">My Password Generator</p>
        <div class="w-100 h-10 bg-amber-50 rounded-xl pt-1.5 text-black">{password}</div>
        <div class="flex gap-2 pt-4 font-bold">
          <input type="range" min={6} max={18} value={length} onChange={(e)=>{
            setLength(e.target.value)
          }} /> Size({length})
          <input type="checkbox" onClick={()=>{
            setNumber((prev) => !prev)
          }}/>Numbers
          <input type="checkbox" onClick={()=>{
            setChar((prev) => !prev)
          }} />Characters
          </div>
      </div>
    </>
  )
}

export default App
