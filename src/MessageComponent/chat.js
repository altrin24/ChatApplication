import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchBar from 'material-ui-search-bar';
import React, {useState} from "react";
import  gamer from "../images/gamer.png";
import  woman from "../images/woman.png";
import SearchIcon from "@material-ui/icons/Search";

import  man from "../images/man.png";

function Chat() { 

  const [value, setValue] = useState(1);

  const list = []

  for (var i=0;i<100;i++) {
    list.push(<div style ={{ display: 'flex',flexDirection:'row',marginBottom:'20px'}}>
  
    <div style ={{width:'15%',height:'15%',display:'flex'}}><img style ={{width:'90%',height:'100%',marging:'10px',position: 'relative'}}  src={woman} />   </div>
    <div style={{marginLeft:'10px',display:'flex',flexDirection:'column',height:'100%'}}><div style ={{color:'#697BFF',}}><b>Saranya</b></div><div style={{fontSize:'10px'}}>Lets go</div> </div>
    
  
  </div>);
  }

    return ( 
      <Container maxWidth="xl" style={{ 
        
  padding:'0px'
      }}>
        <Typography component="div" style={{ 
      backgroundColor: '#F8F8F8',

      float:'left',
       width:'25%',
       height:'100vh'
       ,overflow: 'scroll'
      
     
    
    }} >
          <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: '300px'   ,   borderRadius :  '10px',
        marginTop:'40px',marginBottom:'10px',flexDirection:'row | row-reverse | column | column-reverse'
  
      }}
    />  
    
    <Typography component="div" style={{ margin: '0 auto', maxWidth: '300px',height:'100%',paddingTop:'10px'

   
  }}><div style ={{
    display: 'flex',
        flexDirection:'column'
        
  }}>

    <div style ={{ display: 'flex',flexDirection:'row',marginBottom:'20px'}}>
  
      <div style ={{width:'15%',height:'15%',display:'flex'}}><img style ={{width:'90%',height:'100%',marging:'10px',position: 'relative'}}  src={gamer} />   </div>
      <div style={{marginLeft:'10px',display:'flex',flexDirection:'column',height:'100%'}}><div style ={{color:'#697BFF',}}><b>Dobie</b></div><div style={{fontSize:'10px',width:'200px', whiteSpace: 'nowrap', 
  
  overflow: 'hidden',
  textOverflow: 'ellipsis' }}>Hi where are you sjadkjaskdgkagskdgkasjgdkjgaksgdkjagskjdgkjagskdjgkajsgdkjgaksjgdkjgakjsgdkgkasgdkaksjgdkjsagkjdgkajsgdkjgaksjgdkjgaksdg</div> </div>
      

    </div>
    <div style ={{ display: 'flex',flexDirection:'row',marginBottom:'20px'}}>
  
  <div style ={{width:'15%',height:'15%',display:'flex'}}><img style ={{width:'90%',height:'100%',marging:'10px',position: 'relative'}}  src={man} />   </div>
  <div style={{marginLeft:'10px',display:'flex',flexDirection:'column',height:'100%'}}><div style ={{color:'#697BFF',}}><b>Naveen</b></div><div style={{fontSize:'10px'}}>On the way</div> </div>
  

</div>

<div style ={{ display: 'flex',flexDirection:'row',marginBottom:'20px'}}>
  
  <div style ={{width:'15%',height:'15%',display:'flex'}}><img style ={{width:'90%',height:'100%',marging:'10px',position: 'relative'}}  src={woman} />   </div>
  <div style={{marginLeft:'10px',display:'flex',flexDirection:'column',height:'100%'}}><div style ={{color:'#697BFF',}}><b>Saranya</b></div><div style={{fontSize:'10px'}}>Lets go</div> </div>
  

</div>
{list}
   
    
    </div></Typography>

    </Typography>
      <Typography component="div" style={{ 

       height: '100vh' ,float:'right',
    
       width:'75%',backgroundColor:'white',overflow: 'none'
      
     
    
    }}>
    <div style ={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',margin:'10px',display: 'flex',flexDirection:'row'}}> 
    <div style ={{width:'5%',height:'5%',padding:'10px',display:'flex'}}>
      <img style ={{width:'100%',height:'100%',marging:'10px',position: 'relative'}}  src={woman} />  
     </div>
     <div style ={{color:'#697BFF',padding:'10px'}}><b>Saranya</b></div>
     <div style={{width:'100%',height:'5%',marging:'10px',padding:'10px' ,display:'flex',flexDirection:'row-reverse'}}>  
     <SearchIcon style ={{width:'5%',height:'5%',position: 'relative',color:'#E1DCDC'}}  />  
     </div>
     </div>
   
     </Typography>


      </Container>
    ); 
} 
export default Chat; 