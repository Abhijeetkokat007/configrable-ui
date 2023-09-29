import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import config from "./../../Utils/confing.json";

function Home() {
  return (
    <div className="container p-4  " style={{backgroundColor:config.theme.accentColour}} >
      {/* <button className='btn btn-primary'>Home <FontAwesomeIcon icon={faHeartCrack} /> </button> */}
      <h1 className="text-center" style={{color:config.theme.primarycolor}} > {config.title} </h1>
      <p className="text-center"> {config.description} </p>
      <h3 className="text-center"> services </h3>
      <div style={{ flexWrap: 'wrap' , flexDirection:config.ServiceCardDirection}}>
      {
      config.services.map((serviceData, index) => {
        const {title,description, price} = serviceData
        return(
        <div className="card m-4" key={index} style={{maxWidth: config.ServiceCardDirection === "row" ? "200px" : "100%"}}>
          <div className="card-body">
            <h3 className="card-title" style={{color:config.theme.secondaryColor}}> {title} </h3>
            <p className="card-description"> {description} </p>
            {/* <p className="card-text"> service </p> */}
            <p className="card-text"> Price: {price} </p>
          </div>
        </div>
        )
      })}
      </div>
    </div>
  );
}

<FontAwesomeIcon icon={faHeartCrack} />;

export default Home;
