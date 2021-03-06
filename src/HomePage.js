
import './homepage.scss'
import Card from './components/Card'
import { useState } from "react";
function HomePage() {
  let path = `${window.location.origin}`
  path = path.replace(":3000",":4000")
  console.log(path);
  return (
    <div className="App">
        <div className="header  pa2">
        {/* <a href="/"> */}
      <h1 className="tl pa2   ">
          Web Attacks
          </h1>
      {/* </a> */}
      </div>
      {/* <hr className="style-five"></hr> */}
      <div className="homeContainer">
          
       <Card name="Cross-Site Scripting" link={"./#/xss"} image={'./xss.png'} ></Card>
       {/* <Card name="Phishing Attacks" link={path} image={'/phishing2.png'}></Card>
       <Card name="SQL Injection" link={path+"/SQL-Injection-1"} image={'/SQL_injection.png'}></Card> */}
       <Card name="Phishing Attacks" link={"#"} image={'./phishing2.png'}></Card>
       <Card name="SQL Injection" link={"#"} image={'./SQL_injection.png'}></Card>
       </div>
    </div>
  );
}

export default HomePage;
