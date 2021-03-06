import { useState } from "react";
import {Redirect} from 'react-router-dom'

function Explaination(props) {

  const [index,setIndex] = useState(0)
  const [preventClick, setpreventClick] = useState(false)
  const [home, sethome] = useState(false)

  let messages = [
  <div>
    <p>Cross-site Attacks are very common attacks that targets imporpper implementations of modifications on the DOM</p>
    </div>,
    <div>
    <p>We will demonstrate that through a chat applicaton</p>
    </div>,
    <div>
    <p>As shown here Ali is trying to show hussain a new trick</p>
    </div>,
    <div>
    <p>let's see what will happen</p>
    </div>,
    <div>
    <p>Ali is injecting javascript inside the DOM</p>
    </div>,
    <div>
    <p>Now since this is a react APP, on each message sent the alert will pop up !
      <br></br>
      try to send one</p>
    </div>,
    <div>
    <p>And this can be used to steal unprotected cookies or even Redirection!</p>
    <br></br>
    <p>it is even possible to auto-like or auto-subscribe in social medias if they have  this valnurability </p>
    <br></br>
    <p>
      You can change this "onerror" to see various attacks, using java script!
      <br></br>
      {`<img src="foo"`} <span style={{color:"red"}} > onerror </span> ="<span style={{color:"red"}} >alert('foo')</span>{`" />`}
      <br></br>
      <br></br>
      <br></br>
    
      hacksplining provide great informations about cross-site scripting and how to protect from it
      <br></br>
      <br></br>
      <br></br>
    <a href="https://www.hacksplaining.com/prevention/xss-stored">
      Hacksplaining
      </a>
    
    </p>
    </div>
    ]
    const increament = () =>{
      if(index === 7){

        return 
      }
      if(index === 1){
        props.setShow(true)
        setpreventClick(true)
        setTimeout(function(){
          setpreventClick(false)

          }, 6000);
      }
      if(index === 2){
        props.settrick(true)
        console.log("setted trick")
       
      }
      if(index === 4){
        props.setreadOnly(false)
        console.log("activated")
       
      }
      setIndex(index+1)
    }
    if (index === 7) {
      return <Redirect push to="/" />;
    }
  return (
    <>
      {/* <header className="App-header"></header> */}
       
      
        <div className="explainingContainer ma3   pa3">
          <div className="explaining  pa3  shadow-5">
            
            {messages[index]}
            
            <div className="nextContainer">
              <a
              //  href={index===6? "/" : "#"}
               >
            <button className="Next dib " onClick={increament}
             disabled={preventClick? true:false}
             >
               {index===6? <div className="returnH dib">&nbsp; Return</div>:''}
              <img src="./send.png" alt="send" className="icons-s" />
            </button>
            </a>
            </div>
          </div>
          
        </div>
    </>
  );
}

export default Explaination;


