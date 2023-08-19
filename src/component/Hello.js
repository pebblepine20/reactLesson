import {useState} from 'react';
import World from './World';

export default function Hello(){

const [name,setName]=useState('Mike');
  return (
    <div>
      <h1 style={
        {
        color:'#f00',
        borderRight:'2px solid #000',
        marginBottom:'30px',
        opacity:0.5,
        }
      }>State</h1>
      <h2 id="name">{name}</h2>
      <button onClick = {()=>{
        setName(name === "Mike"?"Jane":"Mike"); 
        }}></button>
        <p>version 1</p>
    <World/>
    </div>    
  )
}