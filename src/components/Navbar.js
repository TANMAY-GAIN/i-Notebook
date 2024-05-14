import React , {useEffect}from 'react'
import {Link , useLocation} from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const Navbar = (props) => {

  const hanndleonclick=()=>{
    setTimeout(function(){
      window.location.reload(1);
   }, 500);
  }


  let history = useHistory();

const handlelogout=()=>{
  localStorage.removeItem('token');
  history.push('/login')
  setTimeout(function(){
    window.location.reload(1);
 }, 500); // Refresh every 5 seconds (5000 milliseconds)
   

 
 
}
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home" onClick={hanndleonclick}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" onClick={hanndleonclick}>About</Link>
        </li> 
      </ul>
      {!localStorage.getItem('token') ? <form className="d-flex" role="search"> 
      <Link className="btn btn-primary mx-2" to="/login" role="button" onClick={hanndleonclick}>Login</Link>
      <Link className="btn btn-primary mx-2" to="/singup" role="button" onClick={hanndleonclick}>SingUp</Link>
      </form>: <button onClick={handlelogout}  className='btn btn-primary' style={{backgroundColor :"transparent" , color:"#9f27ab" , borderColor :"#9f27ab"}} >Logout</button>
      }
    </div>
    
  </div>
</nav>
  )
}

export default Navbar
