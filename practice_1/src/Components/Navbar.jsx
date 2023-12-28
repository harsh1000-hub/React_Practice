import React from 'react'
import styles from './Navbar.module.css'
import Navlist from './Navlist'
const metaData = ['Home','Projects','About','Search']
const darkMode = false
function Navbar() {
  function toogleButton(){
     console.log("Hey")
  }
  return (
    <ul className={styles.logo}>
     <li>Logo</li>
     <div className={styles.navbar}>
     <Navlist data={metaData} darkMode={false} popMode={toogleButton}/>
     </div>
    </ul>
  )
}

export default Navbar