import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Login = (props) => {
    const [credentitials, setCredentitials] = useState({email : "" , password: ""})
    let history = useHistory();
    const handleSubmit =async(e)=>{
        e.preventDefault();
        
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email : credentitials.email, password : credentitials.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.sucess){
            localStorage.setItem('token' , json);
            history.push("/home")
            props.showAlert("Logged In Sucessfully" ,"info") 
            setTimeout(function(){
              window.location.reload(1);
           }, 1500); // Refresh every 5 seconds (5000 milliseconds)
            
        }
        else{
          props.showAlert("Invalid Details " ,"danger")
        }
    }

    const onChange = (e)=>{
        setCredentitials({...credentitials, [e.target.name] : e.target.value})
        
    }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      
     <h4 style={{ marginBottom: "10px" }}>Login</h4>
     <h6>Sign in on the internal platfrom</h6>
     <div style={{ display: "flex", justifyContent: "space-between", width: "600px", marginBottom: "18px",marginTop: "10px" }}>
     
     <button type="button" className="btn btn-primary" style={{ width: "calc(50% - 5px)" }}>Login with Facebook</button>
     <button type="button" className="btn btn-danger" style={{ width: "calc(50% - 5px)" }}>Login with Google</button>
    
     </div>
     <h6>or login with username and password</h6>
      <form style={{ width:"600px" }}onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentitials.email}
            id="email"
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentitials.password}
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width:"600px" , marginBottom : "10px",marginTop : "10px" }}>
          Submit
        </button>
        <h6>Don't have an Account ?   <a href="http://localhost:3000/singup">register</a></h6>
      </form>
    </div>
  );
};

export default Login;
