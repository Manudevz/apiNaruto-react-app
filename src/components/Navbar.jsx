import { NavLink } from "react-router-dom"
import '../index.css'

export const Navbar = () => {

  const styles = {
    nav: {
      backgroundColor: 'lightblue',
      padding: '10px',
    },
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'row'
    },
    li: {
      marginRight: '20px'
    },
    a: {
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '16px'
    }
  }
  return (
    <nav style={styles.nav}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>logo</div>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <NavLink to="/" style={styles.a} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "pending"}>Home</NavLink>
        </li>
        <li style={styles.li}>
          <NavLink to="/detail" style={styles.a} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "pending"}>detail</NavLink>
        </li>
      </ul>
     </div>
  </nav>
  )
}
