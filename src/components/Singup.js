import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import image1 from './image1.jpeg'; // Import the image
const Singup = (props) => {

  const [credentitials, setCredentitials] = useState({name:"" , email : "" , password: "" , cpassword:""})
  let history = useHistory();
  const handleSubmit =async(e)=>{
      e.preventDefault();
      const {name , email, password } = credentitials;
      const response = await fetch("http://localhost:5000/api/auth/CreateUser",{
        
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name,email,password})
      });
      const json = await response.json();
      console.log(json);
      if (json.sucess){
          localStorage.setItem('token',json.authtoken);
          history.push("/home")
          setTimeout(function(){
            window.location.reload(1);
         }, 1500); // Refresh every 5 seconds (5000 milliseconds)
          props.showAlert("Account Created Sucessfully " ,"info")

      }
      else{
          props.showAlert("Invalid Credentitials " ,"danger")
      }
  }

  const onChange = (e)=>{
      setCredentitials({...credentitials, [e.target.name] : e.target.value})
      
  }
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={image1} className="img-fluid" alt="Signup " style={{ width: "580px", height: "580px" ,marginRight: "30px",marginTop: "30px" }}  />
    <div className="mt-3">
      <h2 className="mb-6">Create an Account to continue to iNotebook</h2>
    <form onSubmit={handleSubmit} >
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name"  aria-describedby="emailHelp" name="name" onChange={onChange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email"  aria-describedby="emailHelp" name="email" onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="Password1" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cPassword1" className="form-label">Confrom Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange}/>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
    I have read the Term and Conditions
  </label>
</div>
  <button type="submit" className="btn btn-primary"style={{ width: "800px", height: "50px" ,marginTop: "30px", marginBottom : "30px" }}>Submit</button>
  <h6>Have an Account ?   <a href="http://localhost:3000/login">login</a></h6>
  
</form>
    </div>
    
    </div>
  )
}


export default Singup
