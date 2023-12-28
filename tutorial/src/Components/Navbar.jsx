import React from 'react'
import styles from './Navbar.module.css'
import NavList from './NavList'


const metaData = ['Home','Projects','About']
const darkMode = false
function Navbar() {
    // Line 10 denote event handler
    function toogleDarkMode(){
        alert("DarkMode ON")
    }
  return (
        <ul className={styles.navbar}> 
        <li>Logo</li>
        <div className={styles.items}> 
        { /*Line 18 denote make a props*/ }
        <NavList data={metaData} darkMode={false} popUpMode={toogleDarkMode}/>
         </div>
        </ul>
  )
}

export default Navbar


// props = transfer data from one component to other component