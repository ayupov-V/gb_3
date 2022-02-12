import React, { Fragment } from 'react'
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import  './App.css';


const name = 'Vladislav';
const surname = 'name';

function App() {
  return (
    <Fragment>
      <h2 className={"header"} > Домашнее задание №1 </h2>
      <Button name={name} surname={surname}/>
      <Input />
    </Fragment>

  )
}

export default App;