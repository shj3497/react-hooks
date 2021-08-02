import React from 'react'
import classes from './App.module.css';
import UseForm01 from './components/useForm/useForm01'
import UseForm02 from './components/useForm/useForm02'
import UseForm03 from './components/useForm/useForm03';
import UseForm04 from './components/useForm/useForm04';

const App = () => {
  return (
    <div className={classes.container}>
      <UseForm01 />
      <UseForm02 />
      <UseForm03 />
      <UseForm04 />
    </div>
  )
}

export default App
