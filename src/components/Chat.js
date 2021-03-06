import React, { useState, useRef, useEffect } from "react";
import Explaination from "./Explaination";

const Chat = React.memo((props) => {
  let read = props.readOnly
  const [value, setValue] = useState();
  const [messages, setMessages] = useState([]);
  const [typing, settyping] = useState(true);
  const scrollEnd = useRef(null);
  const EnterDetector = useRef(null);

  

  let prev = 0;
  
  const scrollBottom = () => {
    if(!props.show){
      return ''
    }
    scrollEnd.current.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = () => {
    let allMessages = [];
    allMessages.push(messages);

   

    allMessages[0].push(
      <div className="wholeMessage ">
        <div className="sender  pa2 ma3 dib">You</div>

        <div className=" ba br4 thought flip-horizontally">
          <div
            className="flip-horizontally dib"
            dangerouslySetInnerHTML={{__html:value}}
          ></div>
        </div>
      </div>
    );
    
    console.log(allMessages);
    setMessages(allMessages);
  };

  const textValue = (event) => {
    setValue(event.target.value);
    console.log(event.target.value, messages);
  };

  const isEnter = (event) => {
    console.log(event.keyCode)
    
    if (event.keyCode === 13 && prev !== 16) {
      sendMessage();
      setTimeout(function () {
        scrollBottom();
      }, 100);
    }
    prev = event.keyCode
  };

  useEffect(() => {
    scrollBottom();
    setValue(``);
    // <img src="foo" onerror="alert('foo')" />
  }, [messages]);

  useEffect(() => {
    setTimeout(function () {
      setMessages([
        <div className="wholeMessage ld ld-zoom-in">
        <div className="sender2 tc pa2 ma3 dib">Ali</div>

        <div className=" ba br4 thought2">
          &nbsp;hey, do you want to see a new trick ?
        </div>
      </div>
      ])

      settyping(false)
      setTimeout(function () {
        settyping(true)
      },1000)
      
    }, 1000);
   
    setTimeout(function () {
      
      setMessages([
        
        <div className="wholeMessage ">
        <div className="sender2 tc pa2 ma3 dib">Ali</div>

        <div className=" ba br4 thought2">
          &nbsp;hey, do you want to see a new trick ?
        </div>
      </div>
        , 
        <div className="wholeMessage ld ld-zoom-in">
        <div className="sender2 tc pa2 ma3 dib">Hussain</div>

        <div className=" ba br4 thought2 flip-horizontally">
          <div className="flip-horizontally dib">&nbsp; sure...</div>
        </div>
      </div>
      ])
      settyping(false)
    }, 5000);

  }, [] );

  
  useEffect(() => {
    if ( props.trick){
      let allMessages = [];
      allMessages.push(messages);
      if (messages.length==2){
        allMessages[0][1]=
        <div className="wholeMessage ">
        <div className="sender2 tc pa2 ma3 dib">Hussain</div>
  
        <div className=" ba br4 thought2 flip-horizontally">
          <div className="flip-horizontally dib">&nbsp; sure...</div>
        </div>
      </div>
      }
      allMessages[0].push(
        
        <div className="wholeMessage ">
        <div className="sender2 tc pa2 ma3 dib">Ali</div>

        <div className=" ba br4 thought2">
        <div
              className="flip-horizontally dib"
              dangerouslySetInnerHTML={{__html:`<img src="foo" onerror="alert('Annoyance incoming!')" />`}}
            ></div>
        </div>
      </div>
      );
      
      console.log(allMessages);
      setMessages(allMessages)
    }

    

  }, [props.trick] );
  return (
    <>

      <div className="chatBackground ma2 ld ld-fade-in xhalf">
        <div className="chat ma2 br2 ba shadow-5">
          <div className="messagesBox ba  tl ">

           

            {/*  */}
            {messages}
            <div ref={scrollEnd} />

              
          </div>

          {typing ? 
          <div className="typing" style={{color: "#5df99f"}}>
          Someone is typing &nbsp;
          <div className="ld ld-ball ld-metronome" style={{color: "#5df99f"}}>
          
          </div>
          </div>
          :''}
         
          <div className="inputContainer ">
            <div className="inputBox ">
              {!read?
              <textarea
                className="messageInput"
                  onChange={textValue}
                value={value}
                onKeyDown={isEnter}
                // onKeyDown={''}
                ref={EnterDetector}
              ></textarea>
              :
              <textarea
                className="messageInput"
                value={value}
                ref={EnterDetector}
                readonly={true}
              ></textarea>
              }
            </div>

            <button className="Enter dib " onClick={ !read?sendMessage:null}>
              <img src="./send.png" alt="send" className="icons" />
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
})

export default Chat;
