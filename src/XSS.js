import "./App.scss";
import Chat from './components/Chat'
import Explaination from './components/Explaination'
import './transition.min.css'
import './loading.min.css'

import { useState } from "react";

function XSS() {
  const [show, setShow] = useState(false)
  const [readOnly, setreadOnly] = useState(true)
  const [trick, settrick] = useState(false)
  return (
      <div className="containerChat  ld ld-fade-in xhalf">

        <Explaination setShow={setShow} settrick={settrick}
        setreadOnly={setreadOnly}
        >
        </Explaination>
        
        {show? 
        <Chat show={show} readOnly={readOnly} trick={trick}></Chat>
        :""}
      </div>
  );
}

export default XSS;
