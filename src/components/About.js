import React from 'react'
import image4 from './image4.jpeg'; // Import the image
import image5 from './image5.jpeg'; // Import the image
import image6 from './image6.jpeg'; // Import the image
import { Link } from "react-router-dom";
const About = () => {

  const handleonClick=()=>{
    setTimeout(function(){
      window.location.reload(1);
   }, 500); // Refresh every 5 seconds (5000 milliseconds)
  }

  return (
    <div>
    <div style={{ display: "flex", alignItems: "center" }}> 
      <div>
      <h1>Make something<span className="i" style={{color : "#9f27ab"}}> Awesome</span></h1>
      <h5 style={{marginTop :"10px" , marginBottom:'10px' , fontWeight :"lighter"}}>iNotebook is made from the pain of writing all the thngs in notebook which is very 
        hectic,So we mad an online web platfrom where you can create,edit,upload,delete your notes/
        information privately and securely without any disturbance. you can also access your notes
        anywhere in your world,at anytime. So don't torget to create note because create anything is 
        always impoprtant
      </h5>
      <Link to="/CreateNote"><button onClick={handleonClick} style={{marginTop:"30px", backgroundColor:"#9f27ab", color:"white", height:"40px", width:"150px"}}>Create New Note</button></Link>
      </div>
    <img src={image4} className="img-fluid" alt="Signup " style={{ width: "400px", height: "400px" ,marginRight: "30px",marginTop: "30px" }} />
    </div>

    <div style={{ display: "flex", alignItems: "center" }}> 
    <img src={image5} className="img-fluid" alt="Signup " style={{ width: "400px", height: "400px" ,marginRight: "30px",marginTop: "30px" }} />
      <div>
      <h1>Powering the<span className="i" style={{color : "#9f27ab"}}> internet's visuals</span></h1>
      <h5 style={{marginTop :"10px" , marginBottom:'10px' , fontWeight :"lighter"}}> 
      How we started? The concept was simple. iNotebook was born from the pain of writing all the thing in notebook which is very
      hectic. An online web platfrom where you can create,edit,upload,delete your notes/information privately and securely
      without any disturbance
      </h5>
      <Link to="/singup"><button onClick={handleonClick} style={{marginTop:"30px" , backgroundColor:"#9f27ab" ,color : "white", height : "40px" , width:"150px"}}>Sing up now</button></Link>
      </div>
    
    </div>
    <hr/>
    <div style={{ display: "flex", alignItems: "center" }}>
    <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.412781508265!2d87.3745454740921!3d23.517651497674287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7715f5d396cad%3A0xb158a587000d891c!2sNSHM%20Knowledge%20Campus%2C%20Durgapur!5e0!3m2!1sen!2sin!4v1715568310243!5m2!1sen!2sin" style={{ width:"800" ,height:"600", style:"border:0" ,allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
    <div style={{marginTop:"50px" , marginLeft :"200px"}}>
    <h3 style={{marginBottom :"10px"}}>India</h3>
    <h5>Address</h5>
    <pre>G98G+JQ9, Via Muchipara Arrah<br/>
      Shibtala Rd, Arrah Kalinagar<br/>
      Durgapur, West Bengal 713212<br/>
      2.5 km</pre>
      <h5>Phone</h5>
      <h6>079-40194188</h6>
      <h5>Email</h5>
      <h6>info@iNotebook.ind.in</h6>
    </div>
    <div style={{marginTop:"50px" , marginLeft :"200px"}}>
    <h5>Contact</h5>
    <pre>Ideal Office, WestBengal -<br/>
     +91-79-40194188
      </pre>
      <h6>West - 8488881390</h6>
      <h6>South - 82381750429</h6>
      <h6>Central - 82690175154</h6>
    </div>
    </div>
    <img src={image6} className="img-fluid" alt="Signup " style={{marginLeft :"80px" }} />
    </div>
    
  )
}

export default About

