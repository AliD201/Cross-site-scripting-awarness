import React from "react";
import { Link } from 'react-router-dom'

const Card = (props) => {
  const {name , link , image} = props;
  // const path = `${window.location.origin}/${id}`
    return (
      <div>
      <a href={link}>
        <div className="myCard dib br2  ma5 grow  shadow-5 tc" >
        {/* <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt="profile"/> */}
        <div className="cardImageContainer  shadow-5">
        <img src={image} alt="profile"
          className="icons-m "/>
        </div>
        <div className="cardTitle ">
          <h2 className="title">
            {name}
            </h2>
        </div>
        </div>
        </a>
        </div>
    )
}

export default Card;
