import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.section}>
      <ul className={classes.listContainer}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/useForm">useForm</Link>
          <ul className={classes.inlineList}>
            <li><Link to="/useForm/useForm01">useForm01</Link></li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
