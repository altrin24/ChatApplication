

import React, { Component } from 'react';
import  msg from "../images/msg.jpg";
import  msg2 from "../images/msg2.jpeg";
import  msg3 from "../images/msg3.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { BorderTopRounded } from '@material-ui/icons';
import { InputBase } from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import ReactFacebookLogin from 'react-facebook-login';
import Slider from "react-slick";
import './RegisterStyle.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.dot1="dot";
    this.dot2="dot";
    this.dot3="dot";

    this.img=[];
    this.index=1;
    this.img.push(msg);
    this.img.push(msg2);
    this.img.push(msg3);
    
     this.state = {
      fullName: "",
      mobNo:"",
      otp:"",img:this.img[0]
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.currentImages= this.currentImages.bind(this);
  

    this.currentImages();
  }


  currentImages(){


  
  
  }

  componentDidMount() {
     
    setInterval(()=>{

  
     this.setState({...this.state,['img']:this.img[this.index-1]})
   
      console.log(  this.state.img.toString());
      
     
       if(this.index==1){
        this.dot1 ="dot active";
        this.dot2 ="dot";
        this.dot3 ="dot";
        
       }
       else if(this.index==2){
        this.dot2 ="dot active";
        this.dot1 ="dot";
        this.dot3 ="dot";
      
       }
       else{
        this.dot3 ="dot active";
        this.dot2 ="dot";
        this.dot1 ="dot";
        this.index =0
       }
       this.index+=1;
      
     
      
      
    },3000);
  }

   handleEvent(event) {
    console.log(event.target.name);
    console.log(this.state);
    console.log(event.target.value);
    
  this.setState({
    ...this.state,
 [event.target.name]: event.target.value
}
  
  )
  };

  handleSubmit(event){
    console.log(this.state);
  }


  render(){
 
    return( <Container maxWidth="xl" style={{ 
      backgroundColor: '#697BFF',
      float:'right',padding:'0px'
    }}>
<div style ={{ display: 'flex',
    flexDirection: 'column',float:'left',width:'35%',paddingLeft:'10px',marginLeft:'20px' ,marginTop:'200px'}}>
      <div>
      <img id = "2"className="circular--square" src={this.state.img} />
    

      </div>
      <div style={{textAlign:'center',paddingTop:'150px'}}>
  <span id="1" className={ this.dot1}></span> 
  <span id="2" className= {this.dot2} ></span> 
  <span id="3"  className={this.dot3}></span> 
</div>
</div>
    
    <Typography component="div" style={{ 
      backgroundColor: 'white',
       height: '100vh' ,float:'right',
       borderTopLeftRadius :  '50px',
       borderBottomLeftRadius : '20px',
       width:'60%',
      
     
    
    }}>
      <Typography component="div" style={{ 
      backgroundColor: 'white',
      paddingLeft:'200px',
      paddingTop: '50px',
      fontWeight: 'bold',
      fontSize:'20px',
      borderTopLeftRadius :  '20px',
      //boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
     
    
    }}> Create Account</Typography>

    <div class = "social-signin">
    <GoogleLogin class = "google-signin"
             
              buttonText="Sign In with Google"
              
              cookiePolicy={"single_host_origin"}
            />
            <div class = "facebook-signin">
             <ReactFacebookLogin
         
          icon="fa-facebook"
        />
        </div>
      
      
    </div>
  <form className="register" onSubmit={this.handleSubmit}>
    <div class ="form">
      
    

<InputBase
      id="fulName"
      placeholder ="Full Name"
      name="fullName"
      style={{borderBottom:"1px solid #D5D6DD"}}
      value={this.state.fullName}
      onChange={this.handleEvent}
 
   
      fullWidth
     
    />
  
  
    <InputBase
      id="mob"
      placeholder="Mobile Number"
      name="mobNo"
      style={{borderBottom:"1px solid #D5D6DD",paddingTop:"100px", MozAppearance: "textfield"}}
      value={this.state.mobNo}
      onChange={this.handleEvent}
      type="text" inputmode="numeric"
  
      fullWidth
     
    />

<InputBase
      id="otp"
      placeholder="otp"
      name="otp"
      style={{borderBottom:"1px solid #D5D6DD",paddingTop:"100px", MozAppearance: "textfield"}}
      value={this.state.otp}
      onChange={this.handleEvent}
      type="text" inputmode="numeric"
  
      fullWidth
     
    />

<Button variant="contained" style={{marginTop:"100px", backgroundColor:"#697BFF",color:"white"}}>Create Account</Button>
   
    </div>
    </form>    
      <div className="footer"> Already have an account <span style={{color:'#697BFF'}}>Login</span></div>
    </Typography>
  </Container>);

  }
}

export default Register;
